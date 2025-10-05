import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Tecnologia = () => {
  useScrollToTop();
  const navigate = useNavigate();
  
  const header = useScrollReveal();
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();
  const section3 = useScrollReveal();
  const section4 = useScrollReveal();
  const section5 = useScrollReveal();
  const section6 = useScrollReveal();

  return (
    <div className="min-h-screen smooth-scroll bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            className="mb-8 group"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </Button>

          {/* Header */}
          <div 
            ref={header.ref}
            className={`text-center mb-16 transition-all duration-1000 ${
              header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mx-auto mb-6">
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-gradient-cosmic">
              Technology
            </h1>
            <p className="text-2xl text-muted-foreground">
              Cutting-Edge Innovation for Life in Space
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Intro */}
            <Card 
              ref={section1.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-lg leading-relaxed">
                At Cosmora, we use cutting-edge technology to transform space into a comfortable, safe and sustainable home.
              </p>
            </Card>

            {/* Artificial Gravity & Engineering */}
            <Card 
              ref={section2.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Artificial Gravity & Engineering</h2>
              <p className="text-lg leading-relaxed">
                We create controlled artificial gravity by rotation, based on principles validated by NASA, ensuring comfort for the human body. Our stations are designed with 3D structural modeling and physical simulations, testing proportions and experiences in microgravity before each construction.
              </p>
            </Card>

            {/* Smart Materials */}
            <Card 
              ref={section3.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Smart Materials</h2>
              <p className="text-lg leading-relaxed">
                Electrochromic glass, thermoactive coatings and advanced materials ensure protection, thermal comfort and energy efficiency, based on NASA space window studies.
              </p>
            </Card>

            {/* Energy & Sustainability */}
            <Card 
              ref={section4.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section4.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Energy & Sustainability</h2>
              <p className="text-lg leading-relaxed">
                The station uses concepts of clean fusion with Helium-3 and intelligent recycling systems for air, water and nutrients, monitored by IoT sensors, to keep everything sustainable and efficient.
              </p>
            </Card>

            {/* Design and Human Experience */}
            <Card 
              ref={section5.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section5.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Design and Human Experience</h2>
              <p className="text-lg leading-relaxed">
                Holographic interfaces, responsive environments and gesture and voice controls make life on the station immersive and intuitive. Each space is designed with emotional design, 3D modeling and realistic texturing, ensuring visual comfort and functionality.
              </p>
            </Card>

            {/* Digital Infrastructure */}
            <Card 
              ref={section6.ref}
              className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                section6.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient-cosmic">Digital Infrastructure & Scientific Purpose</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Our website and internal systems use React, Node.js and modern databases, integrating station modules, sensors and users in real time. Hosting and deployment are done on GODADDY REGISTRY, with versioning on GitHub, ensuring stability and constant innovation.
                </p>
                <p>
                  We transform real NASA research into an accessible and inspiring experience, showing what it would be like to live, explore and evolve beyond Earth.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tecnologia;
