import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import PrivacyPage from "@/pages/privacy";
import TermsPage from "@/pages/terms";
import CookiePage from "@/pages/cookies";
import AIDisclaimerPage from "@/pages/ai-disclaimer";
import AboutPage from "@/pages/about";
import OpportunitiesPage from "@/pages/opportunities";
import EarlyAccessPage from "@/pages/early-access";
import FounderPage from "@/pages/founder";
import PressPage from "@/pages/press";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/cookies" component={CookiePage} />
      <Route path="/ai-disclaimer" component={AIDisclaimerPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/opportunities" component={OpportunitiesPage} />
      <Route path="/early-access" component={EarlyAccessPage} />
      <Route path="/founder" component={FounderPage} />
      <Route path="/press" component={PressPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="jackofai-ui-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
