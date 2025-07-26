import { Building2, MapPin, Calendar } from "lucide-react";
import villaLogo from "@/assets/villa-ivy-logo.png";

export const PropertyHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-villa-blue/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={villaLogo} 
              alt="Villa Ivy" 
              className="h-12 w-auto animate-float"
            />
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold text-villa-text">Villa Ivy</h1>
              <p className="text-sm text-villa-blue">Luxury Mediterranean Villa</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-villa-text">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-villa-blue" />
              <span>Omiš, Croatia</span>
            </div>
            <div className="flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-villa-blue" />
              <span>232.08 m²</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-villa-blue" />
              <span>Available Now</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};