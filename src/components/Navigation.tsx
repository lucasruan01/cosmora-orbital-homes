import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import cosmoraLogo from '@/assets/cosmora-logo.png';
import { User } from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [user, setUser] = useState<any>(null);
  const isSolid = scrolled || location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Calcula o progresso do scroll de 0 a 1 (de 0px a 300px)
      const progress = Math.min(window.scrollY / 300, 1);
      setScrollProgress(progress);
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

  // Interpola entre branco (255,255,255) e preto (0,0,0)
  const getLinkColor = () => {
    if (location.pathname !== '/') {
      return 'hsl(var(--muted-foreground))';
    }
    const r = Math.round(255 * (1 - scrollProgress));
    const g = Math.round(255 * (1 - scrollProgress));
    const b = Math.round(255 * (1 - scrollProgress));
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSolid
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
                className={`h-20 w-auto transition-all duration-300 group-hover:scale-110 ${isSolid ? 'brightness-0' : 'brightness-100'}`}
              />
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#residencias" style={{ color: getLinkColor() }} className="text-sm font-medium hover:text-primary transition-colors">
                Residences
              </a>
              <Link to="/tecnologia" style={{ color: getLinkColor() }} className="text-sm font-medium hover:text-primary transition-colors">
                Technology
              </Link>
              <a href="#vida" style={{ color: getLinkColor() }} className="text-sm font-medium hover:text-primary transition-colors">
                Life in Space
              </a>
              <Link to="/nossa-missao" style={{ color: getLinkColor() }} className="text-sm font-medium hover:text-primary transition-colors">
                Our Mission
              </Link>
              <Link to="/equipe" style={{ color: getLinkColor() }} className="text-sm font-medium hover:text-primary transition-colors">
                Team
              </Link>
              <a href="#galeria" style={{ color: getLinkColor() }} className="text-sm font-medium hover:text-primary transition-colors">
                Gallery
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Button 
                  variant="ghost" 
                  style={{ color: getLinkColor() }}
                  className="hidden md:inline-flex rounded-full hover:bg-secondary/50"
                >
                  <User className="h-4 w-4 mr-2" />
                  {user.user_metadata?.full_name || 'Profile'}
                </Button>
                <Button 
                  onClick={handleLogout}
                  variant="outline"
                  className={`rounded-full border-2 hover:bg-primary/10 ${isSolid ? 'border-primary/30 text-primary' : 'border-white/30 text-white'}`}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth?mode=login">
                  <Button 
                    variant="ghost" 
                    style={{ color: getLinkColor() }}
                    className="hidden md:inline-flex rounded-full hover:bg-secondary/50"
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
