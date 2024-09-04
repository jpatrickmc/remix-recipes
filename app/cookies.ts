import { createCookie } from "@remix-run/node";

if (typeof process.env.AUTH_COOKIE_SECRET !== "string") {
  throw new Error("AUTH_COOKIE_SECRET must be set in your .env file");
}

export const sessionCookie = createCookie("remix-recipes__session", {
  secrets: [process.env.AUTH_COOKIE_SECRET],
  httpOnly: true,
  secure: true,
});
