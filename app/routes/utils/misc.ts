import React, { useEffect, useLayoutEffect, useState } from "react";
import { useMatches } from "@remix-run/react";

export function classNames(...names: Array<string | undefined>) {
  const className = names.reduce(
    (acc, name) => (name ? `${acc} ${name}` : acc),
    ""
  );

  return className || "";
}

export function useMatchesData(id: string) {
  const matches = useMatches();
  const route = React.useMemo(
    () => matches.find((route) => route.id === id),
    [matches, id]
  );
  return route?.data;
}

export function isRunningOnServer() {
  return typeof window === "undefined";
}

export const useServerLayoutEffect = isRunningOnServer()
  ? useEffect
  : useLayoutEffect;

// react useEffect does not run on the server render
// if the effect runs, we know the component is hydrated and running
// on the client
let hasHydrated = false;
export function useIsHydrated() {
  const [isHydrated, setIsHydrated] = useState(hasHydrated);

  useEffect(() => {
    hasHydrated = true;
    setIsHydrated(true);
  }, []);

  return isHydrated;
}
