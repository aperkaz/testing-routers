import authentication from "@/authentication";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          authentication.fakeLogin();
          navigate({ to: "/" });
        }}
      >
        fake login!
      </button>
    </div>
  );
}
