import { SVGProps } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
  email: string;
  FirstName: string;
  LastName: string;
  ProfileName: string;
  Phone: number;
  Age: number;
  password: string;
  ConfirmPassword: string;
};

export type ValidFieldNames =
  | "email"
  | "FirstName"
  | "LastName"
  | "ProfileName"
  | "Age"
  | "Phone"
  | "password"
  | "ConfirmPassword";

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

export const SignUpSchema: ZodType<FormData> = z
  .object({
    FirstName: z
      .string({
        required_error: "Please input a valid First name",
        invalid_type_error: "First name is not valid",
      })
      .trim()
      .min(3, {
        message: "First Name must be more than three(3) letters more.",
      })
      .max(19, {
        message: "First Name must not be more than ninteen(19) letters long.",
      }),
    LastName: z
      .string({
        required_error: "Please input a valid Last name",
        invalid_type_error: "Last name is not valid",
      })
      .trim()
      .min(3, {
        message: "First Name must be more than three(3) letters more.",
      })
      .max(19, {
        message: "First Name must not be more than ninteen(19) letters long.",
      }),
    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email is not valid",
      })
      .email({ message: "Input must be an valid email." })
      .trim()
      .includes("@", { message: "Email must include the @ symbol." }),
    ProfileName: z
      .string({
        required_error: "Username is required",
        invalid_type_error: "Username is invalid",
      })
      .trim()
      .min(5, { message: "Username must be at least five(5) letters long." })
      .max(15, {
        message: "Username must not be more than fifteen(15) letters long.",
      }),
    Age: z
      .number({
        required_error: "Age is required.",
        invalid_type_error: "Age is invalid",
      })
      .gte(18, { message: "You must be above 18 years." })
      .int()
      .lte(70, {
        message: "You're way too old don't you think...",
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
    password: z
      .string({
        required_error: "Password is required.",
        invalid_type_error: "Password is invalid",
      })
      .trim()
      .min(9)
      .max(18),
    ConfirmPassword: z
      .string({
        required_error: "Confirm password is required.",
        invalid_type_error: "Confirm password is invalid",
      })
      .trim()
      .min(9)
      .max(18),
  })
  .refine((data) => data.password === data.ConfirmPassword, {
    message: "passwords don not match.",
    path: ["ConfirmPassword"],
  });
