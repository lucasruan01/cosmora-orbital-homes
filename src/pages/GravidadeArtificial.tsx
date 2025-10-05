import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Gauge } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { User } from '@supabase/supabase-js';

const GravidadeArtificial = () => {
  useScrollToTop();
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const header = useScrollReveal();
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();
  const section3 = useScrollReveal();
  const section4 = useScrollReveal();
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
              <Gauge className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-gradient-cosmic">
              Artificial Gravity
            </h1>
            <p className="text-2xl text-muted-foreground">
              9.8G of Comfort and Health in Space
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* How it works */}
            <Card 
              ref={section1.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">How does it work?</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  At Cosmora, we develop environments designed for the human body to live well beyond Earth.
                  That's why our space houses use the principle of artificial gravity by rotation, inspired by NASA studies.
                </p>
                <p>
                  By rotating slowly, the structure creates a centrifugal force that reproduces up to 100% of Earth's gravity (9.8G), enough to keep muscles and bones active, ensuring comfort and health during long journeys through space.
                </p>
              </div>
            </Card>

            {/* Structure and control */}
            <Card 
              ref={section2.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Structure and control:</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  At Cosmora, we transform complex concepts into simple solutions for life in space.
                </p>
                <p>
                  Imagine a rotating ring inside the station: when it spins, the floor "pushes" the astronauts outward, creating the sensation of weight.
                  Motors control the constant rotation, while balance systems maintain the structure's stability, ensuring comfort and safety in every movement.
                </p>
              </div>
            </Card>

            {/* Benefits */}
            <Card 
              ref={section3.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Benefits:</h2>
              <p className="text-lg mb-6">With simulated 9.8G, our space dwellings keep the body in balance:</p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Muscles and bones remain strong;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Blood flow remains stable;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Life aboard becomes closer to the Earth experience.</span>
                </li>
              </ul>
              <p className="mt-6 text-lg leading-relaxed">
                These results are based on artificial gravity studies conducted with humans and animals by NASA and the German Aerospace Agency (DLR), an essential step to make space a possible home.
              </p>
            </Card>

            {/* Challenges */}
            <Card 
              ref={section4.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section4.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Challenges:</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  At Cosmora, every detail is designed to unite comfort and precision.
                  The rotation must be smooth, avoiding dizziness, and the module needs sufficient radius to reduce effects like Coriolis — that unusual sensation when moving inside something rotating.
                </p>
                <p>
                  Even with technical challenges, this is one of the most promising solutions to make missions to the Moon and Mars safer and more sustainable.
                </p>
              </div>
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
              Experience Artificial Gravity
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a virtual visit and feel what it's like to live with gravitational comfort in orbit.
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
        { title: "NASA Human Research Roadmap", url: "https://nasa.gov" },
        { title: "NASA Technology Portal", url: "https://nasa.gov" },
        { title: "NASA Ames Research Center", url: "https://nasa.gov" },
        { title: "NASA NTRS – Artificial Gravity Studies", url: "https://ntrs.nasa.gov" }
      ]} />
    </div>
  );
};

export default GravidadeArtificial;
