import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Recycle, Zap, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import recyclingDrone from '@/assets/recycling-drone.png';

const RecyclingDrone = () => {
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
                Recycling Drone
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our autonomous space recycling drones represent the future of orbital sustainability. 
                Equipped with cutting-edge technology, they collect and process space debris, transforming 
                orbital waste into valuable resources for the station.
              </p>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={recyclingDrone} 
                alt="Recycling Drone" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Recycle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Automated Recycling</h3>
              <p className="text-muted-foreground">
                Advanced AI system identifies and processes different types of space debris, 
                maximizing material utilization.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Solar Energy</h3>
              <p className="text-muted-foreground">
                High-efficiency solar panels ensure continuous operation without the need for 
                refueling, with unlimited autonomy.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Safe Navigation</h3>
              <p className="text-muted-foreground">
                Multiple sensors and intelligent navigation system avoid collisions and ensure 
                safe operation in the space environment.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-6">Space Sustainability</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Cosmora leads the sustainability revolution in space. Our recycling drones 
              not only clean Earth's orbit but also provide essential raw materials for 
              station expansion and maintenance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each drone is capable of processing up to 500kg of debris per month, transforming them into 
              reusable materials for construction, maintenance and even manufacturing of new 
              space components.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RecyclingDrone;
