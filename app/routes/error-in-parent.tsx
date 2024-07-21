import { LoaderFunction } from "@remix-run/node";
import { Outlet, useRouteError } from "@remix-run/react";

export default function ErrorInParentRoute() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Parent Route</h1>
      <Outlet />
    </div>
  );
}

export function ErrorBoundary(): JSX.Element {
  const error = useRouteError();

  if (error instanceof Error) {
    return (
      <div className="bg-red-300 border-2 border-red-600 rounded-md p4">
        <h1>Oops, something went wrong in a nested route.</h1>
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
