import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Tecnologia = () => {
  useScrollToTop();
  const navigate = useNavigate();
  
  const header = useScrollReveal();
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();
  const section3 = useScrollReveal();
  const section4 = useScrollReveal();
  const section5 = useScrollReveal();
  const section6 = useScrollReveal();

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
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-gradient-cosmic">
              Tecnologia
            </h1>
            <p className="text-2xl text-muted-foreground">
              Inovação de Ponta para a Vida no Espaço
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Intro */}
            <Card 
              ref={section1.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-lg leading-relaxed">
                Na Cosmora, usamos tecnologia de ponta para transformar o espaço em um lar confortável, seguro e sustentável.
              </p>
            </Card>

            {/* Gravidade Artificial & Engenharia */}
            <Card 
              ref={section2.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Gravidade Artificial & Engenharia</h2>
              <p className="text-lg leading-relaxed">
                Criamos gravidade artificial controlada por rotação, baseada em princípios validados pela NASA, garantindo conforto para o corpo humano. Nossas estações são projetadas com modelagem estrutural 3D e simulações físicas, testando proporções e experiências em microgravidade antes de cada construção.
              </p>
            </Card>

            {/* Materiais Inteligentes */}
            <Card 
              ref={section3.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Materiais Inteligentes</h2>
              <p className="text-lg leading-relaxed">
                Vidros eletrocrômicos, revestimentos termoativos e materiais avançados garantem proteção, conforto térmico e eficiência energética, baseados em estudos de janelas espaciais da NASA.
              </p>
            </Card>

            {/* Energia & Sustentabilidade */}
            <Card 
              ref={section4.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section4.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Energia & Sustentabilidade</h2>
              <p className="text-lg leading-relaxed">
                A estação utiliza conceitos de fusão limpa com Hélio-3 e sistemas inteligentes de reciclagem de ar, água e nutrientes, monitorados por sensores IoT, para manter tudo sustentável e eficiente.
              </p>
            </Card>

            {/* Design e Experiência Humana */}
            <Card 
              ref={section5.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section5.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Design e Experiência Humana</h2>
              <p className="text-lg leading-relaxed">
                Interfaces holográficas, ambientes responsivos e controles por gestos e voz tornam a vida na estação imersiva e intuitiva. Cada espaço é projetado com design emocional, modelagem 3D e texturização realista, garantindo conforto visual e funcionalidade.
              </p>
            </Card>

            {/* Infraestrutura Digital */}
            <Card 
              ref={section6.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section6.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Infraestrutura Digital & Propósito Científico</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Nosso site e sistemas internos usam React, Node.js e bancos de dados modernos, integrando módulos da estação, sensores e usuários em tempo real. Hospedagem e deploy são feitos no GODADDY REGISTRY, com versionamento no GitHub, garantindo estabilidade e inovação constante.
                </p>
                <p>
                  Transformamos pesquisas reais da NASA em uma experiência acessível e inspiradora, mostrando como seria viver, explorar e evoluir fora da Terra.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tecnologia;
