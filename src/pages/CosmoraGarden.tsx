import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sprout, Droplets, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import cosmoraGarden from '@/assets/cosmora-garden.png';

const CosmoraGarden = () => {
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
                Cosmora Garden
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our orbital hydroponic garden is a marvel of space agriculture. Using 
                cutting-edge technology and automated systems, we grow fresh and nutritious food 
                in a microgravity environment, ensuring food self-sufficiency for all residents.
              </p>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={cosmoraGarden} 
                alt="Cosmora Garden" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Sprout className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Hydroponic Cultivation</h3>
              <p className="text-muted-foreground">
                Advanced soilless cultivation system, optimized for microgravity. Produces vegetables, 
                fruits and herbs with 40% more efficiency than on Earth.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Droplets className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Water Recycling</h3>
              <p className="text-muted-foreground">
                Closed-loop recycling system that reuses 98% of water, ensuring sustainable use 
                of precious water resources in space.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Sun className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">LED Lighting</h3>
              <p className="text-muted-foreground">
                AI-optimized light spectrum to maximize photosynthesis and growth, 
                automatically adjusted for each plant type.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-6">Agriculture of the Future</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Cosmora Garden represents the vanguard of space agriculture. With precision 
              robotic arms and advanced sensors, each plant receives individualized care, resulting 
              in superior quality products.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our orbital garden produces over 2 tons of fresh food monthly, 
              including leafy vegetables, tomatoes, strawberries, and aromatic herbs. All grown 
              without pesticides, in a controlled environment with optimized nutrients.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CosmoraGarden;
