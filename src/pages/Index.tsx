import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TechnologySection from '@/components/TechnologySection';
import LifeSection from '@/components/LifeSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen smooth-scroll">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TechnologySection />
        <LifeSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
