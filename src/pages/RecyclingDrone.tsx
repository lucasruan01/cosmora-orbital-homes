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
            Voltar
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h1 className="text-gradient-cosmic">
                Recycling Drone
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nossos drones autônomos de reciclagem espacial representam o futuro da sustentabilidade orbital. 
                Equipados com tecnologia de ponta, eles coletam e processam detritos espaciais, transformando 
                lixo orbital em recursos valiosos para a estação.
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
              <h3 className="text-2xl font-bold mb-4">Reciclagem Automatizada</h3>
              <p className="text-muted-foreground">
                Sistema de IA avançado identifica e processa diferentes tipos de detritos espaciais, 
                maximizando o aproveitamento de materiais.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Energia Solar</h3>
              <p className="text-muted-foreground">
                Painéis solares de alta eficiência garantem operação contínua sem necessidade de 
                reabastecimento, com autonomia ilimitada.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Navegação Segura</h3>
              <p className="text-muted-foreground">
                Sensores múltiplos e sistema de navegação inteligente evitam colisões e garantem 
                operação segura no ambiente espacial.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-6">Sustentabilidade Espacial</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A Cosmora lidera a revolução da sustentabilidade no espaço. Nossos drones de reciclagem 
              não apenas limpam a órbita terrestre, mas também fornecem matéria-prima essencial para 
              expansão e manutenção da estação.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada drone é capaz de processar até 500kg de detritos por mês, transformando-os em 
              materiais reutilizáveis para construção, manutenção e até mesmo fabricação de novos 
              componentes espaciais.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RecyclingDrone;
