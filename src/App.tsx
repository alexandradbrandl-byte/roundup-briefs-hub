import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapPage from "./pages/MapPage";
import FeedPage from "./pages/FeedPage";
import ThemenPage from "./pages/ThemenPage";
import NewsletterPage from "./pages/NewsletterPage";
import UeberUnsPage from "./pages/UeberUnsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MapPage />} />
          <Route path="/de" element={<FeedPage country="de" countryName="Deutschland" />} />
          <Route path="/at" element={<FeedPage country="at" countryName="Österreich" />} />
          <Route path="/ch" element={<FeedPage country="ch" countryName="Schweiz" />} />
          <Route path="/themen" element={<ThemenPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/ueber-uns" element={<UeberUnsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
