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
            Voltar
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h1 className="text-gradient-cosmic">
                Custom Room
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Cada residência na Cosmora é um santuário personalizado de conforto e tecnologia. 
                Nossos quartos customizáveis oferecem vistas espetaculares da Terra enquanto proporcionam 
                o máximo em privacidade, conforto e funcionalidade para a vida no espaço.
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
              <h3 className="text-2xl font-bold mb-4">Design Personalizável</h3>
              <p className="text-muted-foreground">
                Paredes modulares e mobiliário adaptável permitem que você configure seu espaço 
                exatamente como deseja, do minimalista ao luxuoso.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Sparkles className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Janelas Panorâmicas</h3>
              <p className="text-muted-foreground">
                Janelas inteligentes de vidro reforçado oferecem vistas deslumbrantes da Terra, 
                com controle de opacidade e proteção UV integrada.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Settings className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Controle Inteligente</h3>
              <p className="text-muted-foreground">
                Sistema de automação completo controla iluminação, temperatura, privacidade e 
                entretenimento através de comandos de voz ou app.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-6">Seu Lar Entre as Estrelas</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Os Custom Rooms da Cosmora foram projetados para serem verdadeiros lares no espaço. 
              Cada quarto possui 50m² de área privativa, com janelas que oferecem vistas de 180° 
              do planeta Terra e das estrelas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Materiais de luxo, isolamento acústico premium, e sistemas de climatização individual 
              garantem conforto absoluto. O mobiliário inteligente se adapta à microgravidade, 
              oferecendo funcionalidade tanto em ambiente de gravidade artificial quanto em flutuação livre.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CustomRoom;
