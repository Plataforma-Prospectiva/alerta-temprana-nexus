
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Territorios } from "./pages/Territorios";
import { FuentesDatos } from "./pages/FuentesDatos";
import { Indicadores } from "./pages/Indicadores";
import { Mapa } from "./pages/Mapa";
import { Alertas } from "./pages/Alertas";
import { Reportes } from "./pages/Reportes";
import { Configuracion } from "./pages/Configuracion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="territorios" element={<Territorios />} />
            <Route path="fuentes" element={<FuentesDatos />} />
            <Route path="indicadores" element={<Indicadores />} />
            <Route path="mapa" element={<Mapa />} />
            <Route path="alertas" element={<Alertas />} />
            <Route path="reportes" element={<Reportes />} />
            <Route path="configuracion" element={<Configuracion />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
