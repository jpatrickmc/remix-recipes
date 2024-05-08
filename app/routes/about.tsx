import { Link, Outlet } from "@remix-run/react";

export default function About() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>About</h1>
      <p>This is the About page</p>
      <nav>
        <Link to="team">Team</Link>
        <br />
        <Link to="history">History</Link>
      </nav>
      <Outlet />
    </div>
  );
}
