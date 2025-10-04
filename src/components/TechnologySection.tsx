import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';

const TechnologySection = () => {
  return (
    <section id="tecnologia" className="py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge className="rounded-full bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Tecnologia de Ponta
            </Badge>
            
            <h2 className="text-gradient-cosmic">
              Engenharia Espacial de Próxima Geração
            </h2>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold">Gravidade Artificial</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Sistema de rotação controlada que simula 0.9G, mantendo seu corpo saudável 
                  e proporcionando conforto semelhante à Terra.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold">Janelas Inteligentes</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Vidros com proteção UV adaptativa e controle de opacidade, permitindo 
                  vistas deslumbrantes com total segurança.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold">Clima Personalizado</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Controle individual de temperatura, umidade e composição do ar em cada 
                  residência, otimizado por IA.
                </p>
              </div>
            </div>
          </div>

          <Card className="p-2 rounded-3xl border-0 bg-gradient-to-br from-primary/10 to-purple-500/10 hover-lift">
            <div className="rounded-2xl overflow-hidden bg-card">
              <img 
                src="/src/assets/lab-1.png" 
                alt="Laboratório Espacial Cosmora" 
                className="w-full h-auto"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
