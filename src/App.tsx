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
import RecyclingDrone from "./pages/RecyclingDrone";
import CosmoraGarden from "./pages/CosmoraGarden";
import HeliumGenerator from "./pages/HeliumGenerator";
import CustomRoom from "./pages/CustomRoom";
import ProfileTest from "./pages/ProfileTest";
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
          <Route path="/recycling-drone" element={<RecyclingDrone />} />
          <Route path="/cosmora-garden" element={<CosmoraGarden />} />
          <Route path="/helium-generator" element={<HeliumGenerator />} />
          <Route path="/custom-room" element={<CustomRoom />} />
          <Route path="/teste-perfil" element={<ProfileTest />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
