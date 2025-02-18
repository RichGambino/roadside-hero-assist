import { useState } from "react";
import { Rss, Image as ImageIcon, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Feed = () => {
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const [feedItems, setFeedItems] = useState([
    {
      id: 1,
      title: "24/7 Emergency Services Available",
      content: "We're always here when you need us, any time, any day.",
      date: "2024-02-20",
      image: null,
      video: null,
    },
    {
      id: 2,
      title: "New Service Area Added",
      content: "Now serving additional areas in the Greater New York region.",
      date: "2024-02-19",
      image: null,
      video: null,
    },
    {
      id: 3,
      title: "Quick Response Times",
      content: "Our average response time is under 30 minutes.",
      date: "2024-02-18",
      image: null,
      video: null,
    },
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    image: null as File | null,
    video: null as File | null,
  });

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileType = file.type.split('/')[0];
      const fileSize = file.size / (1024 * 1024); // Convert to MB

      const sizeLimit = fileType === 'video' ? 20 : 5;
      
      if (fileSize > sizeLimit) {
        toast({
          title: "Error",
          description: `File too large. ${fileType === 'video' ? 'Videos' : 'Images'} must be under ${sizeLimit}MB`,
          variant: "destructive",
        });
        return;
      }
      
      if (fileType === 'image') {
        setNewPost({ ...newPost, image: file, video: null });
      } else if (fileType === 'video') {
        setNewPost({ ...newPost, video: file, image: null });
      } else {
        toast({
          title: "Error",
          description: "Unsupported file type. Please upload an image or video.",
          variant: "destructive",
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newPost.title || !newPost.content) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    let mediaUrl = null;
    const mediaFile = newPost.image || newPost.video;
    
    if (mediaFile) {
      const timestamp = Date.now();
      const fileExt = mediaFile.name.split('.').pop();
      const sanitizedFileName = `${timestamp}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      
      try {
        const { data, error } = await supabase.storage
          .from('posts')
          .upload(sanitizedFileName, mediaFile, {
            cacheControl: '3600',
            upsert: false
          });

        if (error) throw error;

        const { data: { publicUrl } } = supabase.storage
          .from('posts')
          .getPublicUrl(data.path);

        mediaUrl = publicUrl;
      } catch (error) {
        console.error('Error uploading media:', error);
        toast({
          title: "Error",
          description: "Failed to upload media. Please try again.",
          variant: "destructive",
        });
        setIsUploading(false);
        return;
      }
    }

    const post = {
      id: feedItems.length + 1,
      title: newPost.title,
      content: newPost.content,
      date: new Date().toISOString().split('T')[0],
      image: newPost.image ? mediaUrl : null,
      video: newPost.video ? mediaUrl : null,
    };

    setFeedItems([post, ...feedItems]);
    setNewPost({ title: "", content: "", image: null, video: null });
    setIsUploading(false);
    
    toast({
      title: "Success",
      description: "Your update has been posted",
    });
  };

  return (
    <div className="min-h-screen bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-primary p-4 rounded-full">
              <Rss size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-primary">Latest</span>{" "}
            <span className="text-green-500">Updates</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Stay informed about our services and news
          </p>
        </div>

        {/* Upload Form */}
        <div className="max-w-3xl mx-auto mb-12">
          <form onSubmit={handleSubmit} className="bg-black/50 p-6 rounded-lg border border-primary/20 space-y-4">
            <h2 className="text-2xl font-semibold text-primary mb-4">Create New Update</h2>
            <div className="space-y-2">
              <label className="text-white">Title</label>
              <Input
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                placeholder="Enter title"
                className="bg-black/50 border-primary/20 text-white"
                disabled={isUploading}
              />
            </div>
            <div className="space-y-2">
              <label className="text-white">Content</label>
              <Textarea
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                placeholder="Enter content"
                className="bg-black/50 border-primary/20 text-white"
                disabled={isUploading}
              />
            </div>
            <div className="space-y-2">
              <label className="text-white block mb-2">Upload Media (Image or Video)</label>
              <div className="flex items-center space-x-2">
                <Input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleMediaChange}
                  className="bg-black/50 border-primary/20 text-white file:bg-primary file:text-white file:border-0 file:rounded-md"
                  disabled={isUploading}
                />
                <ImageIcon className="text-primary w-6 h-6" />
              </div>
              {(newPost.image || newPost.video) && (
                <div className="mt-2">
                  <p className="text-sm text-green-500">
                    Media selected: {newPost.image?.name || newPost.video?.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {newPost.video ? 'Video max size: 20MB' : 'Image max size: 5MB'}
                  </p>
                </div>
              )}
            </div>
            <Button 
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white"
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Post Update"}
            </Button>
          </form>
        </div>

        {/* Feed Items */}
        <div className="grid gap-6 max-w-3xl mx-auto">
          {feedItems.map((item) => (
            <div
              key={item.id}
              className="bg-black/50 p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors animate-fade-in"
            >
              {item.image && (
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              {item.video && (
                <video
                  src={item.video}
                  controls
                  preload="metadata"
                  className="w-full rounded-lg mb-4"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              )}
              <h3 className="text-xl font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-4">{item.content}</p>
              <time className="text-sm text-gray-400">{item.date}</time>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
