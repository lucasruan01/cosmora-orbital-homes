import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, Sparkles, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import customRoom from '@/assets/custom-room.png';

const CustomRoom = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h1 className="text-gradient-cosmic">
                Custom Room
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Each residence at Cosmora is a personalized sanctuary of comfort and technology. 
                Our customizable rooms offer spectacular views of Earth while providing 
                maximum privacy, comfort and functionality for life in space.
              </p>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={customRoom} 
                alt="Custom Room" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Home className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Customizable Design</h3>
              <p className="text-muted-foreground">
                Modular walls and adaptable furniture allow you to configure your space 
                exactly as you desire, from minimalist to luxurious.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Sparkles className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Panoramic Windows</h3>
              <p className="text-muted-foreground">
                Smart reinforced glass windows offer stunning views of Earth, 
                with opacity control and integrated UV protection.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Settings className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Smart Control</h3>
              <p className="text-muted-foreground">
                Complete automation system controls lighting, temperature, privacy and 
                entertainment through voice commands or app.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-6">Your Home Among the Stars</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Cosmora's Custom Rooms are designed to be true homes in space. 
              Each room has 50m² of private area, with windows that offer 180° views 
              of planet Earth and the stars.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Luxury materials, premium acoustic isolation, and individual climate control systems 
              ensure absolute comfort. Smart furniture adapts to microgravity, 
              offering functionality in both artificial gravity and free-floating environments.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CustomRoom;
