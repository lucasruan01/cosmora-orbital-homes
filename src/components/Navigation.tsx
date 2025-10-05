import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import cosmoraLogo from '@/assets/cosmora-logo.png';
import { User } from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check current user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

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
                src={cosmoraLogo} 
                alt="Cosmora" 
                className={`h-20 w-auto transition-all duration-300 group-hover:scale-110 ${scrolled ? 'brightness-0' : 'brightness-100'}`}
              />
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#residencias" className={`text-sm font-medium hover:text-primary transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>
                Residências
              </a>
              <Link to="/tecnologia" className={`text-sm font-medium hover:text-primary transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>
                Tecnologia
              </Link>
              <a href="#vida" className={`text-sm font-medium hover:text-primary transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>
                Vida no Espaço
              </a>
              <Link to="/nossa-missao" className={`text-sm font-medium hover:text-primary transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>
                Nossa Missão
              </Link>
              <Link to="/equipe" className={`text-sm font-medium hover:text-primary transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>
                Equipe
              </Link>
              <a href="#galeria" className={`text-sm font-medium hover:text-primary transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>
                Galeria
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Button 
                  variant="ghost" 
                  className={`hidden md:inline-flex rounded-full hover:bg-secondary/50 ${scrolled ? 'text-foreground' : 'text-white'}`}
                >
                  <User className="h-4 w-4 mr-2" />
                  {user.user_metadata?.full_name || 'Perfil'}
                </Button>
                <Button 
                  onClick={handleLogout}
                  variant="outline"
                  className="rounded-full border-2 border-primary/30 hover:bg-primary/10 text-primary"
                >
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth?mode=login">
                  <Button 
                    variant="ghost" 
                    className={`hidden md:inline-flex rounded-full hover:bg-secondary/50 ${scrolled ? 'text-foreground' : 'text-white'}`}
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/auth?mode=signup">
                  <Button className="rounded-full bg-primary hover:bg-primary/90 shadow-cosmic text-white">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
