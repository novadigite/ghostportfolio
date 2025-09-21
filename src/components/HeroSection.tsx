import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const skills = [
    "Réseaux",
    "Sécurité Informatique", 
    "Analyse de vulnérabilités",
    "Ethical Hacking",
    "Python",
    "Django",
    "Video Coding"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-8">
            <Avatar className="w-32 h-32 mx-auto border-4 border-white/20">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Bamba Douty Ibrahim" />
              <AvatarFallback className="text-4xl bg-primary-foreground text-primary">BDI</AvatarFallback>
            </Avatar>
          </div>

          {/* Nom et Titre */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bamba Douty Ibrahim
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 text-primary-foreground/90">
            Étudiant en Réseau et Sécurité Informatique (Licence 3) | Programmeur Python & Django
          </p>

          {/* Accroche */}
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Passionné par la cybersécurité, le développement web et le codage vidéo.
          </p>

          {/* Bio */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 text-left max-w-3xl mx-auto">
            <p className="text-primary-foreground/90 leading-relaxed">
              Je suis étudiant en Licence 3 Réseau et Sécurité Informatique, spécialisé dans l'analyse des menaces 
              et la sécurisation des infrastructures. Je développe aussi des applications web avec Python et Django, 
              et j'ai des compétences en codage vidéo et production numérique. Mon objectif : allier cybersécurité 
              et développement pour créer des solutions fiables et performantes.
            </p>
          </div>

          {/* Compétences */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Compétences Principales</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="bg-white/20 text-primary-foreground hover:bg-white/30"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Liens sociaux */}
          <div className="flex gap-4 justify-center mb-8">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/20 border-white/30 text-primary-foreground hover:bg-white/30"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/20 border-white/30 text-primary-foreground hover:bg-white/30"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/20 border-white/30 text-primary-foreground hover:bg-white/30"
              asChild
            >
              <a href="mailto:bamba.ibrahim@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Me Contacter
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="bg-white/20 border-white/30 text-primary-foreground hover:bg-white/30"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Prendre Rendez-vous
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;