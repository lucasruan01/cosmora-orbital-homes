import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ClimaPersonalizado = () => {
  useScrollToTop();
  
  const header = useScrollReveal();
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();
  const section3 = useScrollReveal();
  const cta = useScrollReveal();
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
                Como funciona (com respaldo nos conceitos da NASA)
              </h2>
              
              <div className="space-y-8">
                {/* Sistema ECLSS */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Sistema integrado de suporte ambiental (ECLSS)</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    A Estação Espacial Internacional utiliza o <strong>Environmental Control and Life Support System (ECLSS)</strong>, 
                    que regula temperatura, umidade e composição da atmosfera para manter conforto e segurança.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Na Cosmora, cada residência terá uma versão local desse conceito, adaptada para modular os parâmetros 
                    conforme as necessidades individuais.
                  </p>
                </div>

                {/* Sensores e IA */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Sensores e IA em tempo real</h3>
                  <p className="text-lg leading-relaxed">
                    Sensores internos medem temperatura, umidade, níveis de CO₂, vapor de água e outros gases. A inteligência 
                    artificial interpreta essas medições e ativa ajustes automáticos (esfriamento, aquecimento, desumidificação, 
                    renovação de ar) para manter o ambiente ideal.
                  </p>
                </div>

                {/* Ciclagem e purificação */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Ciclagem e purificação do ar</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Os sistemas de suporte vital da estação garantem renovação de oxigênio e remoção de CO₂, filtragem 
                    (partículas e compostos orgânicos voláteis), e controle de umidade.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Em cada habitação, esse sistema opera de forma modular para atender os perfis individuais.
                  </p>
                </div>

                {/* Materiais inteligentes */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Construção com materiais inteligentes</h3>
                  <p className="text-lg leading-relaxed">
                    Paredes e dutos empregam materiais com isolação térmica avançada, além de membranas que ajudam no controle 
                    da umidade e na transferência seletiva de gases. A NASA já patenteou conceitos que integram reciclagem de 
                    ar e água nas paredes estruturais.
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
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Benefícios na prática</h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>Conforto sob medida:</strong> cada pessoa ajusta seu microclima ideal — não há "uma temperatura para todos".</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>Saúde garantida:</strong> níveis ótimos de umidade e ar puro reduzem riscos de alergias, ressecamento ou desconfortos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>Eficiência energética:</strong> a IA evita desperdício, ajustando apenas o necessário para cada ambiente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong>Experiência digna de estação do futuro:</strong> viver bem em órbita significa não só sobreviver, mas prosperar.</span>
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
              className="rounded-full bg-primary hover:bg-primary/90 hover:scale-105 shadow-cosmic text-lg px-10 py-6 transition-all duration-300"
            >
              Agendar Tour Virtual
            </Button>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClimaPersonalizado;
