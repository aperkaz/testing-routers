import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div>
      <h1>About page</h1>
      <Link className="App-link" to="/">
        To index page
      </Link>
    </div>
  );
}
