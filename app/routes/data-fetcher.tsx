import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  // mock data
  const data = { message: "Server says Hello!!" };

  // create a new Response object with a custom status code and header
  const response = new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Custom-Header": "Custom-Value",
    },
  });
  return response;
};

export default function DataFetcher() {
  const data = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Data Fetcher</h1>
      <p>This is the Data Fetcher page</p>
      <br />
      <p>{data.message}</p>
    </div>
  );
}
