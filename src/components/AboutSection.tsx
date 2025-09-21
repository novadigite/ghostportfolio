import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, GraduationCap, Code, Network } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Formation Académique",
      description: "Étudiant en Licence 3 Réseau et Sécurité Informatique",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Spécialisé dans la sécurisation des infrastructures",
      color: "text-blue-600"
    },
    {
      icon: Code,
      title: "Développement",
      description: "Python/Django, No-code/Low-code",
      color: "text-blue-700"
    },
    {
      icon: Network,
      title: "Réseaux",
      description: "Administration et configuration réseau",
      color: "text-blue-500"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-dark-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-accent to-brand-blue bg-clip-text text-transparent">
            À propos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez mon parcours et ma passion pour la cybersécurité et le développement
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Photo/Avatar */}
          <div className="flex justify-center lg:justify-start animate-scale-in">
            <div className="relative">
               <Avatar className="w-80 h-80 border-8 border-brand-accent/20 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:animate-neon-glow">
                 <AvatarImage src="/profile-photo.jpg" alt="Bamba Douty Ibrahim" />
                <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-brand-dark to-brand-blue text-brand-accent">
                  BDI
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-4 -right-4 bg-brand-accent text-black px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Étudiant L3
              </div>
            </div>
          </div>

          {/* Présentation principale */}
          <div className="space-y-8 animate-fade-in-left">
            <Card className="border-l-8 border-l-brand-accent shadow-lg bg-gradient-to-br from-card to-dark-200">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-brand-accent">Bamba Douty Ibrahim</h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Étudiant passionné</strong> en Licence 3 Réseau et Sécurité Informatique, 
                    je me spécialise dans la <strong className="text-brand-accent">Cybersécurité/Hacking ethique</strong> et 
                    le <strong className="text-brand-accent">développement d'applications web</strong> avec Python/Django.
                  </p>
                  <p>
                    Mon parcours combine la <strong className="text-foreground">rigueur académique</strong> avec une 
                    approche pratique des technologies modernes. Passionné par la 
                    <strong className="text-brand-accent"> cybersécurité</strong>, j'ai développé des compétences en 
                    <strong className="text-brand-accent"> ethical hacking</strong> et 
                    <strong className="text-brand-accent"> analyse de vulnérabilités</strong>.
                  </p>
                  <p>
                    En plus du développement web, je maîtrise le <strong className="text-brand-accent">vibe coding</strong> et 
                    la <strong className="text-brand-accent">production numérique</strong>, offrant ainsi une vision 
                    360° des technologies numériques modernes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Points forts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card 
                key={index} 
                className="group text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-primary/10 hover:border-primary/30 bg-gradient-to-br from-card to-blue-50/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className={`h-8 w-8 ${highlight.color}`} />
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Objectifs et motivation */}
        <Card className="mt-16 bg-gradient-to-r from-primary/5 via-blue-50/50 to-primary/5 border-primary/20 animate-fade-in-up">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-6 text-primary">Vision & Objectifs</h3>
            <div className="max-w-4xl mx-auto space-y-4 text-lg">
              <p className="text-muted-foreground leading-relaxed">
                Mon objectif est de devenir un <strong className="text-foreground">expert en cybersécurité</strong> 
                capable de protéger les infrastructures numériques tout en développant des solutions 
                web innovantes et sécurisées.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {[
                  "Sécurité des systèmes", "Développement sécurisé", "Analyse forensique", 
                  "Architecture réseau", "Innovation technologique"
                ].map((goal) => (
                  <Badge 
                    key={goal} 
                    variant="secondary" 
                    className="px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {goal}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;