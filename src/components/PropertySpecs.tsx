import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Bath, 
  Car, 
  Waves, 
  Dumbbell,
  Archive,
  Navigation,
  MapPin
} from "lucide-react";

const floorData = [
  {
    title: "Basement",
    titleCroatian: "Suteren",
    area: "11.72 m²",
    rooms: [
      { name: "Pool Machine Room", nameCroatian: "Strojarica bazena", area: "8.51 m²", icon: Waves }
    ]
  },
  {
    title: "Ground Floor",
    titleCroatian: "Prizemlje", 
    area: "86.34 m²",
    rooms: [
      { name: "Living Room", nameCroatian: "Dnevni boravak", area: "48.55 m²", icon: Home },
      { name: "Bathroom", nameCroatian: "Kupaonica", area: "5.56 m²", icon: Bath },
      { name: "Storage", nameCroatian: "Ostava", area: "9.95 m²", icon: Archive },
      { name: "Gym", nameCroatian: "Teretana", area: "6.18 m²", icon: Dumbbell }
    ]
  },
  {
    title: "1st Floor",
    titleCroatian: "1. Kat",
    area: "117.43 m²", 
    rooms: [
      { name: "Bedroom", nameCroatian: "Soba", area: "18.18 m²", icon: Home },
      { name: "Bedroom", nameCroatian: "Soba", area: "14.52 m²", icon: Home },
      { name: "Bedroom", nameCroatian: "Soba", area: "13.52 m²", icon: Home },
      { name: "Bedroom", nameCroatian: "Soba", area: "13.33 m²", icon: Home },
      { name: "Bathroom", nameCroatian: "Kupaonica", area: "6.78 m²", icon: Bath },
      { name: "Bathroom", nameCroatian: "Kupaonica", area: "5.52 m²", icon: Bath },
      { name: "Bathroom Zone", nameCroatian: "Zona kupaonice", area: "6.94 m²", icon: Bath },
      { name: "Staircase", nameCroatian: "Stubište", area: "19.47 m²", icon: Navigation },
      { name: "WC", nameCroatian: "WC", area: "1.38 m²", icon: Bath }
    ]
  },
  {
    title: "2nd Floor",
    titleCroatian: "Nadgrađe",
    area: "16.59 m²",
    rooms: [
      { name: "Entrance/Staircase", nameCroatian: "Ulaz/stubište", area: "11.70 m²", icon: Navigation }
    ]
  }
];

export const PropertySpecs = () => {
  return (
    <section className="py-20 bg-villa-neutral/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-villa-text mb-4">
            Property Specifications
          </h2>
          <p className="text-xl text-villa-text/70 max-w-2xl mx-auto">
            Detailed breakdown of Villa Ivy's luxurious spaces and premium amenities
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="bg-gradient-card shadow-villa-card hover:shadow-villa-hover transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-villa-blue mb-2">232.08 m²</div>
              <div className="text-villa-text/60">Total Gross Area</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-villa-card hover:shadow-villa-hover transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-villa-blue mb-2">605.04 m²</div>
              <div className="text-villa-text/60">Parcel Area</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-villa-card hover:shadow-villa-hover transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-villa-blue mb-2">4</div>
              <div className="text-villa-text/60">Bedrooms</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-villa-card hover:shadow-villa-hover transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-villa-blue mb-2">4</div>
              <div className="text-villa-text/60">Bathrooms</div>
            </CardContent>
          </Card>
        </div>

        {/* Floor Plans */}
        <div className="space-y-8">
          {floorData.map((floor, index) => (
            <Card 
              key={floor.title} 
              className="bg-gradient-card shadow-villa-card hover:shadow-villa-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="border-b border-villa-blue/10">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-villa-text flex items-center gap-3">
                      {floor.title}
                      <Badge variant="secondary" className="bg-villa-accent text-villa-text">
                        {floor.area}
                      </Badge>
                    </CardTitle>
                    <p className="text-villa-text/60 mt-1">{floor.titleCroatian}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {floor.rooms.map((room, roomIndex) => {
                    const IconComponent = room.icon;
                    return (
                      <div 
                        key={roomIndex}
                        className="flex items-center space-x-3 p-4 rounded-lg bg-villa-neutral/50 hover:bg-villa-accent/30 transition-all duration-200"
                      >
                        <div className="p-2 rounded-lg bg-villa-blue/10">
                          <IconComponent className="w-5 h-5 text-villa-blue" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-villa-text text-sm">{room.name}</div>
                          <div className="text-xs text-villa-text/50">{room.nameCroatian}</div>
                          <div className="text-sm font-semibold text-villa-blue">{room.area}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Details */}
        <Card className="mt-16 bg-gradient-card shadow-villa-card">
          <CardHeader>
            <CardTitle className="text-2xl text-villa-text flex items-center gap-3">
              <MapPin className="w-6 h-6 text-villa-blue" />
              Project Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-villa-text/60">Location</div>
                  <div className="text-villa-text">Cadastral Parcel k.č. 1228/1, k.o. Omiš</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-villa-text/60">Investor</div>
                  <div className="text-villa-text">Anja Kuhn</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-villa-text/60">Project Phase</div>
                  <div className="text-villa-text">Preliminary Design (Idejni projekt arhitektura)</div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-villa-text/60">Elevation</div>
                  <div className="text-villa-text">±0.00 m (Relative) / +132.00 mnv (Absolute)</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-villa-text/60">Architecture Firm</div>
                  <div className="text-villa-text">STUDIO FRADRIGO d.o.o.</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-villa-text/60">Contact</div>
                  <div className="text-villa-text">viktor.pirovic@gmail.com</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};