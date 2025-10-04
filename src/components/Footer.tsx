import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <img 
              src="/src/assets/cosmora-logo.png" 
              alt="Cosmora" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              A primeira estação espacial residencial de luxo. 
              Transformando sonhos em realidade orbital.
            </p>
            <div className="flex gap-3 pt-2">
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full w-9 h-9 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full w-9 h-9 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full w-9 h-9 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full w-9 h-9 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full w-9 h-9 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Residências</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Módulos Studio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Módulos Deluxe</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Módulos Penthouse</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Plantas e Preços</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Sobre</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Nossa Missão</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Equipe</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tecnologia</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustentabilidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Imprensa</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Fique por Dentro</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Receba novidades sobre o projeto Cosmora
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Seu e-mail" 
                className="rounded-full border-border/50"
              />
              <Button className="rounded-full bg-primary hover:bg-primary/90 shrink-0">
                Inscrever
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Cosmora. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
