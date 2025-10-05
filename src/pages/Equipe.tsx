import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const teamMembers = [
  {
    name: "Thalles",
    role: "the Experience Engineer",
    description: "With technical precision and artistic sensitivity, Thalles transforms codes and pixels into emotion. He creates the intelligent systems and interfaces that bring Cosmora to life, uniting technology and aesthetics in perfect synergy. Every detail carries his touch — that of someone who understands that true innovation happens when science and art breathe together."
  },
  {
    name: "Débora",
    role: "the Visionary of Forms",
    description: "With a gaze that sees beyond the obvious, Débora transforms ideas into visual experiences that breathe purpose. She gives face and soul to Cosmora, designing the future with strokes that unite aesthetics, emotion and meaning. Under her hands, each Domus becomes more than a space — it becomes a fragment of the inhabitable infinite."
  },
  {
    name: "Lucas",
    role: "the Structure Architect",
    description: "Lucas builds the foundations that sustain our mission. His analytical and organized mind transforms concepts into solid, scalable and coherent systems. He connects every part of Cosmora, ensuring everything works in perfect harmony — from idea to actual operation."
  },
  {
    name: "Carol",
    role: "the Restless Mind of Discovery",
    description: "Curious by nature and driven by the relentless search for the new, Carol is Cosmora's compass. She researches, documents and connects worlds, revealing paths where before there were only questions. Her energy keeps innovation alive — always human, always conscious."
  },
  {
    name: "Lívia",
    role: "the Guardian of Order and Word",
    description: "Between data, stories and meanings, Lívia finds harmony. Her writing stitches collective thought and brings clarity to complexity. She translates Cosmora's universe into understandable narratives, transforming technique into poetry and structure into inspiration."
  }
];

const Equipe = () => {
  useScrollToTop();
  const navigate = useNavigate();
  
  const header = useScrollReveal();

  return (
    <div className="min-h-screen smooth-scroll bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
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
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-gradient-cosmic">
              Team
            </h1>
            <p className="text-2xl text-muted-foreground">
              The Minds Behind Cosmora
            </p>
          </div>

          {/* Team Members */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {teamMembers.map((member, index) => {
              const cardReveal = useScrollReveal(0.1, index * 100);
              return (
                <Card 
                  key={member.name}
                  ref={cardReveal.ref}
                  className={`p-8 rounded-3xl border-0 bg-gradient-to-br from-card to-muted/30 transition-all duration-1000 ${
                    cardReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2 text-gradient-cosmic">
                    {member.name}
                  </h3>
                  <h4 className="text-xl text-primary mb-4">
                    {member.role}
                  </h4>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {member.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Equipe;
