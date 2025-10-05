import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dumbbell, Utensils, Briefcase, Heart, ArrowRight } from 'lucide-react';

const amenitiesData = [
  {
    id: 'fitness',
    icon: Dumbbell,
    title: 'Fitness Zero-G',
    description: 'Academia com equipamentos adaptados para gravidade artificial',
    subtitle: 'Mantenha-se em forma no espaço',
    detailedDescription: 'Nossa academia orbital oferece equipamentos de última geração adaptados para ambientes de baixa gravidade. Com sistemas de resistência avançados e treinos personalizados, você mantém sua saúde física em perfeito estado enquanto aprecia a vista do cosmos.',
    features: [
      'Equipamentos de resistência adaptados à gravidade artificial',
      'Instrutores especializados em condicionamento espacial',
      'Programas personalizados de exercícios',
      'Vista panorâmica do espaço durante o treino'
    ]
  },
  {
    id: 'gastronomy',
    icon: Utensils,
    title: 'Gastronomia Orbital',
    description: 'Restaurantes estrelados com chefs especializados em culinária espacial',
    subtitle: 'Sabores que desafiam a gravidade',
    detailedDescription: 'Experimente uma culinária revolucionária criada por chefs renomados especialmente treinados para cozinhar em ambiente espacial. Cada refeição é uma experiência gastronômica única, combinando técnicas terrestres com inovações orbitais.',
    features: [
      'Chefs premiados especializados em culinária espacial',
      'Ingredientes frescos cultivados em fazendas orbitais',
      'Experiências gastronômicas em gravidade zero',
      'Menus personalizados para necessidades nutricionais espaciais'
    ]
  },
  {
    id: 'workspace',
    icon: Briefcase,
    title: 'Espaços de Trabalho',
    description: 'Escritórios com a melhor vista do universo',
    subtitle: 'Produtividade elevada ao próximo nível',
    detailedDescription: 'Trabalhe em escritórios de última geração com vista privilegiada da Terra e do espaço sideral. Equipados com tecnologia de ponta e conectividade ultra-rápida, nossos espaços de trabalho proporcionam o ambiente perfeito para sua produtividade.',
    features: [
      'Internet de altíssima velocidade via satélite',
      'Salas de reunião com holografia avançada',
      'Estações de trabalho ergonômicas adaptadas',
      'Vista panorâmica da Terra e do cosmos'
    ]
  },
  {
    id: 'medical',
    icon: Heart,
    title: 'Centro Médico',
    description: 'Atendimento médico 24/7 com tecnologia de ponta',
    subtitle: 'Sua saúde é nossa prioridade',
    detailedDescription: 'Centro médico de última geração com equipe especializada em medicina espacial. Monitoramento constante, tecnologia avançada de diagnóstico e tratamentos inovadores garantem seu bem-estar a qualquer momento.',
    features: [
      'Equipe médica especializada em medicina espacial',
      'Monitoramento de saúde em tempo real',
      'Tecnologia de diagnóstico de última geração',
      'Protocolos avançados de emergência espacial'
    ]
  }
];

const LifeSection = () => {
  const [selectedAmenity, setSelectedAmenity] = useState(amenitiesData[0]);

  return (
    <section id="vida" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(221,83%,53%,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gradient-cosmic mb-6">
            Vida em Órbita
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tudo que você precisa para viver, trabalhar e prosperar entre as estrelas.
          </p>
        </div>

        {/* Interactive Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {amenitiesData.map((amenity) => (
            <Card
              key={amenity.id}
              onClick={() => setSelectedAmenity(amenity)}
              className={`p-6 rounded-2xl border-2 backdrop-blur-sm hover-lift group cursor-pointer transition-all duration-300 ${
                selectedAmenity.id === amenity.id 
                  ? 'border-primary bg-primary/10 scale-105 shadow-[0_0_30px_rgba(59,130,246,0.3)]' 
                  : 'border-transparent bg-card/50 hover:border-primary/50'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-4 transition-all duration-300 ${
                selectedAmenity.id === amenity.id ? 'scale-110' : 'group-hover:scale-110'
              }`}>
                <amenity.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{amenity.title}</h3>
              <p className="text-sm text-muted-foreground">{amenity.description}</p>
            </Card>
          ))}
        </div>

        {/* Detailed Content Section */}
        <div className="mb-16">
          <Card className="overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-12 flex flex-col justify-center animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                    <selectedAmenity.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-4xl font-bold mb-3 text-gradient-cosmic">
                  {selectedAmenity.title}
                </h3>
                
                <p className="text-xl text-muted-foreground mb-6">
                  {selectedAmenity.subtitle}
                </p>
                
                <p className="text-base leading-relaxed mb-8">
                  {selectedAmenity.detailedDescription}
                </p>

                <div className="space-y-3">
                  {selectedAmenity.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <ArrowRight className="w-5 h-5 text-primary mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Side */}
              <div className="relative bg-gradient-to-br from-primary/20 to-purple-500/20 p-12 flex items-center justify-center min-h-[500px]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(221,83%,53%,0.2),transparent_70%)]" />
                <div className="relative z-10 text-center animate-fade-in">
                  <selectedAmenity.icon className="w-48 h-48 text-primary/30 mx-auto mb-6 animate-pulse" />
                  <p className="text-lg font-medium text-muted-foreground">
                    {selectedAmenity.title}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="p-12 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-4">
            Pronto para uma Nova Vida?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende uma visita virtual e descubra como seria viver na estação espacial 
            residencial mais avançada já criada.
          </p>
          <Button 
            size="lg" 
            className="rounded-full bg-primary hover:bg-primary/90 hover:scale-105 shadow-cosmic text-lg px-10 py-6 transition-all duration-300"
          >
            Agendar Tour Virtual
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default LifeSection;
