import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, Youtube, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation d'envoi
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "YouTube",
      icon: Youtube,
      url: "#",
      color: "hover:text-red-600",
      bgColor: "hover:bg-red-50"
    },
    {
      name: "TikTok",
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.76 20.5a6.34 6.34 0 0 0 10.86-4.43V7.83a8.2 8.2 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.8-.26z"/>
        </svg>
      ),
      url: "#",
      color: "hover:text-black",
      bgColor: "hover:bg-gray-50"
    },
    {
      name: "Facebook", 
      icon: Facebook,
      url: "#",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      color: "hover:text-pink-600",
      bgColor: "hover:bg-pink-50"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-blue-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à me contacter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulaire de contact */}
          <div className="animate-fade-in-left">
            <Card className="border-primary/10 bg-gradient-to-br from-card to-blue-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Mail className="h-6 w-6 text-primary" />
                  Envoyez-moi un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <Label htmlFor="name" className="text-sm font-medium">Nom complet</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      required
                      className="mt-1 border-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre.email@exemple.com"
                      required
                      className="mt-1 border-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre projet ou votre question..."
                      rows={5}
                      required
                      className="mt-1 border-primary/20 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary group animate-fade-in-up hover:shadow-lg transition-all duration-300"
                    style={{ animationDelay: '0.4s' }}
                  >
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Informations de contact et réseaux sociaux */}
          <div className="space-y-8 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <Card className="border-primary/10 bg-gradient-to-br from-card to-blue-50/30">
              <CardHeader>
                <CardTitle className="text-2xl">Restons connectés</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">contact@bambadoutyibrahim.com</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4 text-lg">Suivez-moi sur</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <Button
                          key={social.name}
                          variant="outline"
                          className={`justify-start gap-3 border-primary/20 ${social.color} ${social.bgColor} transition-all duration-300 hover:scale-105 hover:shadow-md`}
                          asChild
                        >
                          <a href={social.url} target="_blank" rel="noopener noreferrer">
                            <IconComponent />
                            {social.name}
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h4 className="font-semibold text-primary mb-2">Disponibilité</h4>
                  <p className="text-sm text-muted-foreground">
                    Ouvert aux opportunités de stage, projets étudiants et collaborations 
                    dans le domaine de la cybersécurité et du développement web.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;