import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Shield } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Junior Cybersecurity Analyst Career Path",
      organization: "Networking Academy",
      date: "Jul 09, 2025",
      icon: Shield,
      color: "text-primary",
      bgColor: "bg-primary/10",
      description: "Parcours complet d'analyste en cybersécurité junior"
    },
    {
      title: "Introduction to Cybersecurity",
      organization: "Networking Academy", 
      date: "May 17, 2025",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      description: "Fondements de la cybersécurité et bonnes pratiques"
    },
    {
      title: "Ethical Hacker (Penetration Testing)",
      organization: "Networking Academy",
      date: "Apr 18, 2025", 
      icon: Shield,
      color: "text-blue-700",
      bgColor: "bg-blue-200/50",
      description: "Techniques de test d'intrusion et hacking éthique"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4 bg-gradient-to-b from-blue-50/50 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Certificats & Parcours
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Formations spécialisées et certifications en cybersécurité et réseaux
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div 
                key={index}
                className="animate-fade-in-up hover:animate-none"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="group h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-primary/10 hover:border-primary/30 bg-gradient-to-br from-card to-blue-50/30">
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto w-20 h-20 rounded-full ${cert.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <IconComponent className={`h-10 w-10 ${cert.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center space-y-4">
                    <Badge 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {cert.organization}
                    </Badge>
                    
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{cert.date}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-16 text-center animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">3</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Certificats</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">2025</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Année Active</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">L3</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Niveau Actuel</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;