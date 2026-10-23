import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import Index from "./pages/Index";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import Resources from "./pages/Resources";
import Quiz from "./pages/Quiz";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import TravelStack from "./pages/TravelStack";
import Concierge from "./pages/Concierge";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Reviews from "./pages/Reviews";
import ReviewDetail from "./pages/ReviewDetail";
import Auth from "./pages/Auth";
import Insider from "./pages/Insider";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <FavoritesProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:slug" element={<DestinationDetail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
            <Route path="/travel-stack" element={<TravelStack />} />
            <Route path="/concierge" element={<Concierge />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reviews/:slug" element={<ReviewDetail />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/insider" element={<Insider />} />
            <Route path="/community" element={<Community />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </FavoritesProvider>
  </QueryClientProvider>
);

export default App;
