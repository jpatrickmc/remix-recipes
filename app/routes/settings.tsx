import {
  json,
  Link,
  Outlet,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";

export const loader = () => {
  return json({ message: "Hello! From Settings loader function." });
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
      <p>Message: {data.message}</p>
      <Outlet />
    </div>
  );
}

export function ErrorBoundary(): JSX.Element {
  const error = useRouteError();

  if (error instanceof Error) {
    return (
      <div className="bg-red-300 border-2 border-red-600 rounded-md p4">
        <h1>Oops, something went wrong.</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="bg-red-300 border-2 border-red-600 rounded-md p4">
      An unexpected error occurred.
    </div>
  );
}
