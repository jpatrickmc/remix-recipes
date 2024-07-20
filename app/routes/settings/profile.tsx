import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

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
