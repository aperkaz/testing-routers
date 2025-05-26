import { Link } from "@tanstack/react-router";
import "./styles.css";

const Home = () => (
  <div className="App">
    <h1>Test app</h1>
    <Link to="/domain-b">to domain B</Link>
    <br />
    <Link to="/domain-c">to domain C</Link>
    <br />
    {/* <Link to="/fake-link">working type-checking! (fake route)</Link> */}
  </div>
);

export default function App() {
  return <Home />;
}
