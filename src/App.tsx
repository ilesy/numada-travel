<Route path="/destinations/:islandSlug" 
element={<DestinationDetail />} /> "@/components/ui/toaster";
 "@/components/ui/sonner";
 "@/components/ui/tooltip";
 "@tanstack/react-query";
 "react-router-dom";
 "@/contexts/FavoritesContext";
"./pages/Index";
 "./pages/Destinations";
"./pages/DestinationDetail";
 "./pages/Guides";
 "./pages/Resources";
 "./pages/Quiz";
"./pages/Favorites";
 "./pages/About";
 "./pages/TravelStack";
 "./pages/Concierge";
 "./pages/Blog";
 "./pages/BlogPost";
 "./pages/Reviews";
 "./pages/ReviewDetail";
"./pages/Auth";
 "./pages/Insider";
 "./pages/Community";
/pages/NotFound";

 QueryClient();

 = () => (
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
