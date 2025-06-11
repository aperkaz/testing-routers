import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/app/$chatId/chat")({
  component: Chat,
});

function Chat() {
  return (
    <div>
      <h1>App/Chat page: </h1>
      <Link className="App-link" to="/app/settings">
        To app/settings
      </Link>
    </div>
  );
}
