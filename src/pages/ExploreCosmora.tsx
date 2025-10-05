import { Youtube } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const ExploreCosmora = () => {
  useScrollToTop();


  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Explore Cosmora
            </h1>
            
            <Tabs defaultValue="sobre" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="sobre">About Cosmora</TabsTrigger>
                <TabsTrigger value="funcionamento">How It Works</TabsTrigger>
              </TabsList>
              
              <TabsContent value="sobre" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="prose prose-lg max-w-none space-y-6 text-foreground">
                      <p className="text-lg leading-relaxed">
                        The Cosmora company was born from the curious gaze of young visionaries who believe that space should not be just a research destination — but a new home for humanity.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        We are driven by a simple yet powerful idea: if humans can reach infinity, they should also be able to live in it with comfort, dignity and well-being.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        Our purpose is to revolutionize life beyond Earth, creating environments capable of welcoming, inspiring and protecting. We seek to unite science, design and emotion in a single project: a humanized space station, designed for long-term living, where researchers, astronauts — and even their families — can live in harmony.
                      </p>
                      
                      <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Our Mission</h2>
                      
                      <p className="text-lg leading-relaxed">
                        At Cosmora, our mission is to transform the experience of living and working in space, placing human well-being at the center of innovation.
                        We believe that every researcher dedicated to unveiling the universe deserves more than a workplace in orbit — they deserve a safe, healthy and welcoming home for themselves and their family.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        That's why we develop environments that unite science, technology and emotion, designed to preserve physical, mental and social balance during extended missions.
                        Every detail of the station — from immersive walls to leisure areas, gyms, schools and medical centers — was created to ensure that our inhabitants can live well, maintain emotional bonds and feel at home, even among the stars.
                      </p>
                      
                      <p className="text-lg leading-relaxed font-semibold">
                        Caring for well-being is caring for knowledge.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        Because true human progress is not just about going further, but making each journey a space of full life — for the researcher and everyone who accompanies them.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="funcionamento" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="prose prose-lg max-w-none space-y-6 text-foreground">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">House Aspects</h2>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">External Walls / Structure</h3>
                      
                      <p className="text-lg leading-relaxed">
                        The structure is designed to be modular and lightweight, inspired by NASA space architecture principles, such as inflatable habitats and pre-fabricated rigid modules, which aim to optimize mass, volume and structural safety.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        Preferred structural materials include lightweight metal alloys or hybrid composites — such as aluminum, aluminum-carbon alloys or sandwich composites — that combine mechanical strength with very low density.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        For radiation protection and thermal control, a resource similar to NASA's Water Wall concept is used, where wall elements are filled with water or liquid solutions that function as thermal and radiation shields, also integrating water recycling and atmospheric treatment functions.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        Heat exchange systems (thermal control loops) are employed in real NASA habitats, using liquid circuits to dissipate heat through radiators connected structurally to the habitat carcass or backbone. These systems use rotary joints or flexible connections to accommodate movement or variable pressurization.
                      </p>
                      
                      <p className="text-sm text-muted-foreground italic mt-4">
                        Note: The exact application of aluminum-lithium-titanium alloys or total integration with hydraulic radiators requires specific feasibility study, but the principles of liquid thermal loops and insulation with liquid resources are validated.
                      </p>
                      
                      <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border/50">
                        <h4 className="text-lg font-semibold mb-3 text-foreground">Explanatory Video</h4>
                        <a 
                          href="https://www.youtube.com/watch?v=bVzppWSIFU0" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                        >
                          <Youtube className="w-5 h-5" />
                          Omniprocessor
                        </a>
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-border/50">
                        <h4 className="text-lg font-semibold mb-4 text-foreground">Sources and References</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>
                            <a 
                              href="https://www.nasa.gov" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-primary hover:underline transition-all"
                            >
                              NASA - Space Habitats
                            </a>
                          </li>
                          <li>
                            <a 
                              href="https://technology.nasa.gov" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-primary hover:underline transition-all"
                            >
                              NASA Technology
                            </a>
                          </li>
                          <li>
                            <a 
                              href="https://techport.nasa.gov" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-primary hover:underline transition-all"
                            >
                              NASA Techport
                            </a>
                          </li>
                          <li>
                            <a 
                              href="https://www.youtube.com/watch?v=bVzppWSIFU0" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-primary hover:underline transition-all"
                            >
                              Omniprocessor
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExploreCosmora;
