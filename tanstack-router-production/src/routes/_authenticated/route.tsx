import authentication from "@/authentication";
import {
  Link,
  Outlet,
  createFileRoute,
  redirect,
  useNavigate,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

/**
 * Layout route
 */
export const Route = createFileRoute("/_authenticated")({
  beforeLoad: () => {
    console.log("index beforeLoad");
    if (!authentication.isAuthenticated()) throw redirect({ to: "/login" });
  },
  component: () => {
    const navigate = useNavigate();
    return (
      <div className="layout">
        <div className="layout-sidebar">
          <Link className="App-link" to="/">
            sidebar
          </Link>
          <button
            onClick={() => {
              authentication.fakeLogout();
              navigate({ to: "/login" });
            }}
          >
            logout
          </button>
        </div>
        <div className="layout-content">
          <Outlet />
          <TanStackRouterDevtools />
        </div>
      </div>
    );
  },
});
