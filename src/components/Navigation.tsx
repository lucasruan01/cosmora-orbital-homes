import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="#" className="flex items-center gap-3 group">
              <img 
                src="/src/assets/cosmora-logo.png" 
                alt="Cosmora" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
              />
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#residencias" className={`text-sm font-medium hover:text-primary transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>
                Residências
              </a>
              <a href="#tecnologia" className={`text-sm font-medium hover:text-primary transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>
                Tecnologia
              </a>
              <a href="#vida" className={`text-sm font-medium hover:text-primary transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>
                Vida no Espaço
              </a>
              <a href="#galeria" className={`text-sm font-medium hover:text-primary transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>
                Galeria
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className={`hidden md:inline-flex rounded-full hover:bg-secondary/50 ${scrolled ? 'text-foreground' : 'text-white'}`}
            >
              Agendar Visita
            </Button>
            <Button className="rounded-full bg-primary hover:bg-primary/90 shadow-cosmic text-white">
              Reservar Agora
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
