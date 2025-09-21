import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Calendar, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-32 px-4 bg-background overflow-hidden">
      {/* Neon Background Effects */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Avatar avec animation */}
          <div className="animate-bounce-in">
            <Avatar className="w-40 h-40 border-4 border-accent/30 shadow-2xl hover:shadow-accent/50 transition-all duration-300 animate-neon-glow">
              <AvatarImage src="/placeholder.svg" alt="Bamba Douty Ibrahim" />
              <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary to-dark-600 text-accent">
                BDI
              </AvatarFallback>
            </Avatar>
          </div>
          
          {/* Nom et titre avec animation */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
              Bamba Douty Ibrahim
            </h1>
            
            <h2 className="text-xl lg:text-2xl font-semibold text-foreground/90">
              Étudiant en Réseau et Sécurité Informatique (Licence 3) | Programmeur Python & Django
            </h2>
          </div>

          {/* Accroche principale */}
          <div className="animate-fade-in-up max-w-4xl" style={{ animationDelay: '0.4s' }}>
            <p className="text-2xl lg:text-3xl font-medium text-foreground/80 mb-6 leading-relaxed">
              Passionné par la <span className="text-accent font-semibold">cybersécurité</span>, 
              le <span className="text-secondary font-semibold">développement web</span> et 
              le <span className="text-accent font-semibold">codage vidéo</span>.
            </p>
          </div>

          {/* Bio courte */}
          <div className="animate-fade-in-up max-w-5xl" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Étudiant en Licence 3 Réseau et Sécurité Informatique, spécialisé dans la sécurisation 
              des infrastructures et le développement d'applications web avec Python/Django. 
              Compétences supplémentaires : vidéo coding et production numérique.
            </p>
          </div>

          {/* Liens sociaux avec micro-interactions */}
          <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {[
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Mail, href: "mailto:contact@bambadoutyibrahim.com", label: "Email" }
            ].map((social, index) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground hover:scale-110 hover:animate-blue-glow transition-all duration-300 hover:shadow-lg"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* Boutons d'action avec animations */}
          <div className="flex flex-col sm:flex-row gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <Button 
              size="lg" 
              className="px-10 py-4 text-lg group bg-accent text-accent-foreground hover:bg-accent/90 hover:animate-neon-glow shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 font-semibold"
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
              className="px-10 py-4 text-lg border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground hover:scale-105 hover:animate-blue-glow transition-all duration-300 hover:shadow-lg font-semibold" 
              asChild
            >
              <a href="#booking">
                <Calendar className="h-5 w-5 mr-2" />
                Prendre Rendez-vous
              </a>
            </Button>
          </div>

          {/* Compétences principales badges */}
          <div className="flex flex-wrap justify-center gap-3 pt-8 animate-slide-up" style={{ animationDelay: '1.2s' }}>
            {["Réseaux", "Sécurité Informatique", "Analyse de vulnérabilités", "Ethical Hacking", "Python", "Django", "Video Coding"].map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-card border border-accent/20 text-accent rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:shadow-accent/30 transition-all duration-300 cursor-default animate-fade-in-up"
                style={{ animationDelay: `${1.4 + index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;