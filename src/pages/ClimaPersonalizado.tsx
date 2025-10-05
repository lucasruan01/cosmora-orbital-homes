import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Thermometer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { User } from '@supabase/supabase-js';

const ClimaPersonalizado = () => {
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
          <Button 
            variant="ghost" 
            className="mb-8 group"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Voltar
          </Button>

          {/* Header */}
          <div 
            ref={header.ref}
            className={`text-center mb-16 transition-all duration-1000 ${
              header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mx-auto mb-6">
              <Thermometer className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-gradient-cosmic">
              Clima Personalizado
            </h1>
            <p className="text-2xl text-muted-foreground">
              Controle Total para Cada Residência
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
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Visão Geral</h2>
              <p className="text-lg leading-relaxed">
                Na Cosmora, priorizamos o bem-estar de cada habitante. Por isso, nossas acomodações terão 
                <strong> controle individualizado de temperatura, umidade e qualidade do ar</strong>, sempre otimizado 
                por inteligência artificial — para que cada pessoa viva exatamente da maneira mais confortável e saudável.
              </p>
            </Card>

            {/* Como funciona */}
            <Card 
              ref={section2.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">
                Como funciona:
              </h2>
              
              <div className="space-y-8">
                {/* Sistema ECLSS */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Sistema integrado de suporte ambiental (ECLSS)</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Na Estação Espacial Internacional, o ECLSS cuida da temperatura, da umidade e do ar para manter todos confortáveis e seguros. Na Cosmora, levamos esse conceito para cada residência, ajustando o ambiente de acordo com as necessidades de quem está dentro.
                  </p>
                </div>

                {/* Sensores e IA */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Sensores e IA em tempo real</h3>
                  <p className="text-lg leading-relaxed">
                    Sensores inteligentes medem temperatura, umidade, CO₂ e outros gases o tempo todo, enquanto nossa IA interpreta os dados e faz ajustes automáticos, seja para aquecer, esfriar, desumidificar ou renovar o ar, garantindo um clima sempre perfeito.
                  </p>
                </div>

                {/* Ciclagem e purificação */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Ciclagem e purificação do ar</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    O ar circula de forma constante, com oxigênio renovado, CO₂ removido e filtragem de partículas e compostos indesejados. Cada habitação funciona de forma modular, adaptando a purificação e a ciclagem do ar ao perfil de cada morador.
                  </p>
                </div>

                {/* Materiais inteligentes */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Construção com materiais inteligentes</h3>
                  <p className="text-lg leading-relaxed">
                    As paredes e dutos usam materiais inteligentes com isolamento térmico avançado e membranas que controlam a umidade e ajudam na troca seletiva de gases. Alguns desses conceitos, já testados pela NASA, até permitem reciclar ar e água dentro da própria estrutura, tornando a vida no espaço mais segura, confortável e sustentável.
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
                  <span><strong>Conforto feito para você:</strong> cada morador pode ajustar seu microclima ideal — nada de "uma temperatura para todos".</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>Saúde em primeiro lugar:</strong> ar puro e umidade na medida certa ajudam a reduzir alergias, ressecamento e qualquer desconforto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>Energia usada com inteligência:</strong> nossa IA ajusta só o necessário, evitando desperdício e mantendo tudo eficiente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>Viver como no futuro:</strong> morar no espaço não é só sobreviver, é prosperar em cada detalhe do seu dia a dia em órbita.</span>
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
              Seu Conforto, Sua Atmosfera
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experimente o futuro do controle ambiental personalizado na Cosmora.
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

      <Footer />
    </div>
  );
};

export default ClimaPersonalizado;
