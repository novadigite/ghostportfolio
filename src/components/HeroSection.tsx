import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Calendar, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-32 px-4 bg-background overflow-hidden">
      {/* Professional Background Effects */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-brand-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-brand-accent/10 to-brand-blue/10 rounded-full blur-3xl opacity-60"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Professional Avatar with premium animations */}
          <div className="animate-bounce-in">
            <Avatar className="w-44 h-44 border-4 border-brand-accent/30 shadow-2xl hover:shadow-brand-accent/50 transition-all duration-500 hover:animate-neon-glow">
              <AvatarImage src="/placeholder.svg" alt="Bamba Douty Ibrahim" />
              <AvatarFallback className="text-5xl font-bold bg-gradient-to-br from-brand-dark to-dark-600 text-brand-accent">
                BDI
              </AvatarFallback>
            </Avatar>
          </div>
          
          {/* Professional Name & Title with enhanced animations */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-brand-accent via-brand-blue to-brand-accent bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-shift">
              Bamba Douty Ibrahim
            </h1>
            
            <h2 className="text-xl lg:text-2xl font-semibold text-foreground/90 max-w-4xl">
              Étudiant en Réseau et Sécurité Informatique (Licence 3) | Programmeur Python & Django
            </h2>
          </div>

          {/* Professional Mission Statement */}
          <div className="animate-fade-in-up max-w-5xl" style={{ animationDelay: '0.5s' }}>
            <p className="text-2xl lg:text-3xl font-medium text-foreground/85 mb-6 leading-relaxed">
              Passionné par la <span className="text-brand-accent font-semibold">cybersécurité</span>, 
              le <span className="text-brand-blue font-semibold">développement web</span> et 
              le <span className="text-brand-accent font-semibold">vibe coding</span>.
            </p>
          </div>

          {/* Enhanced Bio */}
          <div className="animate-fade-in-up max-w-5xl" style={{ animationDelay: '0.7s' }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Étudiant en Licence 3 Réseau et Sécurité Informatique, spécialisé dans la sécurisation 
              des infrastructures et le développement d'applications web avec Python/Django. 
              Compétences supplémentaires : vibe coding et production numérique.
            </p>
          </div>

          {/* Professional Social Links */}
          <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/douty-ibrahim-bamba-994577330/", label: "LinkedIn" },
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Mail, href: "mailto:contact@bambadoutyibrahim.com", label: "Email" }
            ].map((social, index) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white hover:scale-110 hover:animate-blue-glow transition-all duration-300 hover:shadow-lg"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
            <Button 
              size="lg" 
              className="px-12 py-4 text-lg group bg-brand-accent text-black hover:bg-brand-accent/90 hover:animate-neon-glow shadow-lg hover:shadow-brand-accent/50 transition-all duration-300 hover:scale-105 font-semibold rounded-xl"
              asChild
            >
              <a href="#contact">
                Me Contacter
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-12 py-4 text-lg border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white hover:scale-105 hover:animate-blue-glow transition-all duration-300 hover:shadow-lg font-semibold rounded-xl" 
              asChild
            >
              <a href="#booking">
                <Calendar className="h-5 w-5 mr-2" />
                Prendre Rendez-vous
              </a>
            </Button>
          </div>

          {/* Professional Skills Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-12 max-w-6xl animate-slide-up" style={{ animationDelay: '1.3s' }}>
            {/* Développement Web */}
            <div className="bg-card/50 backdrop-blur-sm border border-brand-blue/20 rounded-xl p-4 hover:bg-card/70 hover:border-brand-blue/40 transition-all duration-300 hover:animate-card-hover">
              <h4 className="text-brand-blue font-semibold mb-2">Développement Web</h4>
              <div className="flex flex-wrap gap-1">
                {["Python", "Django", "HTML/CSS", "Vibe Coding"].map((skill) => (
                  <span key={skill} className="text-xs px-2 py-1 bg-brand-blue/10 text-brand-blue rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Cybersécurité */}
            <div className="bg-card/50 backdrop-blur-sm border border-brand-accent/20 rounded-xl p-4 hover:bg-card/70 hover:border-brand-accent/40 transition-all duration-300 hover:animate-card-hover">
              <h4 className="text-brand-accent font-semibold mb-2">Cybersécurité</h4>
              <div className="flex flex-wrap gap-1">
                {["Réseaux", "Sécurité Informatique", "Ethical Hacking"].map((skill) => (
                  <span key={skill} className="text-xs px-2 py-1 bg-brand-accent/10 text-brand-accent rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Analyse */}
            <div className="bg-card/50 backdrop-blur-sm border border-brand-blue/20 rounded-xl p-4 hover:bg-card/70 hover:border-brand-blue/40 transition-all duration-300 hover:animate-card-hover">
              <h4 className="text-brand-blue font-semibold mb-2">Analyse</h4>
              <div className="flex flex-wrap gap-1">
                {["Vulnérabilités", "Penetration Testing"].map((skill) => (
                  <span key={skill} className="text-xs px-2 py-1 bg-brand-blue/10 text-brand-blue rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Innovation */}
            <div className="bg-card/50 backdrop-blur-sm border border-brand-accent/20 rounded-xl p-4 hover:bg-card/70 hover:border-brand-accent/40 transition-all duration-300 hover:animate-card-hover">
              <h4 className="text-brand-accent font-semibold mb-2">Innovation</h4>
              <div className="flex flex-wrap gap-1">
                {["Production Numérique", "Technologies Modernes"].map((skill) => (
                  <span key={skill} className="text-xs px-2 py-1 bg-brand-accent/10 text-brand-accent rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;