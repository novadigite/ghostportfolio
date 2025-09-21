import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            À propos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez mon parcours et ma passion pour le développement
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo/Avatar */}
          <div className="flex justify-center lg:justify-start">
            <Avatar className="w-80 h-80 border-8 border-primary/20 shadow-2xl">
              <AvatarImage src="/placeholder.svg" alt="Développeur" />
              <AvatarFallback className="text-6xl font-bold bg-primary/10 text-primary">
                DEV
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Présentation */}
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Développeur Passionné</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Je suis un développeur passionné spécialisé dans les technologies <strong>Python & Django</strong>, 
                  avec une expertise particulière dans le développement web moderne et les solutions no-code/low-code.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Mon approche combine la puissance du développement traditionnel avec l'efficacité des outils 
                  no-code comme <strong>Lovable</strong> et <strong>Webflow</strong>, permettant de créer des 
                  solutions rapides et professionnelles.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Avec une solide compréhension des réseaux informatiques et une passion pour l'intégration d'API, 
                  je transforme les idées en applications web fonctionnelles et esthétiques.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;