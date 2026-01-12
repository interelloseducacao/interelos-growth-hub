import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Cursos from "./pages/Cursos";
import CursoDetalhe from "./pages/CursoDetalhe";
import Mentorias from "./pages/Mentorias";
import Consultoria from "./pages/Consultoria";
import Cases from "./pages/Cases";
import Conteudos from "./pages/Conteudos";
import ArtigoDetalhe from "./pages/ArtigoDetalhe";
import Eventos from "./pages/Eventos";
import EventoDetalhe from "./pages/EventoDetalhe";
import Contato from "./pages/Contato";
import AreaDoAluno from "./pages/AreaDoAluno";
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
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cursos/:slug" element={<CursoDetalhe />} />
          <Route path="/mentorias" element={<Mentorias />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/conteudos" element={<Conteudos />} />
          <Route path="/conteudos/:slug" element={<ArtigoDetalhe />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/eventos/:slug" element={<EventoDetalhe />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/area-do-aluno" element={<AreaDoAluno />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
