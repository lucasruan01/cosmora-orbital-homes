import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const NossaMissao = () => {
  useScrollToTop();
  
  const header = useScrollReveal();
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();

  return (
    <div className="min-h-screen smooth-scroll bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Back Button */}
          <Link to="/">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Voltar
            </Button>
          </Link>

          {/* Header */}
          <div 
            ref={header.ref}
            className={`text-center mb-16 transition-all duration-1000 ${
              header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-gradient-cosmic">
              Nossa Missão
            </h1>
            <p className="text-2xl text-muted-foreground">
              Explorar, Inovar e Habitar o Cosmos
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Visão */}
            <Card 
              ref={section1.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Na Cosmora, acreditamos que morar no espaço não é para todos — é para quem respira curiosidade, ama o universo e quer explorar além da Terra. Nossa missão é criar casas espaciais seguras, confortáveis e inspiradoras, feitas sob medida para entusiastas, cientistas e exploradores apaixonados pelo cosmos.
                </p>
                <p>
                  Para isso, desenvolvemos testes de perfil e simulações personalizadas, que ajudam a entender como cada pessoa se adapta à vida espacial, ajustando gravidade artificial, microclima e experiências a bordo de acordo com suas necessidades e potencial.
                </p>
                <p>
                  Cada inovação é pensada para garantir conforto, segurança e prazer em cada detalhe, combinando ciência de ponta com cuidado humano. Na Cosmora, morar no espaço é um privilégio para quem quer explorar, aprender e viver o universo de forma intensa e consciente.
                </p>
              </div>
            </Card>

            {/* CTA */}
            <Card 
              ref={section2.ref}
              className={`p-12 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 text-center transition-all duration-1000 ${
                section2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-3xl font-semibold mb-4">
                Faça Parte da Nossa Visão
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Descubra se você tem o perfil para viver entre as estrelas.
              </p>
              <Link to="/auth?mode=signup">
                <Button 
                  size="lg"
                  className="rounded-full bg-primary hover:bg-primary/90 hover:scale-105 shadow-cosmic text-lg px-10 py-6 transition-all duration-300"
                >
                  Começar Agora
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NossaMissao;
