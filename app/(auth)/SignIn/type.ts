import { SVGProps } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
  email: string;
  password: string;
};

export type ValidFieldNames = "email" | "password";

export type FormFieldProps = {
  type: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  Errors: FieldError | undefined;
  Invalid: boolean;
  label: string;
  icon: SVGProps<SVGSVGElement>;
};

export const SignInSchema: ZodType<FormData> = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email is not valid",
    })
    .email({ message: "Input must be an valid email." })
    .trim()
    .includes("@", { message: "Email must include the @ symbol." }),
  password: z
    .string({
      required_error: "Password is required.",
      invalid_type_error: "Password is invalid",
    })
    .trim()
    .min(9)
    .max(18),
});
