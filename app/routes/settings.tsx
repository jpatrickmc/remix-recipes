import { Link, Outlet } from "@remix-run/react";

export default function Settings() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Settings</h1>
      <p>This is the Settings page</p>
      <nav>
        <Link to="app">App</Link>
        <Link to="profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
}
