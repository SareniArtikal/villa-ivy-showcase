import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Globe
} from "lucide-react";

export const PropertyFooter = () => {
  return (
    <footer className="bg-villa-text text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">STUDIO FRADRIGO</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Professional architectural design and development services. 
              Creating exceptional living spaces on the Croatian coast.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="text-white hover:bg-villa-blue/20 p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-villa-blue/20 p-2">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-villa-blue/20 p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Villa Ivy */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-villa-blue-light">Villa Ivy</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Luxury Mediterranean Villa</li>
              <li>• 232.08 m² Total Area</li>
              <li>• 4 Bedrooms & 4 Bathrooms</li>
              <li>• Pool & Premium Amenities</li>
              <li>• Premium Location in Omiš</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-villa-blue-light" />
                <span>viktor.pirovic@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-villa-blue-light" />
                <span>+385 (0) 21 757 239</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-villa-blue-light" />
                <span>+385 (0) 91 585 6216</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-villa-blue-light" />
                <span>www.zubotektura.com.hr</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Office Location</h3>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-villa-blue-light mt-0.5" />
                <div>
                  <div>DRAGE IVANIŠEVIĆA 1</div>
                  <div>21310 OMIŠ</div>
                  <div>Croatia</div>
                </div>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-villa-blue-light text-villa-blue-light hover:bg-villa-blue-light hover:text-villa-text"
            >
              <MapPin className="w-4 h-4 mr-2" />
              View on Map
            </Button>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-white/60">
            © 2024 STUDIO FRADRIGO d.o.o. All rights reserved. | OIB: 21806835331
          </div>
          <div className="flex space-x-6 text-sm text-white/60">
            <a href="#" className="hover:text-villa-blue-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-villa-blue-light transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-villa-blue-light transition-colors">Legal Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};