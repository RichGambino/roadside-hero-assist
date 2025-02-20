
import { PhoneCall, Car } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-secondary text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-green-500/20 to-blue-500/20 animate-pulse" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/f229dead-10de-4920-ba93-c60e575123a0.png')] bg-cover bg-center opacity-20" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-6">
          {/* Animated logo with reduced bounce */}
          <div className="flex justify-center items-center mb-6">
            <div className="bg-black/50 p-4 rounded-full w-32 h-32 flex items-center justify-center border-4 border-primary hover:scale-105 transition-transform duration-300 overflow-hidden">
              <img 
                src="/lovable-uploads/abe03395-6549-4c38-aa91-e8c43b3f586d.png" 
                alt="4 Way Road Side Auto Assistance Van"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Animated headings */}
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-orange-400 to-yellow-500 animate-fade-in">
            <span className="hover:text-primary transition-colors">4 Way</span>{" "}
            <span className="hover:text-green-400 transition-colors">Road Side</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold mb-8 animate-slide-in">
            Auto Assistance LLC
          </h2>

          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in text-gray-300 hover:text-white transition-colors">
            24/7 Emergency Roadside Assistance Services
          </p>

          {/* Animated buttons with bounce */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 animate-bounce"
              onClick={() => window.location.href = "tel:347-513-8284"}
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              Call Now: 347-513-8284
            </Button>
            <Link to="/feed">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 animate-bounce"
              >
                Latest Updates
              </Button>
            </Link>
          </div>

          {/* Floating service icons */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {['Battery', 'Tire', 'Fuel'].map((service, index) => (
              <div
                key={service}
                className="bg-black/30 p-6 rounded-xl backdrop-blur-sm border border-white/10 transform hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Car className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="text-sm font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent" />
    </div>
  );
};

export default HeroSection;
