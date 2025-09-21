import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Network, Code, Zap, Lock, Search, FileText, Camera } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Sécurité & Réseaux",
      icon: Shield,
      color: "text-primary",
      bgGradient: "from-primary/10 to-blue-100/50",
      skills: ["Analyse de vulnérabilités", "Ethical Hacking", "Penetration Testing", "DHCP", "DNS", "VLAN", "OSPF"]
    },
    {
      title: "Développement Web",
      icon: Code,
      color: "text-blue-600",
      bgGradient: "from-blue-100 to-blue-200/50",
      skills: ["Python", "Django", "HTML/CSS", "JavaScript", "API REST", "Bases de données"]
    },
    {
      title: "Cybersécurité",
      icon: Lock,
      color: "text-blue-700",
      bgGradient: "from-blue-200/50 to-blue-300/30",
      skills: ["Sécurisation des infrastructures", "Audit de sécurité", "Firewall", "IDS/IPS", "SIEM"]
    },
    {
      title: "Production Numérique",
      icon: Camera,
      color: "text-blue-500",
      bgGradient: "from-blue-50 to-primary/10",
      skills: ["Video Coding", "Production numérique", "Montage", "Streaming", "Compression"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-blue-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Compétences Techniques
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise en cybersécurité, développement et administration réseaux
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Card className={`group h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-primary/10 hover:border-primary/30 bg-gradient-to-br ${category.bgGradient}`}>
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                      <IconComponent className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="text-xs px-3 py-1 bg-background/60 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default border border-primary/20 hover:border-primary/40"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Additional expertise section */}
        <div className="mt-16 text-center animate-slide-up">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Domaines d'expertise supplémentaires</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Configuration réseau", "Analyse forensique", "Gestion d'incidents", 
              "Audit de conformité", "Architecture sécurisée", "Tests d'intrusion",
              "Cryptographie", "Authentification", "Monitoring", "DevSecOps"
            ].map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-primary/5 text-primary border border-primary/20 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
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

export default SkillsSection;