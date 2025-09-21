import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CertificatesSection from "@/components/CertificatesSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <CertificatesSection />
      <SkillsSection />
      <ProjectsSection />
      <BookingSection />
      <ContactSection />
      <ChatBot />
    </div>
  );
};

export default Index;
