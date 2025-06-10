import { getUsers } from "@/http-sdk";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/users/")({
  loader: async () => await getUsers(),
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
          <li key={d.id}>
            <Link to="/users/$userId" params={{ userId: d.id }}>
              [{d.id}] "{d.name}" - age: {d.age}
            </Link>
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
