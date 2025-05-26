import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import DomainB from "./domain-b";
import DomainC from "./domain-c";
import App from "./App";

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App
});

const domainBRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "domain-b",
  component: DomainB,
});

const domainCRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "domain-c",
  component: DomainC,
});

/**
 * must be manually constructed, will get huge pretty soon.
 * https://tanstack.com/router/latest/docs/framework/react/routing/code-based-routing
 */
const routeTree = rootRoute.addChildren([
  indexRoute,
  domainBRoute,
  domainCRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
