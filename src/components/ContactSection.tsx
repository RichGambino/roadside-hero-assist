
import { MapPin, Clock, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in">
            <h2 className="text-4xl font-bold">
              Need <span className="text-primary">Assistance?</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <PhoneCall className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">24/7 Emergency Line</h3>
                  <p className="text-gray-300">347-513-8284</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Service Area</h3>
                  <p className="text-gray-300">Greater New York Area</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Available</h3>
                  <p className="text-gray-300">24 Hours / 7 Days</p>
                </div>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full"
              onClick={() => window.location.href = "tel:347-513-8284"}
            >
              Contact Us Now
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986732363037!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1696431291257!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
