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
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-accent to-brand-blue bg-clip-text text-transparent">
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
              <Card className="group h-full hover:shadow-2xl hover:shadow-brand-accent/20 hover:-translate-y-3 transition-all duration-500 border-brand-accent/20 hover:border-brand-blue/40 bg-gradient-to-br from-card to-dark-200 hover:animate-card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl text-foreground group-hover:text-brand-accent transition-colors duration-300">
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
                  <p className="text-foreground/90 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag}
                        variant="secondary" 
                        className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 hover:bg-brand-blue hover:text-white transition-all duration-300 cursor-default"
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
                          className="flex-1 group/btn bg-brand-accent text-black hover:bg-brand-accent/90 hover:animate-neon-glow transition-all duration-300 font-semibold"
                          asChild
                        >
                          <a href={`https://github.com/${project.repository}`} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            Voir le Projet
                          </a>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white hover:animate-blue-glow transition-all duration-300"
                          asChild
                        >
                          <a href={`https://github.com/${project.repository}`} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Professional portfolio stats */}
        <div className="mt-16 text-center animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="space-y-2 group cursor-default">
              <div className="text-5xl font-bold text-brand-accent group-hover:animate-neon-glow transition-all duration-300">4</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Projets Complétés</div>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="text-5xl font-bold text-brand-blue group-hover:animate-blue-glow transition-all duration-300">100%</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Taux de Réussite</div>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="text-5xl font-bold text-brand-accent group-hover:animate-neon-glow transition-all duration-300">5+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Technologies Utilisées</div>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="text-5xl font-bold text-brand-blue group-hover:animate-blue-glow transition-all duration-300">2024-2025</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Période Active</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;