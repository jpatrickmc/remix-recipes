import { Link } from "@remix-run/react";

export default function ExampleRoute() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Example Route</h1>
      <p>This is the Example Route page</p>
      <nav>
        <Link to="/discover" reloadDocument>
          Go to Path
        </Link>
      </nav>
    </div>
  );
}
