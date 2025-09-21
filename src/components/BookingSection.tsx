import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Clock, CheckCircle, Star, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingSection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { toast } = useToast();

  // Configuration Calendly
  const CALENDLY_PUBLIC_URL = "https://calendly.com/votre-nom-utilisateur"; // Remplacer par votre lien public
  const CALENDLY_TOKEN = ""; // Sera fourni par l'utilisateur

  const openCalendlyWidget = () => {
    try {
      // Tentative d'utilisation de l'API Calendly avec widget intégré
      if (typeof window !== 'undefined') {
        // Script Calendly Widget (sera chargé dynamiquement)
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
          // @ts-ignore - Calendly widget global
          if (window.Calendly) {
            // @ts-ignore
            window.Calendly.initPopupWidget({ 
              url: CALENDLY_PUBLIC_URL,
              utm: {
                utmCampaign: 'Portfolio Contact',
                utmSource: 'Portfolio Website',
                utmMedium: 'Booking Button'
              }
            });
          } else {
            fallbackToDirectLink();
          }
        };

        script.onerror = () => {
          fallbackToDirectLink();
        };
      }
    } catch (error) {
      console.error('Erreur lors du chargement de Calendly:', error);
      fallbackToDirectLink();
    }
  };

  const fallbackToDirectLink = () => {
    window.open(CALENDLY_PUBLIC_URL, '_blank');
    toast({
      title: "Redirection vers Calendly",
      description: "Vous allez être redirigé vers mon calendrier de réservation.",
    });
  };

  const handleBookingClick = () => {
    setIsBookingOpen(false);
    setTimeout(() => {
      openCalendlyWidget();
    }, 100);
  };

  return (
    <section id="booking" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-muted opacity-50"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-booking-glow/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-booking-accent/10 rounded-full blur-3xl animate-float delay-1000"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-booking-secondary/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-booking-secondary" />
            <span className="text-sm font-medium text-booking-secondary">Réservation Disponible</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Planifions Votre
            <span className="block bg-gradient-to-r from-booking-primary via-booking-secondary to-booking-accent bg-clip-text text-transparent animate-glow">
              Projet Ensemble
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Réservez un créneau pour discuter de vos besoins en développement Python, Django, 
            ou solutions no-code. Consultation gratuite de 30 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Avantages de la consultation */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-booking-primary/5 to-booking-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="relative z-10">
              <Clock className="h-12 w-12 text-booking-secondary mb-4" />
              <CardTitle className="text-xl">Consultation Rapide</CardTitle>
              <CardDescription>
                Analyse de vos besoins et proposition de solutions en 30 minutes
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-booking-secondary/5 to-booking-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="relative z-10">
              <CheckCircle className="h-12 w-12 text-booking-secondary mb-4" />
              <CardTitle className="text-xl">Devis Personnalisé</CardTitle>
              <CardDescription>
                Estimation précise adaptée à votre projet et votre budget
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-booking-accent/5 to-booking-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="relative z-10">
              <Star className="h-12 w-12 text-booking-secondary mb-4" />
              <CardTitle className="text-xl">Conseil Expert</CardTitle>
              <CardDescription>
                Recommandations techniques et meilleures pratiques pour votre projet
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Principal */}
        <div className="text-center">
          <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="relative px-12 py-6 text-lg font-semibold bg-gradient-to-r from-booking-primary via-booking-secondary to-booking-accent text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-glow group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-booking-secondary via-booking-accent to-booking-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Calendar className="mr-3 h-6 w-6 relative z-10" />
                <span className="relative z-10">Prendre Rendez-vous Maintenant</span>
              </Button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-booking-secondary" />
                  Réserver votre consultation
                </DialogTitle>
                <DialogDescription>
                  Choisissez le mode de réservation qui vous convient le mieux.
                </DialogDescription>
              </DialogHeader>
              
              <div className="flex flex-col gap-4 py-4">
                <Button 
                  onClick={handleBookingClick}
                  className="w-full bg-gradient-to-r from-booking-primary to-booking-secondary text-white hover:from-booking-secondary hover:to-booking-accent"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendrier Interactif
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={fallbackToDirectLink}
                  className="w-full border-booking-secondary text-booking-secondary hover:bg-booking-secondary hover:text-white"
                >
                  Lien Direct Calendly
                </Button>
              </div>
              
              <div className="text-sm text-muted-foreground text-center">
                <p>💡 La consultation de 30 minutes est gratuite</p>
                <p>📅 Créneaux disponibles du lundi au vendredi</p>
                <p>⚡ Réponse sous 24h garantie</p>
              </div>
            </DialogContent>
          </Dialog>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-booking-secondary" />
              Sans engagement
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-booking-secondary" />
              Consultation gratuite
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-booking-secondary" />
              Réponse rapide
            </span>
          </div>
        </div>

        {/* Testimonial ou Trust Badge */}
        <Card className="max-w-2xl mx-auto mt-16 bg-gradient-to-br from-card to-muted/50 border-booking-secondary/20">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-booking-secondary text-booking-secondary" />
              ))}
            </div>
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              "Un développeur professionnel qui comprend vraiment les enjeux business. 
              Le projet a été livré dans les délais avec une qualité exceptionnelle."
            </blockquote>
            <cite className="text-sm font-semibold text-foreground">
              — Client satisfait, Projet e-commerce Django
            </cite>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingSection;