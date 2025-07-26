import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Video, 
  Box, 
  Play, 
  Download,
  Eye,
  Grid3X3,
  Image as ImageIcon
} from "lucide-react";

const mediaCategories = [
  {
    id: "photos",
    title: "Photos",
    icon: Camera,
    count: 24,
    description: "High-resolution property images"
  },
  {
    id: "videos",
    title: "Videos", 
    icon: Video,
    count: 3,
    description: "Cinematic property tours"
  },
  {
    id: "3d",
    title: "3D Models",
    icon: Box,
    count: 1,
    description: "Interactive 3D experience"
  }
];

const placeholderMedia = [
  {
    id: 1,
    type: "photo",
    title: "Exterior View",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    isPlaceholder: true
  },
  {
    id: 2,
    type: "photo", 
    title: "Living Room",
    thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=400&q=80",
    isPlaceholder: true
  },
  {
    id: 3,
    type: "video",
    title: "Property Tour",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80",
    isPlaceholder: true
  },
  {
    id: 4,
    type: "3d",
    title: "Interactive Model",
    thumbnail: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=400&q=80",
    isPlaceholder: true
  }
];

export const MediaGallery = () => {
  const [activeCategory, setActiveCategory] = useState("photos");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-villa-text mb-4">
            Media Gallery
          </h2>
          <p className="text-xl text-villa-text/70 max-w-2xl mx-auto">
            Explore Villa Ivy through stunning visuals and immersive experiences
          </p>
        </div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {mediaCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 transition-all duration-300 ${
                  activeCategory === category.id 
                    ? "bg-gradient-primary shadow-villa-hover" 
                    : "border-villa-blue text-villa-blue hover:bg-villa-blue hover:text-white"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{category.title}</span>
                <Badge variant="secondary" className="bg-villa-accent/50">
                  {category.count}
                </Badge>
              </Button>
            );
          })}
        </div>

        {/* Media Upload Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mediaCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id}
                className={`bg-gradient-card shadow-villa-card hover:shadow-villa-hover transition-all duration-300 cursor-pointer ${
                  activeCategory === category.id ? "ring-2 ring-villa-blue" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-villa-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-villa-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-villa-text mb-2">
                      {category.title}
                    </h3>
                    <p className="text-villa-text/60 text-sm mb-4">
                      {category.description}
                    </p>
                    <Badge variant="outline" className="border-villa-blue text-villa-blue">
                      {category.count} items ready
                    </Badge>
                  </div>
                  
                  <div className="border-2 border-dashed border-villa-blue/30 rounded-lg p-6 bg-villa-accent/20">
                    <div className="text-villa-text/40 text-sm">
                      Upload area ready for your {category.title.toLowerCase()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Placeholder Gallery */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-villa-text">
              Preview Gallery
            </h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-villa-blue text-villa-blue">
                <Grid3X3 className="w-4 h-4 mr-2" />
                Grid View
              </Button>
              <Button variant="outline" size="sm" className="border-villa-blue text-villa-blue">
                <Download className="w-4 h-4 mr-2" />
                Download All
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {placeholderMedia.map((item) => (
              <Card 
                key={item.id}
                className="group bg-gradient-card shadow-villa-card hover:shadow-villa-hover transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img 
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Media Type Overlay */}
                  <div className="absolute top-3 left-3">
                    <Badge 
                      variant="secondary" 
                      className="bg-black/70 text-white border-0"
                    >
                      {item.type === "photo" && <ImageIcon className="w-3 h-3 mr-1" />}
                      {item.type === "video" && <Video className="w-3 h-3 mr-1" />}
                      {item.type === "3d" && <Box className="w-3 h-3 mr-1" />}
                      {item.type.toUpperCase()}
                    </Badge>
                  </div>

                  {/* Action Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-villa-blue hover:bg-villa-blue-dark">
                        <Eye className="w-4 h-4" />
                      </Button>
                      {item.type === "video" && (
                        <Button size="sm" variant="secondary">
                          <Play className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Placeholder indicator */}
                  {item.isPlaceholder && (
                    <div className="absolute bottom-3 right-3">
                      <Badge variant="outline" className="bg-white/90 text-villa-text text-xs">
                        Preview
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-4">
                  <h4 className="font-medium text-villa-text">{item.title}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upload Instructions */}
        <Card className="mt-12 bg-villa-accent/20 border-villa-blue/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold text-villa-text mb-4">
              Ready for Your Media
            </h3>
            <p className="text-villa-text/70 mb-6 max-w-2xl mx-auto">
              This gallery is ready to showcase your property's photos, videos, and 3D models. 
              Upload your content to create an immersive experience for potential buyers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gradient-primary hover:shadow-villa-hover">
                Upload Photos
              </Button>
              <Button variant="outline" className="border-villa-blue text-villa-blue hover:bg-villa-blue hover:text-white">
                Upload Videos
              </Button>
              <Button variant="outline" className="border-villa-blue text-villa-blue hover:bg-villa-blue hover:text-white">
                Upload 3D Model
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};