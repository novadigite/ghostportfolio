import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Ahloulbait",
      repository: "novadigite/ahloulbait",
      description: "Site vitrine institutionnel conçu pour une communauté. Interface moderne et responsive avec sections d'information complètes.",
      tags: ["Site Vitrine", "Communauté", "Responsive"],
      color: "from-primary/10 to-blue-100/50",
      available: true
    },
    {
      title: "DECI-ONG", 
      repository: "novadigite/deci-ong",
      description: "Site professionnel pour ONG, avec formulaires interactifs et sections d'information détaillées. Optimisé pour l'engagement.",
      tags: ["ONG", "Formulaires", "Professional"],
      color: "from-blue-100 to-blue-200/50", 
      available: true
    },
    {
      title: "Cheikh Tidjane Digital Sanctuary",
      repository: "novadigite/cheikh-tidjane-digital-sanctuary", 
      description: "Site culturel et spirituel avec design élégant. Présentation de contenu religieux et culturel de manière moderne.",
      tags: ["Culturel", "Spirituel", "Design"],
      color: "from-blue-200/50 to-blue-300/30",
      available: true
    },
    {
      title: "Boulay Beach VIP Invite",
      repository: "novadigite/boulay-beach-vip-invite",
      description: "Plateforme événementielle exclusive avec système d'invitation VIP. Interface premium et gestion d'événements.",
      tags: ["Événementiel", "VIP", "Premium"],
      color: "from-blue-50 to-primary/10",
      available: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-blue-50/50 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Travaux Réalisés
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projets développés depuis le début du programme de formation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className={`group h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-primary/10 hover:border-primary/30 bg-gradient-to-br ${project.color}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Github className="h-4 w-4" />
                        <span className="font-mono">{project.repository}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag}
                        variant="secondary" 
                        className="bg-background/60 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default border border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    {project.available && (
                      <>
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="flex-1 group/btn bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary transition-all duration-300"
                        >
                          <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Voir le Projet
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Portfolio stats */}
        <div className="mt-16 text-center animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">4</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Projets Complétés</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Taux de Réussite</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">5+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Technologies Utilisées</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">2024-2025</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Période Active</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;