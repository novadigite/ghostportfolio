import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Bug, Calendar } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Junior Cybersecurity Analyst Career Path",
      issuedDate: "Jul 09, 2025",
      academy: "Networking Academy",
      skills: ["Analyse de menaces", "Sécurité des systèmes"],
      icon: Shield,
      color: "bg-blue-500"
    },
    {
      title: "Introduction to Cybersecurity",
      issuedDate: "May 17, 2025", 
      academy: "Networking Academy",
      skills: ["Bases en cybersécurité", "Protection des données"],
      icon: Lock,
      color: "bg-green-500"
    },
    {
      title: "Ethical Hacker (Penetration Testing)",
      issuedDate: "Apr 18, 2025",
      academy: "Networking Academy", 
      skills: ["Offensive Security", "Pentest", "Ethical Hacking"],
      icon: Bug,
      color: "bg-red-500"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certificats & Parcours
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mes certifications en cybersécurité et sécurité informatique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className={`${cert.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {cert.issuedDate}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <p className="font-medium text-primary">{cert.academy}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Compétences :</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
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

export default CertificatesSection;