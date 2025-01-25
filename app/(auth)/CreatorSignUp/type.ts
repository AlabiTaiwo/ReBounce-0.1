import { SVGProps } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
  email: string;
  Name: string;
  Phone: number;
  Address: string;
};

export type ValidFieldNames = "email" | "Name" | "Address" | "Phone";

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

export const CreatorSignUpSchema: ZodType<FormData> = z.object({
  Name: z
    .string({
      required_error: "Please input a valid Company name",
      invalid_type_error: "Company name is not valid",
    })
    .trim()
    .min(3, {
      message: "Company Name must be more than three(3) letters more.",
    })
    .max(19, {
      message: "Company Name must not be more than ninteen(19) letters long.",
    }),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email is not valid",
    })
    .email({ message: "Input must be an valid email." })
    .trim()
    .includes("@", { message: "Email must include the @ symbol." }),
  Address: z.string({
    required_error: "Address is required",
    invalid_type_error: "Address is invalid",
  }),
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
