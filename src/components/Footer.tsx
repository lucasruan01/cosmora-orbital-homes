import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';

interface FooterProps {
  sources?: Array<{ title: string; url: string }>;
}

const Footer = ({ sources }: FooterProps) => {
  const [stakeholderEmail, setStakeholderEmail] = useState('');
  
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
                className="rounded-full w-9 h-9 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full w-9 h-9 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full w-9 h-9 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full w-9 h-9 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full w-9 h-9 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Stakeholder</h3>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block text-left">
                  Seja um Stakeholder
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Seja um Stakeholder</DialogTitle>
                  <DialogDescription>
                    Deixe seu e-mail para receber informações exclusivas sobre investimento na Cosmora.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                  <Input 
                    type="email" 
                    placeholder="seu@email.com" 
                    value={stakeholderEmail}
                    onChange={(e) => setStakeholderEmail(e.target.value)}
                    className="rounded-full"
                  />
                  <Button 
                    className="rounded-full bg-primary hover:bg-primary/90"
                    onClick={() => {
                      // Handle stakeholder email submission
                      console.log('Stakeholder email:', stakeholderEmail);
                      setStakeholderEmail('');
                    }}
                  >
                    Enviar
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Sobre</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Nossa Missão</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Equipe</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Tecnologia</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Sustentabilidade</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Imprensa</a></li>
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
                className="rounded-full border-border/50 focus:border-primary transition-colors"
              />
              <Button className="rounded-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shrink-0">
                Inscrever
              </Button>
            </div>
          </div>
        </div>

        {sources && sources.length > 0 && (
          <div className="pt-8 border-t border-border/50 mb-8">
            <h3 className="font-semibold mb-4 text-sm">Fontes e Referências</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {sources.map((source, index) => (
                <li key={index}>
                  <a 
                    href={source.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline transition-all"
                  >
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Cosmora. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary hover:underline transition-all">Privacidade</a>
            <a href="#" className="hover:text-primary hover:underline transition-all">Termos</a>
            <a href="#" className="hover:text-primary hover:underline transition-all">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
