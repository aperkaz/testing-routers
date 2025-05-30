import { Link, Outlet } from "@router-mono-simple-lazy/router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export function RootComponent() {
  console.log("RootComponent");
  return (
    <>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Posts list
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
