import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Calendar, Send, ExternalLink, Youtube, Music, Facebook, Instagram } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nom.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData]);

      if (error) {
        throw error;
      }

      toast({
        title: "Message envoyé !",
        description: "Votre message a été envoyé avec succès. Bamba vous répondra bientôt.",
      });

      // Reset form
      setFormData({
        nom: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const openCalendly = () => {
    // Remplacez cette URL par votre lien Calendly personnel avec votre token
    window.open('https://calendly.com/votre-lien-calendly', '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Restons en contact et discutons de vos projets
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulaire de contact */}
          <Card className="border-2 hover:border-primary/20 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="h-6 w-6 text-primary" />
                Envoyez-moi un message
              </CardTitle>
              <CardDescription>
                Remplissez ce formulaire et je vous répondrai rapidement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom complet</Label>
                  <Input
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Votre nom et prénom"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre demande..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Envoi en cours..." : "Envoyer"}
                  <Send className="h-4 w-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Section rendez-vous et réseaux sociaux */}
          <div className="space-y-8">
            {/* Rendez-vous */}
            <Card className="border-2 hover:border-primary/20 transition-colors" id="rendez-vous">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  Prenez rendez-vous
                </CardTitle>
                <CardDescription>
                  Réservez un créneau pour discuter de votre projet
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Consultation personnalisée</h4>
                  <p className="text-sm text-muted-foreground">
                    Discutons de vos besoins en développement web, no-code ou intégrations API.
                  </p>
                </div>
                
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={openCalendly}
                >
                  Réserver un créneau
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Réseaux sociaux */}
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">Suivez-moi</CardTitle>
                <CardDescription>
                  Retrouvez-moi sur les réseaux sociaux
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" size="lg" asChild className="h-16">
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                      <Youtube className="h-6 w-6 text-red-500" />
                      <span className="text-sm">YouTube</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="h-16">
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                      <Music className="h-6 w-6 text-black" />
                      <span className="text-sm">TikTok</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="h-16">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                      <Facebook className="h-6 w-6 text-blue-500" />
                      <span className="text-sm">Facebook</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="h-16">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                      <Instagram className="h-6 w-6 text-pink-500" />
                      <span className="text-sm">Instagram</span>
                    </a>
                  </Button>
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