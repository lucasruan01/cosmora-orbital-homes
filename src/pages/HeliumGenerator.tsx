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
            Voltar
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h1 className="text-gradient-cosmic">
                Helium-3 Generator
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                O reator de Hélio-3 é o coração energético da Cosmora. Utilizando fusão nuclear limpa 
                e segura, este gerador revolucionário fornece energia ilimitada e sustentável para 
                todas as operações da estação espacial.
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
              <h3 className="text-2xl font-bold mb-4">Fusão Nuclear</h3>
              <p className="text-muted-foreground">
                Tecnologia de fusão de Hélio-3 extraído da Lua, gerando energia limpa sem 
                produção de resíduos radioativos perigosos.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Battery className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Alta Eficiência</h3>
              <p className="text-muted-foreground">
                Conversão de energia com 95% de eficiência, gerando 500 megawatts de potência 
                contínua para toda a estação.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Segurança Total</h3>
              <p className="text-muted-foreground">
                Múltiplos sistemas de redundância e contenção garantem operação 100% segura, 
                com desligamento automático em emergências.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-6">Energia do Futuro</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              O Helium-3 Generator representa o avanço mais significativo em tecnologia energética 
              do século XXI. Diferente dos reatores de fissão nuclear tradicionais, nossa tecnologia 
              de fusão é intrinsecamente segura e não produz lixo radioativo de longa duração.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Um único quilo de Hélio-3 pode gerar energia equivalente a 50 milhões de barris de 
              petróleo. A Cosmora mantém reservas suficientes para décadas de operação independente, 
              com missões regulares à Lua para reabastecimento.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HeliumGenerator;
