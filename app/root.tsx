import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { LinksFunction } from "@remix-run/node";
import styles from "~/tailwind.css?url";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Recipes" },
    { name: "description", content: "Welcome to the Remix Recipes app!" },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"discover"}>Discover</Link>
        <Link to={"app"}>App</Link>
        <Link to={"settings"}>Settings</Link>
        <Outlet />
      </nav>
    </>
  );
}
