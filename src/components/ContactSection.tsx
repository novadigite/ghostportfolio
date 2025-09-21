import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Calendar, Send } from "lucide-react";

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
    // Pour l'intégration Calendly, vous devrez remplacer cette URL par votre lien Calendly personnel
    window.open('https://calendly.com/bamba-ibrahim', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact & Rendez-vous
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou prendre rendez-vous
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Formulaire de contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Envoyez-moi un message
              </CardTitle>
              <CardDescription>
                Remplissez le formulaire ci-dessous et je vous répondrai rapidement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="nom">Nom complet *</Label>
                  <Input
                    id="nom"
                    name="nom"
                    type="text"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Rendez-vous Calendly */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Planifiez un rendez-vous
              </CardTitle>
              <CardDescription>
                Réservez directement un créneau pour discuter de vos projets
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Consultation gratuite de 30 minutes
                </h3>
                <p className="text-muted-foreground mb-6">
                  Discutons de vos besoins en cybersécurité, développement web ou tout autre projet technique.
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Consultation gratuite de 30 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Discussion sur vos projets techniques</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Conseils personnalisés</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Visioconférence ou appel téléphonique</span>
                </div>
              </div>

              <Button 
                onClick={openCalendly}
                className="w-full"
                size="lg"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Réserver un créneau
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Vous serez redirigé vers Calendly pour choisir votre créneau
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;