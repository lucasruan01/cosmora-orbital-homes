import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { User } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Eye } from 'lucide-react';
import { useNavigate as useNav } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const JanelasInteligentes = () => {
  useScrollToTop();
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const header = useScrollReveal();
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();
  const section3 = useScrollReveal();
  const cta = useScrollReveal();

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
      toast({
        title: 'Coming soon!',
        description: 'The profile test will be available soon.',
      });
    }
  };
  return (
    <div className="min-h-screen smooth-scroll bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            className="mb-8 group"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </Button>

          {/* Header */}
          <div 
            ref={header.ref}
            className={`text-center mb-16 transition-all duration-1000 ${
              header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mx-auto mb-6">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-gradient-cosmic">
              Smart Windows
            </h1>
            <p className="text-2xl text-muted-foreground">
              Protection, Transparency and Control
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Overview */}
            <Card 
              ref={section1.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Overview:</h2>
              <p className="text-lg leading-relaxed">
                Cosmora's smart windows were created to unite technology, safety and beauty in a single design.
                They offer panoramic views of space and automatically adjust to sunlight, blocking UV radiation and heat.
                The result is an environment that's always comfortable and harmonious, at any time of day — with the entire universe within reach.
              </p>
            </Card>

            {/* How they work */}
            <Card 
              ref={section2.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">
                How they work:
              </h2>
              
              <div className="space-y-8">
                {/* 1. Electrochromic Glass */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Electrochromic Glass</h3>
                  <p className="text-lg leading-relaxed">
                    Developed in NASA studies, these glasses change transparency with a slight electrical charge, 
                    darkening under intense light and brightening when needed, as if they "breathe" with the environment.
                  </p>
                </div>

                {/* 2. Reflective Metallic Film */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Reflective Metallic Film "Nunsun"</h3>
                  <p className="text-lg leading-relaxed">
                    Created by NASA, Nunsun film reflects heat and solar glare without blocking the view. Applied to 
                    the glass, it protects against infrared and ultraviolet radiation, keeping the interior cooler.
                  </p>
                </div>

                {/* 3. Structural Materials */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Advanced Structural Materials</h3>
                  <p className="text-lg leading-relaxed">
                    Windows use layers of acrylic and polycarbonate (lightweight and resistant) along with external ceramic glass, 
                    forming a multi-layer system capable of withstanding pressure and even micrometeoroids.
                  </p>
                </div>

                {/* 4. Adaptive Control */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Adaptive Control</h3>
                  <p className="text-lg leading-relaxed">
                    Sensors monitor brightness and apply automatic opacity adjustments, balancing protection 
                    and visibility in real time.
                  </p>
                </div>
              </div>
            </Card>

            {/* Benefits */}
            <Card 
              ref={section3.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Benefits in practice:</h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Protects you from UV radiation and Sun heat.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Maintains visual comfort, without that annoying glare.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Helps keep the station at ideal temperature, saving energy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Allows safe and incredible views of Earth and space, as if you were floating out there.</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* CTA */}
          <Card 
            ref={cta.ref}
            className={`mt-16 p-12 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 text-center transition-all duration-1000 ${
              cta.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-3xl font-semibold mb-4">
              See the Universe with Clarity
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how our smart windows transform the experience of living in space.
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
      </main>

      <Footer sources={[
        { title: "NASA – Spacecraft Windows", url: "https://nasa.gov" },
        { title: "NASA Technical Reports Server (NTRS)", url: "https://ntrs.nasa.gov" },
        { title: "NASA NTRS – Space Window Materials", url: "https://ntrs.nasa.gov" }
      ]} />
    </div>
  );
};

export default JanelasInteligentes;
