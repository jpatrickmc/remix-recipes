import { LoaderFunction } from "@remix-run/node";
import { useRouteError } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  throw new Error("Error in loader function.");
};

export default function ErrorInLoaderRoute() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>This conent will not be rendered due ot the loader error</h1>
      <p>This is the Error In Loader Route page,</p>
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
