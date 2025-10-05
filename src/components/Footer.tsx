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
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface FooterProps {
  sources?: Array<{ title: string; url: string }>;
}

const Footer = ({ sources }: FooterProps) => {
  const [stakeholderEmail, setStakeholderEmail] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const { toast } = useToast();
  
  const handleNewsletterSubmit = async () => {
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      toast({
        title: 'Email inválido',
        description: 'Por favor, insira um email válido.',
        variant: 'destructive',
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: newsletterEmail }]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: 'Email já cadastrado',
            description: 'Este email já está inscrito na newsletter.',
            variant: 'destructive',
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: 'Inscrição realizada!',
          description: 'Você receberá nossas novidades em breve.',
        });
        setNewsletterEmail('');
      }
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Não foi possível completar a inscrição.',
        variant: 'destructive',
      });
    }
  };
  
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
              The first luxury residential space station. 
              Transforming dreams into orbital reality.
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
                  Become a Stakeholder
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Become a Stakeholder</DialogTitle>
                  <DialogDescription>
                    Leave your email to receive exclusive information about investing in Cosmora.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
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
                    Submit
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Our Mission</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Team</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Technology</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Receive news about the Cosmora project
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="rounded-full border-border/50 focus:border-primary transition-colors"
              />
              <Button 
                onClick={handleNewsletterSubmit}
                className="rounded-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shrink-0"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {sources && sources.length > 0 && (
          <div className="pt-8 border-t border-border/50 mb-8">
            <h3 className="font-semibold mb-4 text-sm">Sources and References</h3>
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
          <p>© 2026 Cosmora. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary hover:underline transition-all">Privacy</a>
            <a href="#" className="hover:text-primary hover:underline transition-all">Terms</a>
            <a href="#" className="hover:text-primary hover:underline transition-all">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
