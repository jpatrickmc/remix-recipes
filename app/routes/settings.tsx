import { json, Link, Outlet, useLoaderData } from "@remix-run/react";

export const loader = () => {
  return json({ message: "This message is from the server loader function!" });
};

export default function Settings() {
  const data = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Settings</h1>
      <p>This is the Settings page</p>

      <nav>
        <Link to="app">App</Link>
        <Link to="profile">Profile</Link>
      </nav>
      <Outlet />
      <br />
      <p>{data.message}</p>
    </div>
  );
}
