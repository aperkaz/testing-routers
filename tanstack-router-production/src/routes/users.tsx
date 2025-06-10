import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/users")({
  loader: async () => {
    // mock api call
    return [
      { name: "Bob", age: 24 },
      { name: "Sara", age: 33 },
      { name: "Jeff", age: 99 },
    ];
  },
  component: Users,
});

function Users() {
  const data = Route.useLoaderData();

  return (
    <div>
      <h1>Users page</h1>

      <p>Data loaded in router handler:</p>
      <ul>
        {data.map((d) => (
          <li>
            "{d.name}", age: {d.age}
          </li>
        ))}
      </ul>
      <br />

      <Link className="App-link" to="/">
        To index page
      </Link>
    </div>
  );
}
