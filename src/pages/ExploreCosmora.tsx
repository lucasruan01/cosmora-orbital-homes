import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const ExploreCosmora = () => {
  useScrollToTop();

  const sources = [
    { title: 'NASA - Space Habitats', url: 'https://www.nasa.gov' },
    { title: 'NASA Technology', url: 'https://technology.nasa.gov' },
    { title: 'NASA Techport', url: 'https://techport.nasa.gov' },
    { title: 'Cosmora Habitat Video', url: 'https://www.youtube.com/watch?v=bVzppWSIFU0' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Explore Cosmora
            </h1>
            
            <Tabs defaultValue="sobre" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="sobre">Sobre Cosmora</TabsTrigger>
                <TabsTrigger value="funcionamento">Funcionamento</TabsTrigger>
              </TabsList>
              
              <TabsContent value="sobre" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="prose prose-lg max-w-none space-y-6 text-foreground">
                      <p className="text-lg leading-relaxed">
                        A empresa Cosmora nasceu do olhar curioso de jovens visionários que acreditam que o espaço não deve ser apenas um destino de pesquisa — mas um novo lar para a humanidade.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        Somos movidos por uma ideia simples e poderosa: se o ser humano pode alcançar o infinito, ele também deve poder viver nele com conforto, dignidade e bem-estar.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        Nosso propósito é revolucionar a vida fora da Terra, criando ambientes capazes de acolher, inspirar e proteger. Buscamos unir ciência, design e emoção em um só projeto: uma estação espacial humanizada, pensada para o convívio a longo prazo, onde o pesquisador, o astronauta — e até suas famílias — possam viver em harmonia.
                      </p>
                      
                      <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Nossa Missão</h2>
                      
                      <p className="text-lg leading-relaxed">
                        Na Cosmora, nossa missão é transformar a experiência de viver e trabalhar no espaço, colocando o bem-estar humano no centro da inovação.
                        Acreditamos que cada pesquisador que se dedica a desvendar o universo merece mais do que um posto de trabalho em órbita — merece um lar seguro, saudável e acolhedor para si e para sua família.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        Por isso, desenvolvemos ambientes que unem ciência, tecnologia e emoção, pensados para preservar o equilíbrio físico, mental e social em missões prolongadas.
                        Cada detalhe da estação — das paredes imersivas às áreas de lazer, academias, escolas e centros médicos — foi criado para garantir que nossos habitantes possam viver bem, manter vínculos afetivos e se sentir em casa, mesmo entre as estrelas.
                      </p>
                      
                      <p className="text-lg leading-relaxed font-semibold">
                        Cuidar do bem-estar é cuidar do conhecimento.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        Porque o verdadeiro progresso humano não está apenas em chegar mais longe, mas em tornar cada jornada um espaço de vida plena — para o pesquisador e para todos que o acompanham.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="funcionamento" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="prose prose-lg max-w-none space-y-6 text-foreground">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Aspectos da Casa</h2>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Paredes Externas / Estrutura</h3>
                      
                      <p className="text-lg leading-relaxed">
                        A estrutura é projetada para ser modular e leve, inspirada em princípios de arquitetura espacial da NASA, como habitações infláveis e módulos rígidos pré-fabricados, que visam otimizar massa, volume e segurança estrutural.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        Os materiais estruturais preferenciais incluem ligas metálicas leves ou compósitos híbridos — como alumínio, ligas de alumínio-carbono ou compósitos sandwich — que combinam resistência mecânica com baixíssima densidade.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        Para proteção contra radiação e controle térmico, utiliza-se um recurso similar ao conceito de Water Wall da NASA, em que elementos de parede são recheados com água ou soluções líquidas que funcionam como escudo térmico e radiação, integrando também funções de reciclagem de água e tratamento atmosférico.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        Os sistemas de troca de calor (thermal control loops) são empregados em habitats reais da NASA, usando circuitos líquidos para dissipar calor através de radiadores conectados estruturalmente à carcaça ou backbone do habitat. Esses sistemas usam juntas rotativas ("rotary joints") ou conexões flexíveis para acomodar movimento ou pressurização variável.
                      </p>
                      
                      <p className="text-sm text-muted-foreground italic mt-4">
                        Nota: A aplicação exata de ligas alumínio-lítio-titânio ou a integração total com radiadores hidráulicos precisa de estudo específico para viabilidade, mas os princípios de laços térmicos líquidos e isolamento com recursos líquidos são validados.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer sources={sources} />
    </div>
  );
};

export default ExploreCosmora;
