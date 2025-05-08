
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Book from "./pages/Book";
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
          <Route path="/book" element={<Book />} />
          {/* These routes will be implemented in future iterations */}
          <Route path="/about" element={<NotFound />} />
          <Route path="/experiences" element={<NotFound />} />
          <Route path="/events" element={<NotFound />} />
          <Route path="/cafe" element={<NotFound />} />
          <Route path="/gallery" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/faq" element={<NotFound />} />
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
