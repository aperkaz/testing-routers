import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/app/settings")({
  component: Settings,
});

function Settings() {
  return (
    <div>
      <h1>App/Settings page (URL Masked)</h1>
      <Link
        className="App-link"
        to="/app/$chatId/chat"
        params={{ chatId: "1234" }}
      >
        To app/chat
      </Link>
    </div>
  );
}
