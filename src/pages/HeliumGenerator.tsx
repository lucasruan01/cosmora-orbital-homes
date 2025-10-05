import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Atom, Battery, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heliumGenerator from '@/assets/helium-generator.png';

const HeliumGenerator = () => {
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
                Helium-3 Generator
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The Helium-3 reactor is the energy heart of Cosmora. Using clean 
                and safe nuclear fusion, this revolutionary generator provides unlimited and sustainable energy for 
                all space station operations.
              </p>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heliumGenerator} 
                alt="Helium-3 Generator" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Atom className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Nuclear Fusion</h3>
              <p className="text-muted-foreground">
                Helium-3 fusion technology extracted from the Moon, generating clean energy without 
                producing dangerous radioactive waste.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Battery className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">High Efficiency</h3>
              <p className="text-muted-foreground">
                Energy conversion with 95% efficiency, generating 500 megawatts of continuous power 
                for the entire station.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Total Safety</h3>
              <p className="text-muted-foreground">
                Multiple redundancy and containment systems ensure 100% safe operation, 
                with automatic shutdown in emergencies.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-6">Energy of the Future</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Helium-3 Generator represents the most significant advancement in energy technology 
              of the 21st century. Unlike traditional nuclear fission reactors, our fusion technology 
              is inherently safe and does not produce long-lived radioactive waste.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A single kilogram of Helium-3 can generate energy equivalent to 50 million barrels of 
              oil. Cosmora maintains sufficient reserves for decades of independent operation, 
              with regular missions to the Moon for refueling.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HeliumGenerator;
