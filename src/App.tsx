import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import GravidadeArtificial from "./pages/GravidadeArtificial";
import JanelasInteligentes from "./pages/JanelasInteligentes";
import ClimaPersonalizado from "./pages/ClimaPersonalizado";
import NossaMissao from "./pages/NossaMissao";
import Equipe from "./pages/Equipe";
import Tecnologia from "./pages/Tecnologia";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/gravidade-artificial" element={<GravidadeArtificial />} />
          <Route path="/janelas-inteligentes" element={<JanelasInteligentes />} />
          <Route path="/clima-personalizado" element={<ClimaPersonalizado />} />
          <Route path="/nossa-missao" element={<NossaMissao />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
