import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData, useRouteError } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  return json({ message: "Yo! From Profile loader function." });
};
export default function Profile() {
  const data = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Profile</h1>
      <p>This is the Profile Settings page</p>
      <p>Message: {data.message}</p>
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
