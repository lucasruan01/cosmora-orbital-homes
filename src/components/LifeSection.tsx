import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dumbbell, Utensils, Briefcase, Heart } from 'lucide-react';

const amenities = [
  {
    icon: Dumbbell,
    title: 'Fitness Zero-G',
    description: 'Academia com equipamentos adaptados para gravidade artificial'
  },
  {
    icon: Utensils,
    title: 'Gastronomia Orbital',
    description: 'Restaurantes estrelados com chefs especializados em culinária espacial'
  },
  {
    icon: Briefcase,
    title: 'Espaços de Trabalho',
    description: 'Escritórios com a melhor vista do universo'
  },
  {
    icon: Heart,
    title: 'Centro Médico',
    description: 'Atendimento médico 24/7 com tecnologia de ponta'
  }
];

const LifeSection = () => {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {amenities.map((amenity, index) => (
            <Card
              key={index}
              className="p-6 rounded-2xl border-0 bg-card/50 backdrop-blur-sm hover-lift group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <amenity.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{amenity.title}</h3>
              <p className="text-sm text-muted-foreground">{amenity.description}</p>
            </Card>
          ))}
        </div>

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
