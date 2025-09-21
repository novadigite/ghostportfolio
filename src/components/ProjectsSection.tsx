import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Ahloulbait", 
      link: "novadigite/ahloulbait",
      description: "Site vitrine institutionnel conçu pour une communauté, design sobre et informatif.",
      technologies: ["HTML", "CSS", "JavaScript"],
      type: "Site Vitrine"
    },
    {
      title: "DECI-ONG",
      link: "novadigite/deci-ong", 
      description: "Site professionnel pour ONG, avec intégration de formulaires et sections d'information.",
      technologies: ["React", "Supabase", "Tailwind"],
      type: "Site Professionnel"
    },
    {
      title: "Cheikh Tidjane Digital Sanctuary",
      link: "novadigite/cheikh-tidjane-digital-sanctuary",
      description: "Site culturel et spirituel, mettant en avant des ressources numériques.",
      technologies: ["Next.js", "TypeScript", "CSS Modules"],
      type: "Site Culturel"
    },
    {
      title: "Boulay Beach VIP Invite", 
      link: "novadigite/boulay-beach-vip-invite",
      description: "Plateforme événementielle dédiée à une expérience exclusive à la plage de Boulay.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      type: "Plateforme Événementielle"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Travaux Réalisés
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une sélection de projets que j'ai développés depuis le début de ma formation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">
                      {project.type}
                    </CardDescription>
                  </div>
                  <Globe className="h-6 w-6 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-2">Technologies utilisées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-muted rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  asChild
                >
                  <a 
                    href={`https://github.com/${project.link}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Voir le projet
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;