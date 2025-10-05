import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Target } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const NossaMissao = () => {
  useScrollToTop();
  const navigate = useNavigate();
  
  const header = useScrollReveal();
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();

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
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-gradient-cosmic">
              Our Mission
            </h1>
            <p className="text-2xl text-muted-foreground">
              Explore, Innovate and Inhabit the Cosmos
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Vision */}
            <Card 
              ref={section1.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  At Cosmora, we believe that living in space isn't for everyone — it's for those who breathe curiosity, love the universe and want to explore beyond Earth. Our mission is to create safe, comfortable and inspiring space homes, tailor-made for enthusiasts, scientists and explorers passionate about the cosmos.
                </p>
                <p>
                  To achieve this, we develop profile tests and personalized simulations that help understand how each person adapts to space life, adjusting artificial gravity, microclimate and onboard experiences according to their needs and potential.
                </p>
                <p>
                  Each innovation is designed to ensure comfort, safety and pleasure in every detail, combining cutting-edge science with human care. At Cosmora, living in space is a privilege for those who want to explore, learn and experience the universe in an intense and conscious way.
                </p>
              </div>
            </Card>

            {/* CTA */}
            <Card 
              ref={section2.ref}
              className={`p-12 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 text-center transition-all duration-1000 ${
                section2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-3xl font-semibold mb-4">
                Be Part of Our Vision
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover if you have the profile to live among the stars.
              </p>
              <Link to="/auth?mode=signup">
                <Button 
                  size="lg"
                  className="rounded-full bg-primary hover:bg-primary/90 hover:scale-105 shadow-cosmic text-lg px-10 py-6 transition-all duration-300"
                >
                  Start Now
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NossaMissao;
