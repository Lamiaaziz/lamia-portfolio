import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AuraFit from "./pages/AuraFit";
import TravelTales from "./pages/TravelTales";
import VOKO from './pages/VOKO';
import WebDesign from './pages/WebDesign';
import Wayfinding from './pages/Wayfinding';

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/wayfinding"} component={Wayfinding} />
      <Route path={"/aurafit"} component={AuraFit} />
      <Route path={"/traveltales"} component={TravelTales} />
      <Route path={"/voko"} component={VOKO} />
      <Route path={"/webdesign"} component={WebDesign} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
