import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Thermometer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { User } from '@supabase/supabase-js';

const ClimaPersonalizado = () => {
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
              <Thermometer className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-gradient-cosmic">
              Personalized Climate
            </h1>
            <p className="text-2xl text-muted-foreground">
              Total Control for Each Residence
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
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Overview</h2>
              <p className="text-lg leading-relaxed">
                At Cosmora, we prioritize the well-being of each inhabitant. That's why our accommodations will have 
                <strong> individualized control of temperature, humidity and air quality</strong>, always optimized 
                by artificial intelligence — so everyone can live exactly the way that's most comfortable and healthy for them.
              </p>
            </Card>

            {/* How it works */}
            <Card 
              ref={section2.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">
                How it works:
              </h2>
              
              <div className="space-y-8">
                {/* ECLSS System */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Integrated Environmental Support System (ECLSS)</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    On the International Space Station, ECLSS takes care of temperature, humidity and air to keep everyone comfortable and safe. At Cosmora, we take this concept to each residence, adjusting the environment according to the needs of those inside.
                  </p>
                </div>

                {/* Sensors and AI */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Real-time Sensors and AI</h3>
                  <p className="text-lg leading-relaxed">
                    Smart sensors measure temperature, humidity, CO₂ and other gases all the time, while our AI interprets the data and makes automatic adjustments, whether to heat, cool, dehumidify or renew the air, ensuring a perfect climate at all times.
                  </p>
                </div>

                {/* Air cycling and purification */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Air Cycling and Purification</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Air circulates constantly, with renewed oxygen, removed CO₂ and filtering of unwanted particles and compounds. Each dwelling functions modularly, adapting air purification and cycling to each resident's profile.
                  </p>
                </div>

                {/* Smart materials */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Construction with Smart Materials</h3>
                  <p className="text-lg leading-relaxed">
                    Walls and ducts use smart materials with advanced thermal insulation and membranes that control humidity and help with selective gas exchange. Some of these concepts, already tested by NASA, even allow recycling air and water within the structure itself, making life in space safer, more comfortable and sustainable.
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
                  <span><strong>Comfort made for you:</strong> each resident can adjust their ideal microclimate — no more "one temperature for all".</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>Health first:</strong> pure air and just-right humidity help reduce allergies, dryness and any discomfort.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>Intelligent energy use:</strong> our AI adjusts only what's necessary, avoiding waste and keeping everything efficient.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>Living like the future:</strong> living in space isn't just surviving, it's thriving in every detail of your day-to-day in orbit.</span>
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
              Your Comfort, Your Atmosphere
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the future of personalized environmental control at Cosmora.
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

      <Footer />
    </div>
  );
};

export default ClimaPersonalizado;
