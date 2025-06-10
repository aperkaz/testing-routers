import { getUsers } from "@/http-sdk";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/users/$userId")({
  loader: async ({ params }) => {
    const users = await getUsers();
    const match = users.filter((u) => u.id === params.userId);
    return match.length === 1 ? match[0] : null;
  },
  component: User,
});

function User() {
  const data = Route.useLoaderData();
  const { userId } = Route.useParams();

  if (!data)
    return (
      <div>
        <h1>User: "{userId}" not found 😭</h1>
      </div>
    );

  return (
    <div>
      <h1>
        User: "{data.name}" ({data.id})
      </h1>

      <p>Data loaded in router handler, filtering based on path-parm:</p>
      <br />
      <p>
        [{data.id}] "{data.name}" - age: {data.age}
      </p>
      <br />
      <Link className="App-link" to="/users">
        To users page
      </Link>
    </div>
  );
}
