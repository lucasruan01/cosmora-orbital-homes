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
            Voltar
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h1 className="text-gradient-cosmic">
                Cosmora Garden
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nosso jardim hidropônico orbital é uma maravilha da agricultura espacial. Utilizando 
                tecnologia de ponta e sistemas automatizados, cultivamos alimentos frescos e nutritivos 
                em ambiente de microgravidade, garantindo autossuficiência alimentar para todos os residentes.
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
              <h3 className="text-2xl font-bold mb-4">Cultivo Hidropônico</h3>
              <p className="text-muted-foreground">
                Sistema avançado de cultivo sem solo, otimizado para microgravidade. Produz vegetais, 
                frutas e ervas com 40% mais eficiência que na Terra.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Droplets className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Reciclagem de Água</h3>
              <p className="text-muted-foreground">
                Sistema fechado de reciclagem que reutiliza 98% da água, garantindo uso sustentável 
                dos recursos hídricos preciosos no espaço.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <Sun className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Iluminação LED</h3>
              <p className="text-muted-foreground">
                Espectro de luz otimizado por IA para maximizar fotossíntese e crescimento, 
                ajustado automaticamente para cada tipo de planta.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-6">Agricultura do Futuro</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              O Cosmora Garden representa a vanguarda da agricultura espacial. Com braços robóticos 
              de precisão e sensores avançados, cada planta recebe cuidado individualizado, resultando 
              em produtos de qualidade superior.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa horta orbital produz mais de 2 toneladas de alimentos frescos mensalmente, 
              incluindo vegetais folhosos, tomates, morangos, e ervas aromáticas. Tudo cultivado 
              sem pesticidas, em ambiente controlado e com nutrientes otimizados.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CosmoraGarden;
