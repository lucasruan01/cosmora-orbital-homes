import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dumbbell, Utensils, Briefcase, Heart, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { User } from '@supabase/supabase-js';
import fitnessImage from '@/assets/fitness-zerog.png';
import gastronomiaImage from '@/assets/gastronomia-orbital.png';
import workspaceImage from '@/assets/workspace-orbital.png';
import medicoImage from '@/assets/centro-medico.png';

const amenitiesData = [
  {
    id: 'fitness',
    icon: Dumbbell,
    image: fitnessImage,
    title: 'CosmoFit',
    description: 'Gym with equipment adapted for artificial gravity',
    subtitle: 'Stay fit in space',
    detailedDescription: 'Our orbital gym offers state-of-the-art equipment adapted for low-gravity environments. With advanced resistance systems and personalized training, you maintain perfect physical health while enjoying the view of the cosmos.',
    features: [
      'Resistance equipment adapted to artificial gravity',
      'Instructors specialized in space conditioning',
      'Personalized exercise programs',
      'Panoramic view of space during workout'
    ]
  },
  {
    id: 'gastronomy',
    icon: Utensils,
    image: gastronomiaImage,
    title: 'Orbitalicious',
    description: 'Starred restaurants with chefs specialized in space cuisine',
    subtitle: 'Flavors that defy gravity',
    detailedDescription: 'Experience revolutionary cuisine created by renowned chefs specially trained to cook in a space environment. Each meal is a unique gastronomic experience, combining terrestrial techniques with orbital innovations.',
    features: [
      'Award-winning chefs specialized in space cuisine',
      'Fresh ingredients grown in orbital farms',
      'Zero-gravity gastronomic experiences',
      'Personalized menus for space nutritional needs'
    ]
  },
  {
    id: 'workspace',
    icon: Briefcase,
    image: workspaceImage,
    title: 'SpaceWork',
    description: 'Offices with the best view of the universe',
    subtitle: 'Productivity elevated to the next level',
    detailedDescription: 'Work in state-of-the-art offices with a privileged view of Earth and outer space. Equipped with cutting-edge technology and ultra-fast connectivity, our workspaces provide the perfect environment for your productivity.',
    features: [
      'Ultra-high-speed satellite internet',
      'Meeting rooms with advanced holography',
      'Adapted ergonomic workstations',
      'Panoramic view of Earth and the cosmos'
    ]
  },
  {
    id: 'medical',
    icon: Heart,
    image: medicoImage,
    title: 'AstroMed',
    description: '24/7 medical care with cutting-edge technology',
    subtitle: 'Your health is our priority',
    detailedDescription: 'State-of-the-art medical center with a team specialized in space medicine. Constant monitoring, advanced diagnostic technology and innovative treatments ensure your well-being at any time.',
    features: [
      'Medical team specialized in space medicine',
      'Real-time health monitoring',
      'State-of-the-art diagnostic technology',
      'Advanced space emergency protocols'
    ]
  }
];

const LifeSection = () => {
  const [selectedAmenity, setSelectedAmenity] = useState(amenitiesData[0]);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const scrollToDetails = () => {
    const detailsElement = document.getElementById('amenity-details');
    if (detailsElement) {
      detailsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleTestClick = () => {
    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please create an account or sign in to an existing one.',
        variant: 'destructive',
      });
      navigate('/auth?mode=signup');
    } else {
      navigate('/teste-perfil');
    }
  };

  return (
    <section id="vida" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(221,83%,53%,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gradient-cosmic mb-6">
            Life in Orbit
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to live, work and thrive among the stars.
          </p>
        </div>

        {/* Interactive Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {amenitiesData.map((amenity) => (
            <Card
              key={amenity.id}
              onClick={() => {
                setSelectedAmenity(amenity);
                scrollToDetails();
              }}
              className={`p-6 rounded-2xl border-2 backdrop-blur-sm hover-lift group cursor-pointer transition-all duration-300 ${
                selectedAmenity.id === amenity.id 
                  ? 'border-primary bg-primary/10 scale-105 shadow-[0_0_30px_rgba(59,130,246,0.3)]' 
                  : 'border-transparent bg-card/50 hover:border-primary/50'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-4 transition-all duration-300 ${
                selectedAmenity.id === amenity.id ? 'scale-110' : 'group-hover:scale-110'
              }`}>
                <amenity.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{amenity.title}</h3>
              <p className="text-sm text-muted-foreground">{amenity.description}</p>
            </Card>
          ))}
        </div>

        {/* Detailed Content Section */}
        <div id="amenity-details" className="mb-16 scroll-mt-32">
          <Card className="overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-12 flex flex-col justify-center animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                    <selectedAmenity.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-4xl font-bold mb-3 text-gradient-cosmic">
                  {selectedAmenity.title}
                </h3>
                
                <p className="text-xl text-muted-foreground mb-6">
                  {selectedAmenity.subtitle}
                </p>
                
                <p className="text-base leading-relaxed mb-8">
                  {selectedAmenity.detailedDescription}
                </p>

                <div className="space-y-3">
                  {selectedAmenity.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <ArrowRight className="w-5 h-5 text-primary mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Side */}
              <div className="relative bg-gradient-to-br from-primary/20 to-purple-500/20 overflow-hidden min-h-[500px]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(221,83%,53%,0.2),transparent_70%)]" />
                <img 
                  key={selectedAmenity.id}
                  src={selectedAmenity.image} 
                  alt={selectedAmenity.title}
                  className="w-full h-full object-cover animate-fade-in"
                  loading="eager"
                  onLoad={(e) => e.currentTarget.style.opacity = '1'}
                  style={{ opacity: 0, transition: 'opacity 0.2s ease-in-out' }}
                />
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="p-12 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-4">
            Ready for a New Life?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a virtual visit and discover what it would be like to live in the 
            most advanced residential space station ever created.
          </p>
          <Button 
            size="lg" 
            onClick={handleTestClick}
            className="rounded-full bg-primary hover:bg-primary/90 hover:scale-105 shadow-cosmic text-lg px-10 py-6 transition-all duration-300"
          >
            Take the Profile Test
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default LifeSection;
