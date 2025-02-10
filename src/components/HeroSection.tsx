
import { PhoneCall, Car } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-secondary text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/f229dead-10de-4920-ba93-c60e575123a0.png')] bg-cover bg-center opacity-20" />
      <div className="container mx-auto px-4 z-10 animate-fade-in">
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-black/50 p-4 rounded-full w-32 h-32 flex items-center justify-center border-4 border-primary overflow-hidden">
              <img 
                src="/lovable-uploads/abe03395-6549-4c38-aa91-e8c43b3f586d.png" 
                alt="4 Way Road Side Auto Assistance Van"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-primary">4 Way</span>{" "}
            <span className="text-green-500">Road Side</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Auto Assistance LLC
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            24/7 Emergency Roadside Assistance Services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full animate-pulse"
              onClick={() => window.location.href = "tel:347-513-8284"}
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              Call Now: 347-513-8284
            </Button>
            <Link to="/feed">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full"
              >
                Latest Updates
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
