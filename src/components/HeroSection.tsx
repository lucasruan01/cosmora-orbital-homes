import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[10s]"
        >
          <source src="/videos/nasa-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-white font-bold tracking-tighter animate-text-reveal opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            Cosmora
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light animate-fade-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            Descubra uma nova dimensão da vida. Cosmora é a primeira estação espacial 
            residencial de luxo, onde tecnologia encontra conforto a 400km de altitude.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
            <Button 
              size="lg" 
              className="rounded-full bg-primary hover:bg-primary/90 hover:scale-105 shadow-cosmic text-lg px-8 py-6 group apple-smooth"
            >
              Explore Cosmora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 apple-smooth" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 text-white text-lg px-8 py-6 group apple-smooth"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 apple-smooth" />
              Assista ao Vídeo
            </Button>
          </div>

          <div className="pt-12 flex items-center justify-center gap-8 text-white/80 text-sm animate-fade-in opacity-0 [animation-delay:1400ms] [animation-fill-mode:forwards]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Lançamento 2026</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div className="hidden sm:flex items-center gap-2">
              <span>400km de Altitude</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div className="hidden sm:flex items-center gap-2">
              <span>Gravidade 0.9G</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/80 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
