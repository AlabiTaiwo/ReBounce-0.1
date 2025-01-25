import { FieldError, UseFormRegister } from "react-hook-form"
import { ZodType, z } from "zod"
import {SVGProps} from "react"


export type FormType = "text" | "number" | "email" | "password"


export type ValidFieldNames =
    "email"
  | "FirstName"
  | "LastName"
  | "ProfileName"
  | "Age"
  | "Phone"
  | "password"
  | "ConfirmPassword"

export type FormData = {
    email: string,
    Name: string,
    Address: string,
    Number: number,
}


export type FormFieldProps = {
    type: FormType
    Name: ValidFieldNames
    register: UseFormRegister<FormData>
    Errors: FieldError | undefined,
    valueAsNumber?: boolean,
    Invalid: boolean,
    label: string,
    maxL: number,
    minL: number, 
    icon: SVGProps<SVGSVGElement>
}

export const NewCreatorSignUpSchema: ZodType<FormData> = z.object({
    FirstName: z.string().trim(),
    LastName: z.string().trim(),
    ProfileName: z.string(),
    Age: z.number(),
    CompanyName: z.string().trim(),
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

})


