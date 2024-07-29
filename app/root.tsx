import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
  useResolvedPath,
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { LinksFunction } from "@remix-run/node";
import styles from "~/tailwind.css?url";
import {
  DiscoverIcon,
  HomeIcon,
  RecipeBookIcon,
  SettingsIcon,
} from "./components/icons";
import classNames from "classnames";

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
      <body className="md:flex md:h-screen">
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
      <nav className="bg-primary text-white">
        <ul className="flex md:flex-col">
          <AppNavLink to={"/"}>
            <HomeIcon />
          </AppNavLink>
          <AppNavLink to={"discover"}>
            <DiscoverIcon />
          </AppNavLink>
          <AppNavLink to={"app/pantry"}>
            <RecipeBookIcon />
          </AppNavLink>
          <AppNavLink to={"settings"}>
            <SettingsIcon />
          </AppNavLink>
        </ul>
      </nav>
      <div className="p-4 w-full md:w-[calc(100%-4rem)]">
        <Outlet />
      </div>
    </>
  );
}

type AppNavLinkProps = {
  to: string;
  children: React.ReactNode;
};

function AppNavLink({ to, children }: AppNavLinkProps) {
  const navigation = useNavigation();
  const path = useResolvedPath(to);

  const isLoading =
    navigation.state === "loading" &&
    navigation.location.pathname === path.pathname;
  return (
    <li className="w-16">
      <NavLink to={to}>
        {({ isActive }) => (
          <div
            className={classNames(
              "py-4 text-center hover:bg-primary-light",
              isActive ? "bg-primary-light" : "",
              isLoading ? "animate-pulse bg-primary-light" : ""
            )}
          >
            {children}
          </div>
        )}
      </NavLink>
    </li>
  );
}
