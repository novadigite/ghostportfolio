import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <Avatar className="w-32 h-32 mb-8 border-4 border-primary/20">
            <AvatarImage src="/placeholder.svg" alt="Portfolio Developer" />
            <AvatarFallback className="text-3xl font-bold bg-primary/10 text-primary">
              DEV
            </AvatarFallback>
          </Avatar>
          
          {/* Texte de bienvenue */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Bienvenue
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl leading-relaxed">
            Développeur passionné spécialisé en <span className="text-primary font-semibold">Python & Django</span>, 
            avec une expertise en <span className="text-secondary font-semibold">no-code/low-code</span> et une 
            solide compréhension des <span className="text-primary font-semibold">réseaux informatiques</span>.
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Je crée des solutions web modernes et efficaces en combinant développement traditionnel 
            et outils no-code pour des résultats rapides et professionnels.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="px-8 group" asChild>
              <a href="#contact">
                Me Contacter
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8" asChild>
              <a href="#rendez-vous">
                <Calendar className="h-5 w-5 mr-2" />
                Prendre Rendez-vous
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;