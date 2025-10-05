import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Rocket, Users, Microscope } from "lucide-react";

export default function ProfileTest() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [essay, setEssay] = useState("");
  const [researchArea, setResearchArea] = useState("");
  const [domeSize, setDomeSize] = useState("medium");
  const [result, setResult] = useState<{ score: number; feedback: string } | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({
          title: "Autenticação necessária",
          description: "Faça login para realizar o teste de perfil",
          variant: "destructive",
        });
        navigate("/auth");
      } else {
        setUser(user);
      }
    };
    checkUser();
  }, [navigate, toast]);

  const characterCount = essay.length;
  const isValidLength = characterCount >= 500;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidLength) {
      toast({
        title: "Redação muito curta",
        description: "A redação deve ter no mínimo 500 caracteres",
        variant: "destructive",
      });
      return;
    }

    if (!researchArea.trim()) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, preencha sua área de atuação",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      // Chamar edge function para avaliar
      const { data: evaluation, error: evalError } = await supabase.functions.invoke(
        'evaluate-essay',
        {
          body: { essay, researchArea, domeSize }
        }
      );

      if (evalError) throw evalError;

      // Salvar no banco de dados
      const { error: insertError } = await supabase
        .from('profile_tests')
        .insert({
          user_id: user.id,
          essay,
          research_area: researchArea,
          dome_size: domeSize,
          character_count: characterCount,
          ai_score: evaluation.score,
          ai_feedback: evaluation.feedback,
        });

      if (insertError) throw insertError;

      setResult(evaluation);
      
      toast({
        title: "Teste enviado com sucesso!",
        description: `Sua pontuação: ${evaluation.score}/10`,
      });

    } catch (error: any) {
      console.error('Erro:', error);
      toast({
        title: "Erro ao enviar teste",
        description: error.message || "Tente novamente mais tarde",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getDomeDescription = (size: string) => {
    switch (size) {
      case 'small': return 'Pequeno (2 pessoas)';
      case 'medium': return 'Médio (5 pessoas)';
      case 'large': return 'Grande (10 pessoas)';
      default: return '';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Rocket className="w-8 h-8" />
              Teste de Perfil - Estação Espacial
            </CardTitle>
            <CardDescription>
              Avalie sua capacidade de participar da missão espacial. A IA avaliará sua redação de 0 a 10.
            </CardDescription>
          </CardHeader>
        </Card>

        {!result ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Microscope className="w-5 h-5" />
                  Redação (mínimo 500 caracteres)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="essay">
                    Por que você deve ir para a estação espacial?
                  </Label>
                  <Textarea
                    id="essay"
                    value={essay}
                    onChange={(e) => setEssay(e.target.value)}
                    placeholder="Escreva sua motivação, qualificações e contribuições que você pode trazer para a missão espacial..."
                    className="min-h-[250px] mt-2"
                    required
                  />
                  <div className="mt-2 text-sm">
                    <span className={isValidLength ? 'text-green-600' : 'text-red-600'}>
                      {characterCount} / 500 caracteres
                    </span>
                    {!isValidLength && (
                      <span className="ml-2 text-muted-foreground">
                        (faltam {500 - characterCount})
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Informações Adicionais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="researchArea">
                    Qual a sua área de atuação ou pesquisa?
                  </Label>
                  <Input
                    id="researchArea"
                    value={researchArea}
                    onChange={(e) => setResearchArea(e.target.value)}
                    placeholder="Ex: Biologia, Engenharia Aeroespacial, Medicina..."
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label className="flex items-center gap-2 mb-3">
                    <Users className="w-4 h-4" />
                    Quantas pessoas irão com você?
                  </Label>
                  <RadioGroup value={domeSize} onValueChange={setDomeSize}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="small" id="small" />
                      <Label htmlFor="small" className="cursor-pointer">
                        Domo Pequeno (2 pessoas)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medium" id="medium" />
                      <Label htmlFor="medium" className="cursor-pointer">
                        Domo Médio (5 pessoas)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="large" id="large" />
                      <Label htmlFor="large" className="cursor-pointer">
                        Domo Grande (10 pessoas)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full"
              disabled={loading || !isValidLength}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Avaliando com IA...
                </>
              ) : (
                'Enviar Teste para Avaliação'
              )}
            </Button>
          </form>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Resultado da Avaliação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center py-6">
                <div className={`text-6xl font-bold ${getScoreColor(result.score)}`}>
                  {result.score}/10
                </div>
                <p className="text-muted-foreground mt-2">Pontuação Final</p>
              </div>

              <div className="bg-secondary/20 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Feedback da IA:</h3>
                <p className="text-muted-foreground whitespace-pre-line">
                  {result.feedback}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <p className="text-sm text-muted-foreground">Área de Pesquisa</p>
                  <p className="font-medium">{researchArea}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tamanho do Domo</p>
                  <p className="font-medium">{getDomeDescription(domeSize)}</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button 
                  onClick={() => {
                    setResult(null);
                    setEssay("");
                    setResearchArea("");
                    setDomeSize("medium");
                  }}
                  variant="outline"
                  className="flex-1"
                >
                  Fazer Novo Teste
                </Button>
                <Button 
                  onClick={() => navigate("/")}
                  className="flex-1"
                >
                  Voltar ao Início
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
