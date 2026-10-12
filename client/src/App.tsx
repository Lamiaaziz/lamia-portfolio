import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteNotFound from "./site/pages/NotFoundPage";
import { Route, Router as WouterRouter, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import SiteHome from "./site/pages/Home";
import SiteExperience from "./site/pages/Experience";
import SiteCaseStudies from "./site/pages/CaseStudies";
import SiteTechnoFarm from "./site/pages/TechnoFarm";
import SiteSdm from "./site/pages/Sdm";
import SiteAuraFit from "./site/pages/AuraFitCase";
import SiteTravelTales from "./site/pages/TravelTalesCase";
import SiteVoko from "./site/pages/VokoCase";
import SiteWebDesign from "./site/pages/WebDesignCase";
import SiteWayfinding from "./site/pages/WayfindingCase";
import SiteVisualDesign from "./site/pages/VisualDesignCase";

function Router() {
  return (
    <Switch>
      <Route path={"/"}>{() => <SiteHome lang="en" />}</Route>
      <Route path={"/ar"}>{() => <SiteHome lang="ar" />}</Route>
      <Route path={"/experience"}>{() => <SiteExperience lang="en" />}</Route>
      <Route path={"/ar/experience"}>{() => <SiteExperience lang="ar" />}</Route>
      <Route path={"/case-studies"}>{() => <SiteCaseStudies lang="en" />}</Route>
      <Route path={"/ar/case-studies"}>{() => <SiteCaseStudies lang="ar" />}</Route>
      <Route path={"/technofarm"}>{() => <SiteTechnoFarm lang="en" />}</Route>
      <Route path={"/ar/technofarm"}>{() => <SiteTechnoFarm lang="ar" />}</Route>
      <Route path={"/sdm"}>{() => <SiteSdm lang="en" />}</Route>
      <Route path={"/ar/sdm"}>{() => <SiteSdm lang="ar" />}</Route>
      <Route path={"/aurafit"}>{() => <SiteAuraFit lang="en" />}</Route>
      <Route path={"/ar/aurafit"}>{() => <SiteAuraFit lang="ar" />}</Route>
      <Route path={"/traveltales"}>{() => <SiteTravelTales lang="en" />}</Route>
      <Route path={"/ar/traveltales"}>{() => <SiteTravelTales lang="ar" />}</Route>
      <Route path={"/voko"}>{() => <SiteVoko lang="en" />}</Route>
      <Route path={"/ar/voko"}>{() => <SiteVoko lang="ar" />}</Route>
      <Route path={"/webdesign"}>{() => <SiteWebDesign lang="en" />}</Route>
      <Route path={"/ar/webdesign"}>{() => <SiteWebDesign lang="ar" />}</Route>
      <Route path={"/visualdesign"}>{() => <SiteVisualDesign lang="en" />}</Route>
      <Route path={"/ar/visualdesign"}>{() => <SiteVisualDesign lang="ar" />}</Route>
      <Route path={"/wayfinding"}>{() => <SiteWayfinding lang="en" />}</Route>
      <Route path={"/ar/wayfinding"}>{() => <SiteWayfinding lang="ar" />}</Route>
      <Route component={SiteNotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          {import.meta.env.VITE_HASH_ROUTER === "1" ? (
            <WouterRouter hook={useHashLocation}>
              <Router />
            </WouterRouter>
          ) : (
            <Router />
          )}
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
