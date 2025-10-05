import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Gauge } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { User } from '@supabase/supabase-js';

const GravidadeArtificial = () => {
  useScrollToTop();
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const header = useScrollReveal();
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();
  const section3 = useScrollReveal();
  const section4 = useScrollReveal();
  const cta = useScrollReveal();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleTestClick = () => {
    if (!user) {
      toast({
        title: 'Autenticação necessária',
        description: 'Antes crie uma conta ou entre numa existente.',
        variant: 'destructive',
      });
      navigate('/auth?mode=signup');
    } else {
      toast({
        title: 'Em breve!',
        description: 'O teste de perfil estará disponível em breve.',
      });
    }
  };
  return (
    <div className="min-h-screen smooth-scroll bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Back Button */}
          <Link to="/#tecnologia">
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
              <Gauge className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-gradient-cosmic">
              Gravidade Artificial
            </h1>
            <p className="text-2xl text-muted-foreground">
              0,9 G de Conforto e Saúde no Espaço
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Como funciona */}
            <Card 
              ref={section1.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Como funciona?</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Na Cosmora, desenvolvemos ambientes pensados para o corpo humano viver bem além da Terra.
                  Por isso, nossas casas espaciais utilizam o princípio da gravidade artificial por rotação, inspirado em estudos da NASA.
                </p>
                <p>
                  Ao girar lentamente, a estrutura cria uma força centrífuga que reproduz até 90% da gravidade terrestre (0,9 g), o suficiente para manter músculos e ossos ativos, garantindo conforto e saúde durante longas jornadas pelo espaço.
                </p>
              </div>
            </Card>

            {/* Estrutura e controle */}
            <Card 
              ref={section2.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Estrutura e controle:</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Na Cosmora, transformamos conceitos complexos em soluções simples para a vida no espaço.
                </p>
                <p>
                  Imagine um anel giratório dentro da estação: quando ele gira, o chão "empurra" os astronautas para fora, criando a sensação de peso.
                  Motores controlam a rotação constante, enquanto sistemas de equilíbrio mantêm a estabilidade da estrutura, garantindo conforto e segurança em cada movimento.
                </p>
              </div>
            </Card>

            {/* Benefícios */}
            <Card 
              ref={section3.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Benefícios:</h2>
              <p className="text-lg mb-6">Com 0,9 g simulada, nossas moradias espaciais mantêm o corpo em equilíbrio:</p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Músculos e ossos continuam fortes;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>O fluxo sanguíneo permanece estável;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>A vida a bordo se torna mais próxima da experiência na Terra.</span>
                </li>
              </ul>
              <p className="mt-6 text-lg leading-relaxed">
                Esses resultados se baseiam em estudos de gravidade artificial realizados com humanos e animais pela NASA e pela Agência Espacial Alemã (DLR), um passo essencial para tornar o espaço um lar possível.
              </p>
            </Card>

            {/* Desafios */}
            <Card 
              ref={section4.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section4.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Desafios:</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Na Cosmora, cada detalhe é pensado para unir conforto e precisão.
                  A rotação deve ser suave, evitando tonturas, e o módulo precisa ter raio suficiente para reduzir efeitos como o Coriolis — aquela sensação incomum ao se mover dentro de algo em rotação.
                </p>
                <p>
                  Mesmo com desafios técnicos, essa é uma das soluções mais promissoras para tornar missões à Lua e a Marte mais seguras e sustentáveis
                </p>
              </div>
            </Card>
          </div>

          {/* CTA */}
          <Card 
            ref={cta.ref}
            className={`mt-16 p-12 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 text-center transition-all duration-1000 ${
              cta.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-3xl font-semibold mb-4">
              Experimente a Gravidade Artificial
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agende uma visita virtual e sinta como é viver com conforto gravitacional em órbita.
            </p>
            <Button 
              size="lg"
              onClick={handleTestClick}
              className="rounded-full bg-primary hover:bg-primary/90 hover:scale-105 shadow-cosmic text-lg px-10 py-6 transition-all duration-300"
            >
              Faça o Teste de Perfil
            </Button>
          </Card>
        </div>
      </main>

      <Footer sources={[
        { title: "NASA Human Research Roadmap", url: "https://nasa.gov" },
        { title: "NASA Technology Portal", url: "https://nasa.gov" },
        { title: "NASA Ames Research Center", url: "https://nasa.gov" },
        { title: "NASA NTRS – Artificial Gravity Studies", url: "https://ntrs.nasa.gov" }
      ]} />
    </div>
  );
};

export default GravidadeArtificial;
