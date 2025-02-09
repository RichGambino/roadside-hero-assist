
import { useState } from "react";
import { Rss, Image as ImageIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Feed = () => {
  const { toast } = useToast();
  const [feedItems, setFeedItems] = useState([
    {
      id: 1,
      title: "24/7 Emergency Services Available",
      content: "We're always here when you need us, any time, any day.",
      date: "2024-02-20",
      image: null,
    },
    {
      id: 2,
      title: "New Service Area Added",
      content: "Now serving additional areas in the Greater New York region.",
      date: "2024-02-19",
      image: null,
    },
    {
      id: 3,
      title: "Quick Response Times",
      content: "Our average response time is under 30 minutes.",
      date: "2024-02-18",
      image: null,
    },
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    image: null as File | null,
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewPost({ ...newPost, image: e.target.files[0] });
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

    let imageUrl = null;
    if (newPost.image) {
      const formData = new FormData();
      formData.append('image', newPost.image);
      
      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });
        
        if (response.ok) {
          const data = await response.json();
          imageUrl = data.url;
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        toast({
          title: "Error",
          description: "Failed to upload image",
          variant: "destructive",
        });
        return;
      }
    }

    const post = {
      id: feedItems.length + 1,
      title: newPost.title,
      content: newPost.content,
      date: new Date().toISOString().split('T')[0],
      image: imageUrl,
    };

    setFeedItems([post, ...feedItems]);
    setNewPost({ title: "", content: "", image: null });
    
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
              />
            </div>
            <div className="space-y-2">
              <label className="text-white">Content</label>
              <Textarea
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                placeholder="Enter content"
                className="bg-black/50 border-primary/20 text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-white block mb-2">Upload Image</label>
              <div className="flex items-center space-x-2">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="bg-black/50 border-primary/20 text-white file:bg-primary file:text-white file:border-0 file:rounded-md"
                />
                <ImageIcon className="text-primary w-6 h-6" />
              </div>
              {newPost.image && (
                <p className="text-sm text-green-500">Image selected: {newPost.image.name}</p>
              )}
            </div>
            <Button 
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Post Update
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
