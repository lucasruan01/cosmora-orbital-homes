import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { essay, researchArea, domeSize } = await req.json();
    
    if (!essay || essay.length < 500) {
      return new Response(
        JSON.stringify({ error: 'A redação deve ter no mínimo 500 caracteres' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY não configurada');
    }

    const systemPrompt = `Você é um avaliador especializado em selecionar candidatos para uma estação espacial.
Avalie a redação do candidato considerando:
1. Motivação e comprometimento (0-3 pontos)
2. Relevância da área de pesquisa para missões espaciais (0-3 pontos)
3. Clareza e coerência da escrita (0-2 pontos)
4. Adequação do tamanho do grupo escolhido (0-2 pontos)

Retorne APENAS um JSON no formato:
{
  "score": <número de 0 a 10>,
  "feedback": "<feedback detalhado em português sobre os pontos fortes e áreas de melhoria>"
}`;

    const userPrompt = `Redação: "${essay}"
Área de Pesquisa: ${researchArea}
Tamanho do Domo: ${domeSize === 'small' ? 'Pequeno (2 pessoas)' : domeSize === 'medium' ? 'Médio (5 pessoas)' : 'Grande (10 pessoas)'}

Avalie este candidato e forneça um score de 0 a 10 e feedback construtivo.`;

    console.log('Enviando para Lovable AI...');
    
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Erro da API:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Limite de requisições excedido. Tente novamente mais tarde.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'Créditos insuficientes. Adicione créditos ao seu workspace Lovable.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      throw new Error(`Erro da API: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;
    
    console.log('Resposta da IA:', aiResponse);
    
    // Parse JSON da resposta
    let evaluation;
    try {
      // Remove markdown code blocks se existirem
      const cleanedResponse = aiResponse.replace(/```json\n?|\n?```/g, '').trim();
      evaluation = JSON.parse(cleanedResponse);
    } catch (parseError) {
      console.error('Erro ao fazer parse da resposta:', aiResponse);
      // Fallback: tentar extrair score e feedback manualmente
      const scoreMatch = aiResponse.match(/"score":\s*(\d+)/);
      const feedbackMatch = aiResponse.match(/"feedback":\s*"([^"]*)"/);
      
      evaluation = {
        score: scoreMatch ? parseInt(scoreMatch[1]) : 5,
        feedback: feedbackMatch ? feedbackMatch[1] : 'Avaliação processada com sucesso.'
      };
    }

    // Validar score
    if (typeof evaluation.score !== 'number' || evaluation.score < 0 || evaluation.score > 10) {
      evaluation.score = Math.max(0, Math.min(10, Math.round(evaluation.score || 5)));
    }

    return new Response(
      JSON.stringify(evaluation),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Erro na função:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erro ao processar avaliação';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
