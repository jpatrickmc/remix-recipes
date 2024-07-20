import { Link, useNavigation } from "@remix-run/react";

export default function ExamplePart2() {
  const navigation = useNavigation();
  const isLoading =
    navigation.state === "loading" && navigation.location.pathname === "/path";
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Example Part 2</h1>
      <p>This is the Example Part 2 page</p>
      <nav>
        <Link to="/discover">
          {isLoading ? "Going to Path..." : "Go to Path"}
        </Link>
      </nav>
    </div>
  );
}
