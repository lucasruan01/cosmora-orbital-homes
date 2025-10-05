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
              Tecnologia de Ponta
            </Badge>
            
            <h2 className="text-gradient-cosmic animate-text-reveal opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
              Engenharia Espacial de Próxima Geração
            </h2>
            
            <div className="space-y-6">
              <Link to="/gravidade-artificial">
                <div className="space-y-3 p-4 rounded-2xl hover:bg-card/50 cursor-pointer apple-smooth group animate-fade-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                  <h3 className="text-2xl font-semibold group-hover:text-primary apple-smooth">Gravidade Artificial</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Sistema de rotação controlada que simula 1G, mantendo seu corpo saudável 
                    e proporcionando conforto semelhante à Terra.
                  </p>
                </div>
              </Link>

              <Link to="/janelas-inteligentes">
                <div className="space-y-3 p-4 rounded-2xl hover:bg-card/50 cursor-pointer apple-smooth group animate-fade-up opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
                  <h3 className="text-2xl font-semibold group-hover:text-primary apple-smooth">Janelas Inteligentes</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Vidros com proteção UV adaptativa e controle de opacidade, permitindo 
                    vistas deslumbrantes com total segurança.
                  </p>
                </div>
              </Link>

              <Link to="/clima-personalizado">
                <div className="space-y-3 p-4 rounded-2xl hover:bg-card/50 cursor-pointer apple-smooth group animate-fade-up opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
                  <h3 className="text-2xl font-semibold group-hover:text-primary apple-smooth">Clima Personalizado</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Controle individual de temperatura, umidade e composição do ar em cada 
                    residência, otimizado por IA.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <Card className="p-2 rounded-3xl border-0 bg-gradient-to-br from-primary/10 to-purple-500/10 hover-lift cursor-pointer group animate-scale-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            <div className="rounded-2xl overflow-hidden bg-card">
              <img 
                src={lab1} 
                alt="Laboratório Espacial Cosmora" 
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
