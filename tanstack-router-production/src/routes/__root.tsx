import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="layout">
      <div className="layout-sidebar">
        <Link className="App-link" to="/">
          sidebar
        </Link>
        <button>logout</button>
      </div>
      <div className="layout-content">
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </div>
  ),
});
