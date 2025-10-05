import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

const GravidadeArtificial = () => {
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
          <div className="text-center mb-16">
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
            <Card className="p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30">
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Como funciona?</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Para manter o corpo humano saudável em longas viagens espaciais, a NASA estuda o uso de 
                  <strong> gravidade artificial por rotação</strong> — um sistema que gira lentamente para simular 
                  o peso que sentimos na Terra.
                </p>
                <p>
                  Essa rotação cria uma <strong>força centrífuga</strong>, parecida com a gravidade, permitindo que 
                  os músculos e ossos continuem funcionando como em 0,9 g, ou 90% da gravidade terrestre.
                </p>
              </div>
            </Card>

            {/* Estrutura e controle */}
            <Card className="p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30">
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Estrutura e controle</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  A ideia é simples: imagine um <strong>anel giratório</strong> dentro da estação.
                </p>
                <p>
                  Quando ele gira, o chão "empurra" os astronautas para fora, criando a sensação de peso.
                </p>
                <p>
                  Motores ajustam a rotação para manter a aceleração constante, e sistemas de equilíbrio evitam 
                  que a estação se desestabilize.
                </p>
              </div>
            </Card>

            {/* Benefícios */}
            <Card className="p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30">
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Benefícios</h2>
              <p className="text-lg mb-6">Com 0,9 g simulada:</p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Os músculos e ossos continuam fortes;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>O fluxo sanguíneo se mantém equilibrado;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>A vida a bordo se torna mais próxima da Terra.</span>
                </li>
              </ul>
              <p className="mt-6 text-lg leading-relaxed">
                Esses efeitos foram observados em estudos de gravidade artificial com humanos e animais em 
                simulações da NASA e da Agência Espacial Alemã (DLR).
              </p>
            </Card>

            {/* Desafios */}
            <Card className="p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30">
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Desafios</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Criar esse sistema exige engenharia precisa: a rotação precisa ser suave para evitar tonturas, 
                  e o módulo deve ter raio suficiente para reduzir efeitos como o "Coriolis" (aquela sensação estranha 
                  ao se mover em algo girando).
                </p>
                <p>
                  Ainda assim, é uma das soluções mais promissoras para futuras missões à Lua e Marte.
                </p>
              </div>
            </Card>
          </div>

          {/* CTA */}
          <Card className="mt-16 p-12 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 text-center">
            <h3 className="text-3xl font-semibold mb-4">
              Experimente a Gravidade Artificial
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agende uma visita virtual e sinta como é viver com conforto gravitacional em órbita.
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
