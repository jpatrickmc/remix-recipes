import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  throw new Error("Error in Child loader function.");
};

export default function ChildRoute() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>This content will not be rendered due to the Child loader error</h1>
      <p>This is the Child Route page.</p>
    </div>
  );
}
