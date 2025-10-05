import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import lab1 from '@/assets/lab-1.png';

const TechnologySection = () => {
  return (
    <section id="tecnologia" className="py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge className="rounded-full bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
              <Sparkles className="w-3 h-3 mr-1" />
              Cutting-Edge Technology
            </Badge>
            
            <h2 className="text-gradient-cosmic animate-text-reveal opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
              Next-Generation Space Engineering
            </h2>
            
            <div className="space-y-6">
              <Link to="/gravidade-artificial">
                <div className="space-y-3 p-4 rounded-2xl hover:bg-card/50 cursor-pointer apple-smooth group animate-fade-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                  <h3 className="text-2xl font-semibold group-hover:text-primary apple-smooth">Artificial Gravity</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Controlled rotation system that simulates 1G, keeping your body healthy 
                    and providing Earth-like comfort.
                  </p>
                </div>
              </Link>

              <Link to="/janelas-inteligentes">
                <div className="space-y-3 p-4 rounded-2xl hover:bg-card/50 cursor-pointer apple-smooth group animate-fade-up opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
                  <h3 className="text-2xl font-semibold group-hover:text-primary apple-smooth">Smart Windows</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Glass with adaptive UV protection and opacity control, allowing 
                    stunning views with total safety.
                  </p>
                </div>
              </Link>

              <Link to="/clima-personalizado">
                <div className="space-y-3 p-4 rounded-2xl hover:bg-card/50 cursor-pointer apple-smooth group animate-fade-up opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
                  <h3 className="text-2xl font-semibold group-hover:text-primary apple-smooth">Personalized Climate</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Individual control of temperature, humidity and air composition in each 
                    residence, optimized by AI.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <Card className="p-2 rounded-3xl border-0 bg-gradient-to-br from-primary/10 to-purple-500/10 hover-lift cursor-pointer group animate-scale-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            <div className="rounded-2xl overflow-hidden bg-card">
              <img 
                src={lab1} 
                alt="Cosmora Space Laboratory" 
                className="w-full h-auto group-hover:scale-105 apple-smooth"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
