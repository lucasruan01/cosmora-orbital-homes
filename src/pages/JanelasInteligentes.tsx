import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { User } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const JanelasInteligentes = () => {
  useScrollToTop();
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const header = useScrollReveal();
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();
  const section3 = useScrollReveal();
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
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-gradient-cosmic">
              Janelas Inteligentes
            </h1>
            <p className="text-2xl text-muted-foreground">
              Proteção, Transparência e Controle
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Visão Geral */}
            <Card 
              ref={section1.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Visão Geral:</h2>
              <p className="text-lg leading-relaxed">
                As janelas inteligentes da Cosmora foram criadas para unir tecnologia, segurança e beleza em um só design.
                Elas oferecem vistas panorâmicas do espaço e se ajustam automaticamente à luz solar, bloqueando radiação UV e calor.
                O resultado é um ambiente sempre confortável e harmonioso, em qualquer momento do dia — com o universo inteiro ao alcance dos olhos.
              </p>
            </Card>

            {/* Como funcionam */}
            <Card 
              ref={section2.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">
                Como funcionam:
              </h2>
              
              <div className="space-y-8">
                {/* 1. Vidros Eletrocrômicos */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Vidros Eletrocrômicos</h3>
                  <p className="text-lg leading-relaxed">
                    Desenvolvidos em estudos da NASA, esses vidros mudam de transparência com uma leve carga elétrica, 
                    escurecendo sob luz intensa e clareando quando necessário, como se "respirassem" com o ambiente.
                  </p>
                </div>

                {/* 2. Filme Metálico Refletivo */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Filme Metálico Refletivo "Nunsun"</h3>
                  <p className="text-lg leading-relaxed">
                    Criado pela NASA, o filme Nunsun reflete calor e brilho solar sem bloquear a vista. Aplicado sobre 
                    o vidro, ele protege contra radiação infravermelha e ultravioleta, mantendo o interior mais fresco.
                  </p>
                </div>

                {/* 3. Materiais Estruturais */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Materiais Estruturais Avançados</h3>
                  <p className="text-lg leading-relaxed">
                    As janelas utilizam camadas de acrílico e policarbonato (leves e resistentes) junto a vidros cerâmicos 
                    externos, formando um sistema multicamada capaz de resistir à pressão e até a micrometeoritos.
                  </p>
                </div>

                {/* 4. Controle Adaptativo */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Controle Adaptativo</h3>
                  <p className="text-lg leading-relaxed">
                    Sensores monitoram a luminosidade e aplicam ajustes automáticos de opacidade, equilibrando proteção 
                    e visibilidade em tempo real.
                  </p>
                </div>
              </div>
            </Card>

            {/* Benefícios */}
            <Card 
              ref={section3.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Benefícios na prática:</h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Protege você da radiação UV e do calor do Sol.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Mantém o conforto visual, sem aquele ofuscamento incômodo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Ajuda a manter a estação na temperatura ideal, economizando energia.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Permite vistas seguras e incríveis da Terra e do espaço, como se você estivesse flutuando lá fora.</span>
                </li>
              </ul>
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
              Veja o Universo com Clareza
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Descubra como nossas janelas inteligentes transformam a experiência de viver no espaço.
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
        { title: "NASA – Spacecraft Windows", url: "https://nasa.gov" },
        { title: "NASA Technical Reports Server (NTRS)", url: "https://ntrs.nasa.gov" },
        { title: "NASA NTRS – Space Window Materials", url: "https://ntrs.nasa.gov" }
      ]} />
    </div>
  );
};

export default JanelasInteligentes;
