import { lazy, Suspense, type ComponentType } from "react";
import { Route, Router as WouterRouter, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import type { SiteLang } from "./site/i18n";
import SiteHome from "./site/pages/Home";
// Shared case-study styles stay global and in this exact order so every page
// looks the same as when all pages were bundled together.
import "./site/aurafit.css";
import "./site/voko.css";
import "./site/webdesign.css";
import "./site/wayfinding.css";
import "./site/visualdesign.css";

// Each page other than Home is loaded only when someone opens it, so a visit
// downloads just the page being viewed.
const SiteExperience = lazy(() => import("./site/pages/Experience"));
const SiteCaseStudies = lazy(() => import("./site/pages/CaseStudies"));
const SiteTechnoFarm = lazy(() => import("./site/pages/TechnoFarm"));
const SiteSdm = lazy(() => import("./site/pages/Sdm"));
const SiteAuraFit = lazy(() => import("./site/pages/AuraFitCase"));
const SiteTravelTales = lazy(() => import("./site/pages/TravelTalesCase"));
const SiteVoko = lazy(() => import("./site/pages/VokoCase"));
const SiteWebDesign = lazy(() => import("./site/pages/WebDesignCase"));
const SiteVisualDesign = lazy(() => import("./site/pages/VisualDesignCase"));
const SiteWayfinding = lazy(() => import("./site/pages/WayfindingCase"));
const SiteNotFound = lazy(() => import("./site/pages/NotFoundPage"));

const pages: [string, ComponentType<{ lang: SiteLang }>][] = [
  ["/", SiteHome],
  ["/experience", SiteExperience],
  ["/case-studies", SiteCaseStudies],
  ["/technofarm", SiteTechnoFarm],
  ["/sdm", SiteSdm],
  ["/aurafit", SiteAuraFit],
  ["/traveltales", SiteTravelTales],
  ["/voko", SiteVoko],
  ["/webdesign", SiteWebDesign],
  ["/visualdesign", SiteVisualDesign],
  ["/wayfinding", SiteWayfinding],
];

function Router() {
  return (
    <Suspense fallback={null}>
      <Switch>
        {pages.flatMap(([path, Page]) => [
          <Route key={path} path={path}>
            {() => <Page lang="en" />}
          </Route>,
          <Route key={"ar" + path} path={path === "/" ? "/ar" : "/ar" + path}>
            {() => <Page lang="ar" />}
          </Route>,
        ])}
        <Route component={SiteNotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      {import.meta.env.VITE_HASH_ROUTER === "1" ? (
        <WouterRouter hook={useHashLocation}>
          <Router />
        </WouterRouter>
      ) : (
        <Router />
      )}
    </ErrorBoundary>
  );
}

export default App;
