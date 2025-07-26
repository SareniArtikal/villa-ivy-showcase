import { Button } from "@/components/ui/button";
import { PlayCircle, Eye, Download } from "lucide-react";
import villaHero from "@/assets/villa-ivy-hero.png";

export const PropertyHero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-villa-blue/5 via-transparent to-villa-accent/20" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-villa-text leading-tight">
                Villa
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {" "}Ivy
                </span>
              </h1>
              <p className="text-xl text-villa-text/80 leading-relaxed max-w-lg">
                Experience luxury living in this stunning Mediterranean villa featuring modern architecture, premium finishes, and breathtaking views.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-villa-blue">232</div>
                <div className="text-sm text-villa-text/60">Total m²</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-villa-blue">4</div>
                <div className="text-sm text-villa-text/60">Levels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-villa-blue">605</div>
                <div className="text-sm text-villa-text/60">Parcel m²</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-villa-hover transition-all duration-300 px-8">
                <Eye className="w-5 h-5 mr-2" />
                Virtual Tour
              </Button>
              <Button variant="outline" size="lg" className="border-villa-blue text-villa-blue hover:bg-villa-blue hover:text-white transition-all duration-300">
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch Video
              </Button>
              <Button variant="secondary" size="lg" className="hover:shadow-villa-card transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Brochure
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <img 
                src={villaHero} 
                alt="Villa Ivy Exterior" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-villa-blue/20 via-transparent to-transparent" />
              
              {/* Floating info cards */}
              <div className="absolute top-6 left-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-villa-card animate-float">
                <div className="text-sm text-villa-text/60">Starting from</div>
                <div className="text-lg font-bold text-villa-blue">€1,200,000</div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-villa-card">
                <div className="text-sm text-villa-text/60">Location</div>
                <div className="text-lg font-bold text-villa-text">Omiš, Croatia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};