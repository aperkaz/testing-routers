import { createFileRoute, Link } from "@tanstack/react-router";
import "./MainLayout.css";

export const Route = createFileRoute("/")({
  component: MainLayout,
});

function MainLayout() {
  return (
    <div>
      <h1>Index page</h1>
      <Link className="App-link" to="/users">
        To users page
      </Link>
      <br />
      <Link className="App-link" to="/about">
        To about page
      </Link>
    </div>
  );
}
