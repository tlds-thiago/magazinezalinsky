import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Reviews from "@/pages/reviews";
import Post from "@/pages/post";
import About from "@/pages/about";
import PrivacyPolicy from "@/pages/privacy-policy";
import Terms from "@/pages/terms";
import Cookies from "@/pages/cookies";
import Contact from "@/pages/contact";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CookieConsent from "@/components/layout/cookie-consent";
import { useAnalytics } from "@/hooks/use-analytics";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/post/:slug" component={Post} />
      <Route path="/sobre" component={About} />
      <Route path="/politica-privacidade" component={PrivacyPolicy} />
      <Route path="/termos-uso" component={Terms} />
      <Route path="/politica-cookies" component={Cookies} />
      <Route path="/contato" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
          <CookieConsent />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
