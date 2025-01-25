import { SVGProps } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
  email: string;
  Phone: number;
};

export type ValidFieldNames = "email" | "Phone";

export type FormFieldProps = {
  type: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  Errors: FieldError | undefined;
  Invalid: boolean;
  valueAsNumber?: boolean;
  label: string;
  maxL: number;
  minL: number;
  icon: SVGProps<SVGSVGElement>;
};

export const RecoverySchema: ZodType<FormData> = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email is not valid",
    })
    .email({ message: "Input must be an valid email." })
    .trim()
    .includes("@", { message: "Email must include the @ symbol." }),
  Phone: z
    .number({
      required_error: "Phone number is required!",
      invalid_type_error: "Phone number must be a valid number!",
    })
    .int()
    .min(7000000000, { message: "Must be a valid number" })
    .max(9199999999, { message: "Must be a valid number" })
    .positive({ message: "Don't include the first zero." }),
});
