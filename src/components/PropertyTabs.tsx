import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  MapPin,
  FileText
} from "lucide-react";

const projectDetails = {
  location: "Cadastral Parcel k.č. 1228/1, k.o. Omiš",
  investor: "Anja Kuhn",
  phase: "Preliminary Design (Idejni projekt arhitektura)",
  elevation: "±0.00 m (Relative) / +132.00 mnv (Absolute)",
  firm: "STUDIO FRADRIGO d.o.o.",
  contact: "viktor.pirovic@gmail.com",
  totalArea: "232.08 m²",
  parcelArea: "605.04 m²"
};

const groundFloorData = {
  title: "Ground Floor",
  titleCroatian: "Prizemlje", 
  area: "86.34 m²",
  rooms: [
    { name: "Living Room", nameCroatian: "Dnevni boravak", area: "48.55 m²", icon: Home },
    { name: "Bathroom", nameCroatian: "Kupaonica", area: "5.56 m²", icon: Bath },
    { name: "Storage", nameCroatian: "Ostava", area: "9.95 m²", icon: Archive },
    { name: "Gym", nameCroatian: "Teretana", area: "6.18 m²", icon: Dumbbell }
  ],
  images: [
    "/img/ground-floor/LIVING ROOM - A.webp",
    "/img/ground-floor/LIVING ROOM -B.webp",
    "/img/ground-floor/LIVING ROOM -C.webp",
    "/img/ground-floor/LIVING ROOM - D.webp",
    "/img/ground-floor/KITCHEN - A.webp",
    "/img/ground-floor/KITCHEN - B.webp",
    "/img/ground-floor/KITCHEN - C.webp",
    "/img/ground-floor/KITCHEN - D.webp",
    "/img/ground-floor/DINING AREA - A.webp",
    "/img/ground-floor/DINING AREA - B.webp",
    "/img/ground-floor/DINING AREA - C.webp",
    "/img/ground-floor/BAR AREA - A.webp",
    "/img/ground-floor/BAR AREA - B.webp",
    "/img/ground-floor/BAR AREA - C.webp",
    "/img/ground-floor/BAR AREA - D.webp",
    "/img/ground-floor/POOL AREA - A.webp",
    "/img/ground-floor/POOL AREA - B.webp",
    "/img/ground-floor/GYM - A.webp",
    "/img/ground-floor/GYM - B.webp"
  ]
};

const firstFloorData = {
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
  ],
  images: [
    "/img/first-floor/ROOM-2-A.webp",
    "/img/first-floor/ROOM-2-B.webp",
    "/img/first-floor/ROOM-2-C.webp",
    "/img/first-floor/ROOM-2-D.webp",
    "/img/first-floor/ROOM-3-A.webp",
    "/img/first-floor/ROOM-3-B.webp",
    "/img/first-floor/ROOM-3-C.webp",
    "/img/first-floor/ROOM-3-D.webp",
    "/img/first-floor/ROOM-3.webp",
    "/img/first-floor/ROOM-4-A.webp",
    "/img/first-floor/ROOM-4-B.webp",
    "/img/first-floor/ROOM-4-C.webp",
    "/img/first-floor/ROOM-4-D.webp",
    "/img/first-floor/ROOM-4.webp"
  ]
};

const secondFloorData = {
  title: "2nd Floor",
  titleCroatian: "Nadgrađe",
  area: "16.59 m²",
  rooms: [
    { name: "Entrance/Staircase", nameCroatian: "Ulaz/stubište", area: "11.70 m²", icon: Navigation }
  ],
  images: [
    "/img/2nd-floor/PARKING.webp"
  ]
};

const FloorContent = ({ floorData }: { floorData: typeof groundFloorData }) => (
  <div className="space-y-8">
    {/* Floor Overview */}
    <Card className="bg-gradient-card shadow-villa-card">
      <CardHeader className="border-b border-villa-blue/10">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl text-villa-text flex items-center gap-3">
              {floorData.title}
              <Badge variant="secondary" className="bg-villa-accent text-villa-text">
                {floorData.area}
              </Badge>
            </CardTitle>
            <p className="text-villa-text/60 mt-1">{floorData.titleCroatian}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {floorData.rooms.map((room, roomIndex) => {
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

    {/* Floor Images */}
    <Card className="bg-gradient-card shadow-villa-card">
      <CardHeader>
        <CardTitle className="text-xl text-villa-text">Floor Images</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {floorData.images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-villa-hover transition-all duration-300">
              <img 
                src={image} 
                alt={`${floorData.title} view ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                  {image.split('/').pop()?.replace('.webp', '').replace(/[-_]/g, ' ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export const PropertyTabs = () => {
  return (
    <section className="py-12 bg-villa-neutral/30">
      <div className="container mx-auto px-6">
        <Tabs defaultValue="specifications" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/80 backdrop-blur-sm shadow-villa-card">
            <TabsTrigger 
              value="specifications" 
              className="flex items-center gap-2 data-[state=active]:bg-villa-blue data-[state=active]:text-white"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Project Specifications</span>
              <span className="sm:hidden">Specs</span>
            </TabsTrigger>
            <TabsTrigger 
              value="ground-floor"
              className="flex items-center gap-2 data-[state=active]:bg-villa-blue data-[state=active]:text-white"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Ground Floor</span>
              <span className="sm:hidden">Ground</span>
            </TabsTrigger>
            <TabsTrigger 
              value="first-floor"
              className="flex items-center gap-2 data-[state=active]:bg-villa-blue data-[state=active]:text-white"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">1st Floor</span>
              <span className="sm:hidden">1st</span>
            </TabsTrigger>
            <TabsTrigger 
              value="second-floor"
              className="flex items-center gap-2 data-[state=active]:bg-villa-blue data-[state=active]:text-white"
            >
              <Navigation className="w-4 h-4" />
              <span className="hidden sm:inline">2nd Floor</span>
              <span className="sm:hidden">2nd</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="specifications" className="mt-0">
            <div className="space-y-8">
              {/* Summary Cards */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="bg-gradient-card shadow-villa-card hover:shadow-villa-hover transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-villa-blue mb-2">{projectDetails.totalArea}</div>
                    <div className="text-villa-text/60">Total Gross Area</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card shadow-villa-card hover:shadow-villa-hover transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-villa-blue mb-2">{projectDetails.parcelArea}</div>
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

              {/* Project Details */}
              <Card className="bg-gradient-card shadow-villa-card">
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
                        <div className="text-villa-text">{projectDetails.location}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-villa-text/60">Investor</div>
                        <div className="text-villa-text">{projectDetails.investor}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-villa-text/60">Project Phase</div>
                        <div className="text-villa-text">{projectDetails.phase}</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-villa-text/60">Elevation</div>
                        <div className="text-villa-text">{projectDetails.elevation}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-villa-text/60">Architecture Firm</div>
                        <div className="text-villa-text">{projectDetails.firm}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-villa-text/60">Contact</div>
                        <div className="text-villa-text">{projectDetails.contact}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ground-floor" className="mt-0">
            <FloorContent floorData={groundFloorData} />
          </TabsContent>

          <TabsContent value="first-floor" className="mt-0">
            <FloorContent floorData={firstFloorData} />
          </TabsContent>

          <TabsContent value="second-floor" className="mt-0">
            <FloorContent floorData={secondFloorData} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};