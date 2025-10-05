import { Card } from '@/components/ui/card';
import lab1 from '@/assets/lab-1.png';
import lab2 from '@/assets/lab-2.png';
import lab3 from '@/assets/lab-3.png';
import lab4 from '@/assets/lab-4.png';

const images = [
  { src: lab1, alt: 'Laboratório de Pesquisa Cosmora' },
  { src: lab2, alt: 'Vista da Terra do Módulo Principal' },
  { src: lab3, alt: 'Centro de Ciências Avançadas' },
  { src: lab4, alt: 'Equipe de Pesquisa em Ação' }
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-text-reveal opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          <h2 className="text-gradient-cosmic mb-6">
            Dentro da Cosmora
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore os espaços onde ciência e luxo se encontram a 400 quilômetros 
            acima da Terra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="p-2 rounded-3xl border-0 bg-gradient-to-br from-primary/5 to-purple-500/5 hover-lift overflow-hidden group cursor-pointer opacity-0 animate-slide-up"
              style={{
                animationDelay: `${500 + index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="rounded-2xl overflow-hidden relative">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-auto apple-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 apple-smooth flex items-end p-6">
                  <p className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 apple-smooth">{image.alt}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
