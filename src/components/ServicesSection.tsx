
import { Car, Battery, Key, Wrench, LightbulbOff } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: Car,
    title: "Flat Tire",
    description: "Quick tire change and repair services available 24/7",
  },
  {
    icon: Battery,
    title: "Jump Start",
    description: "Battery jump start service to get you back on the road",
  },
  {
    icon: Key,
    title: "Locked Out",
    description: "Professional lockout service for all vehicle types",
  },
  {
    icon: LightbulbOff,
    title: "Light Repair",
    description: "Headlight & tail light repair and replacement",
  },
  {
    icon: Wrench,
    title: "Gas & Diesel",
    description: "Fuel delivery service when you run out of gas",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our <span className="text-primary">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
