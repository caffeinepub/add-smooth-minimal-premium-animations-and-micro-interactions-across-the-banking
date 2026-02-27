import React from 'react';
import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { AccessibilityProvider } from './contexts/AccessibilityContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ExperienceProvider } from './contexts/ExperienceContext';
import { LifeStageProvider } from './contexts/LifeStageContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import NeoPage from './pages/NeoPage';
import ContactPage from './pages/ContactPage';

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
  path: '/',
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const neoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/neo',
  component: NeoPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
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

declare module '@tanstack/react-router' {
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
