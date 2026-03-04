import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import React from "react";
import Layout from "./components/Layout";
import { AccessibilityProvider } from "./contexts/AccessibilityContext";
import { ExperienceProvider } from "./contexts/ExperienceContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { LifeStageProvider } from "./contexts/LifeStageContext";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NeoPage from "./pages/NeoPage";
import ServicesPage from "./pages/ServicesPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const neoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/neo",
  component: NeoPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  aboutRoute,
  neoRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <QueryClientProvider client={queryClient}>
        <AccessibilityProvider>
          <LanguageProvider>
            <ExperienceProvider>
              <LifeStageProvider>
                <RouterProvider router={router} />
              </LifeStageProvider>
            </ExperienceProvider>
          </LanguageProvider>
        </AccessibilityProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
