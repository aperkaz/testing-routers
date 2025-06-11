import { createFileRoute, Link } from "@tanstack/react-router";
import "../MainLayout.css";

/**
 * '/' layout
 */
export const Route = createFileRoute("/_authenticated/")({
  component: MainLayout,
});

function MainLayout() {
  return (
    <div>
      <h1>Welcome authenticated user!</h1>
      <Link className="App-link" to="/users">
        To users page
      </Link>
      <br />
      <Link className="App-link" to="/about">
        To about page
      </Link>
      <br />
      <br />
      <Link
        className="App-link"
        to="/app/$chatId/chat"
        params={{ chatId: "1234" }}
      >
        To /app pages
      </Link>
    </div>
  );
}
