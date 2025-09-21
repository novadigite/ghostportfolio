import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Globe, Network } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Développement Web",
      icon: Code,
      color: "text-blue-500",
      skills: ["Python", "Django", "HTML/CSS", "JavaScript", "API REST"]
    },
    {
      title: "No-Code / Low-Code",
      icon: Palette,
      color: "text-purple-500",
      skills: ["Lovable", "Webflow", "Automation", "Intégrations", "Prototypage"]
    },
    {
      title: "API & Intégrations",
      icon: Globe,
      color: "text-green-500",
      skills: ["Gestion d'API", "Webhooks", "Intégrations tierces", "Data Processing", "Authentication"]
    },
    {
      title: "Réseaux",
      icon: Network,
      color: "text-orange-500",
      skills: ["DHCP", "DNS", "VLAN", "OSPF", "Configuration réseau"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Compétences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un éventail de technologies et d'outils pour créer des solutions complètes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 shadow-lg`}>
                    <IconComponent className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;