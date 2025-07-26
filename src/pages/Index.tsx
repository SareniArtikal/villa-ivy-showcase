import { PropertyHeader } from "@/components/PropertyHeader";
import { PropertyHero } from "@/components/PropertyHero";
import { PropertyTabs } from "@/components/PropertyTabs";
import { MediaGallery } from "@/components/MediaGallery";
import { PropertyContact } from "@/components/PropertyContact";
import { PropertyFooter } from "@/components/PropertyFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PropertyHeader />
      <PropertyHero />
      <PropertyTabs />
      <MediaGallery />
      <PropertyContact />
      <PropertyFooter />
    </div>
  );
};

export default Index;
