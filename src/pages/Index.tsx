import HeroSection from "@/components/HeroSection";
import CertificatesSection from "@/components/CertificatesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CertificatesSection />
      <ProjectsSection />
      <ContactSection />
      <ChatBot />
    </div>
  );
};

export default Index;
