import { ActionFunction, json } from "@remix-run/node";
import classNames from "classnames";
import { z } from "zod";
import { ErrorMessage, PrimaryButton } from "~/components/forms";
import { validateForm } from "./utils/validation";
import { useActionData } from "@remix-run/react";

export function headers() {
  return {
    "Set-Cookie": "remix-recipes-cookie=mValue",
  };
}

const loginSchema = z.object({
  email: z.string().email(),
});

export const action: ActionFunction = async ({ request }) => {
  const formdata = await request.formData();

  return validateForm(
    formdata,
    loginSchema,
    ({ email }) => {},
    (errors) => json({ errors, email: formdata.get("email") }, { status: 400 })
  );
};

export default function Login() {
  const actionData = useActionData();
  return (
    <div className="text-center mt-3">
      <h1 className="text-3xl mb-8">Remix Recipes</h1>
      <form method="post" className="mx-auto md:w-1/3">
        <div className="text-left pb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            defaultValue={actionData?.email}
            className={classNames(
              "w-full outline-none border-2 border-gray-200",
              "focus:border-primary rounded-md p-2"
            )}
          />
          <ErrorMessage>{actionData?.errors?.email}</ErrorMessage>
        </div>
        <PrimaryButton className="w-1/2 mx-auto">Log In</PrimaryButton>
      </form>
    </div>
  );
}
