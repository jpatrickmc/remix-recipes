import { z } from "zod";

type FieldErrors = Record<string, string>;

export function validateForm<T>(
  formData: FormData,
  zodSchema: z.Schema<T>,
  successFn: (data: T) => unknown,
  errorFn: (errors: FieldErrors) => unknown
) {
  const result = zodSchema.safeParse({
    shelfId: formData.get("shelfId"),
    shelfName: formData.get("shelfName"),
  });

  if (!result.success) {
    const errors: FieldErrors = {};
    result.error.errors.forEach((error) => {
      const path = error.path.join(".");
      errors[path] = error.message;
    });
    return errorFn(errors);
  }

  return successFn(result.data);
}
