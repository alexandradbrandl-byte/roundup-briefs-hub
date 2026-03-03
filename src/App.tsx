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
          <Route path="/de" element={<FeedPage country="Germany"       countryName="Deutschland" />} />
          <Route path="/at" element={<FeedPage country="Austria"       countryName={"\u00d6sterreich"} />} />
          <Route path="/ch" element={<FeedPage country="Switzerland"   countryName="Schweiz" />} />
          <Route path="/es" element={<FeedPage country="Spain"         countryName="Spanien" />} />
          <Route path="/it" element={<FeedPage country="Italy"         countryName="Italien" />} />
          <Route path="/us" element={<FeedPage country="United States" countryName="USA" />} />
          <Route path="/cn" element={<FeedPage country="China"         countryName="China" />} />
          <Route path="/ug" element={<FeedPage country="Uganda"        countryName="Uganda" />} />
          <Route path="/fi" element={<FeedPage country="Finland"       countryName="Finnland" />} />
          <Route path="/tr" element={<FeedPage country="Turkey"        countryName={"T\u00fcrkei"} />} />
          <Route path="/ir" element={<FeedPage country="Iran"          countryName="Iran" />} />
          <Route path="/za" element={<FeedPage country="South Africa"  countryName={"S\u00fcdafrika"} />} />
          <Route path="/in" element={<FeedPage country="India"         countryName="Indien" />} />
          <Route path="/themen"     element={<ThemenPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/ueber-uns"  element={<UeberUnsPage />} />
          <Route path="*"           element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
