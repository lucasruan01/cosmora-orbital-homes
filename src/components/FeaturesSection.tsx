import { Card } from '@/components/ui/card';
import { Home, Cpu, Leaf, Shield } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Módulos Residenciais',
    description: 'Apartamentos de 45m² a 200m² com vistas panorâmicas da Terra e do cosmos.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Cpu,
    title: 'Tecnologia Avançada',
    description: 'Sistemas de IA integrados, conectividade 5G e automação residencial de última geração.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Energia solar orbital, reciclagem de ar e água com eficiência de 99%.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Segurança Total',
    description: 'Proteção contra radiação, sistemas redundantes e equipe médica 24/7.',
    gradient: 'from-orange-500 to-red-500'
  }
];

const FeaturesSection = () => {
  return (
    <section id="residencias" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          <h2 className="text-gradient-cosmic mb-6">
            Luxo Além da Imaginação
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada detalhe foi pensado para proporcionar uma experiência única de vida no espaço.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 rounded-3xl border-0 bg-card hover-lift cursor-pointer group relative overflow-hidden opacity-0 animate-slide-up"
              style={{
                animationDelay: `${400 + index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 apple-smooth rounded-3xl`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 apple-smooth`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
