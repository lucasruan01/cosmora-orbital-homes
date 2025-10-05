import { Button } from '@/components/ui/button';
import { ArrowRight, Play, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog';

const HeroSection = () => {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
              onClick={() => navigate('/explore-cosmora')}
            >
              Explore Cosmora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 apple-smooth" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 text-white text-lg px-8 py-6 group apple-smooth"
              onClick={() => setIsVideoOpen(true)}
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

      {/* Video Dialog */}
      <Dialog open={isVideoOpen} onOpenChange={(open) => {
        setIsVideoOpen(open);
        if (!open) {
          setIsPlaying(false);
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }
      }}>
        <DialogContent className="max-w-5xl p-0 bg-black border-0">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
            <X className="h-6 w-6" />
          </DialogClose>
          <div className="relative">
            <video
              ref={videoRef}
              controls
              className="w-full h-auto rounded-lg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/videos/cosmora-video.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            {!isPlaying && (
              <button
                onClick={() => {
                  videoRef.current?.play();
                  setIsPlaying(true);
                }}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all group"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition-all group-hover:scale-110">
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </div>
              </button>
            )}
          </div>
        </DialogContent>
      </Dialog>

    </section>
  );
};

export default HeroSection;
