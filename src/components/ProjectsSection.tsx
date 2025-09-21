import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Ahloulbait",
      type: "Site Vitrine Institutionnel",
      description: "Site vitrine institutionnel conçu pour une communauté, avec un design sobre et informatif mettant en avant les valeurs et services.",
      technologies: ["HTML/CSS", "JavaScript", "Design", "UX/UI"],
      link: "https://github.com/novadigite/ahloulbait"
    },
    {
      title: "DECI-ONG",
      type: "Site Professionnel ONG",
      description: "Site professionnel pour ONG avec intégration de formulaires de contact et sections d'information complètes sur les missions.",
      technologies: ["React", "Forms", "CMS", "Responsive Design"],
      link: "https://github.com/novadigite/deci-ong"
    },
    {
      title: "Cheikh Tidjane Digital Sanctuary",
      type: "Site Culturel et Spirituel",
      description: "Plateforme culturelle et spirituelle moderne, mettant en avant des ressources numériques et contenus multimédias.",
      technologies: ["React", "Content Management", "Media Integration", "UI/UX"],
      link: "https://github.com/novadigite/cheikh-tidjane-digital-sanctuary"
    },
    {
      title: "Boulay Beach VIP Invite",
      type: "Plateforme Événementielle",
      description: "Application événementielle dédiée à une expérience exclusive à la plage de Boulay avec système de réservation et gestion d'invités.",
      technologies: ["React", "Event Management", "Booking System", "Premium UX"],
      link: "https://github.com/novadigite/boulay-beach-vip-invite"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Travaux Réalisés
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projets de formation développés avec différentes technologies et approches
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <Badge variant="outline" className="mb-4">
                      {project.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Voir le projet
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;