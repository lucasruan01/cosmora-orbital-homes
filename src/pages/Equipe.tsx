import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const teamMembers = [
  {
    name: "Thalles",
    role: "o Engenheiro da Experiência",
    description: "Com precisão técnica e sensibilidade artística, Thalles transforma códigos e pixels em emoção. É ele quem cria os sistemas inteligentes e as interfaces que dão vida à Cosmora, unindo tecnologia e estética em perfeita sinergia. Cada detalhe carrega seu toque — o de quem entende que a verdadeira inovação acontece quando ciência e arte respiram juntas."
  },
  {
    name: "Débora",
    role: "a Visionária das Formas",
    description: "Com um olhar que enxerga além do óbvio, Débora transforma ideias em experiências visuais que respiram propósito. É ela quem dá rosto e alma à Cosmora, desenhando o futuro com traços que unem estética, emoção e significado. Sob suas mãos, cada Domus se torna mais do que um espaço — torna-se um fragmento do infinito habitável."
  },
  {
    name: "Lucas",
    role: "o Arquiteto da Estrutura",
    description: "Lucas é quem constrói os alicerces que sustentam nossa missão. Sua mente analítica e organizada transforma conceitos em sistemas sólidos, escaláveis e coerentes. Ele conecta cada parte da Cosmora, garantindo que tudo funcione em perfeita harmonia — da ideia ao funcionamento real."
  },
  {
    name: "Carol",
    role: "a Mente Inquieta da Descoberta",
    description: "Curiosa por natureza e movida pela busca incessante do novo, Carol é a bússola da Cosmora. Ela pesquisa, documenta e conecta mundos, revelando caminhos onde antes só havia perguntas. Sua energia mantém a inovação acesa — sempre humana, sempre consciente."
  },
  {
    name: "Lívia",
    role: "a Guardiã da Ordem e da Palavra",
    description: "Entre dados, histórias e significados, Lívia encontra harmonia. Sua escrita costura o pensamento coletivo e dá clareza à complexidade. É ela quem traduz o universo da Cosmora em narrativas compreensíveis, transformando a técnica em poesia e a estrutura em inspiração."
  }
];

const Equipe = () => {
  useScrollToTop();
  
  const header = useScrollReveal();

  return (
    <div className="min-h-screen smooth-scroll bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
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
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-gradient-cosmic">
              Equipe
            </h1>
            <p className="text-2xl text-muted-foreground">
              As Mentes por Trás da Cosmora
            </p>
          </div>

          {/* Team Members */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {teamMembers.map((member, index) => {
              const cardReveal = useScrollReveal(0.1, index * 100);
              return (
                <Card 
                  key={member.name}
                  ref={cardReveal.ref}
                  className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                    cardReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2 text-gradient-cosmic">
                    {member.name}
                  </h3>
                  <h4 className="text-xl text-primary mb-4">
                    {member.role}
                  </h4>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {member.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Equipe;
