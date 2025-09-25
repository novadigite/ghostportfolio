import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Network, Code, Zap, Lock, Search, FileText, Camera } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Sécurité & Réseaux",
      icon: Shield,
      color: "text-brand-accent",
      glow: "neon-glow",
      skills: ["Analyse de vulnérabilités", "Ethical Hacking", "Penetration Testing", "DHCP", "DNS", "VLAN", "OSPF"]
    },
    {
      title: "Développement Web",
      icon: Code,
      color: "text-brand-blue",
      glow: "blue-glow",
      skills: ["Python", "Django", "HTML/CSS",]
    },
    {
      title: "Cybersécurité",
      icon: Lock,
      color: "text-brand-accent",
      glow: "neon-glow",
      skills: ["Sécurisation des infrastructures", "Audit de sécurité", "Firewall", "IDS/IPS"]
    },
    {
      title: "Intélligence Artificielle",
      icon: Camera,
      color: "text-brand-blue",
      glow: "blue-glow",
      skills: ["no-code/low-code", "Vibe Coding" ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-dark-200 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-accent to-brand-blue bg-clip-text text-transparent">
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
                <Card className={`group h-full hover:shadow-2xl hover:shadow-brand-accent/20 hover:-translate-y-3 transition-all duration-500 border-brand-accent/20 hover:border-brand-blue/40 bg-gradient-to-br from-card to-dark-200 hover:animate-card-hover`}>
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto w-16 h-16 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl group-hover:animate-pulse-glow transition-all duration-300`}>
                      <IconComponent className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-brand-accent transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="text-xs px-3 py-1 bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 cursor-default border border-brand-blue/20"
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
          <h3 className="text-2xl font-bold mb-8 text-brand-blue">Domaines d'expertise supplémentaires</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Configuration réseau", "Analyse forensique", "Gestion d'incidents", 
              "Audit de conformité", "Architecture sécurisée", "Tests d'intrusion",
              "Cryptographie","Test d'intrusion réseau/Windows Serveur"
            ].map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-card border border-brand-blue/20 text-brand-blue rounded-full text-sm font-medium hover:bg-brand-blue hover:text-white hover:shadow-brand-blue/30 transition-all duration-300 cursor-default animate-fade-in-up hover:animate-blue-glow"
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