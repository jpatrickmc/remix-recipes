import { createCookie } from "@remix-run/node";

if (typeof process.env.AUTH_COOKIE_SECRET !== "string") {
  throw new Error("AUTH_COOKIE_SECRET must be set in your .env file");
}

export const userIdCookie = createCookie("remix-recipes__userId", {
  secrets: [process.env.AUTH_COOKIE_SECRET],
  httpOnly: true,
  secure: true,
});
