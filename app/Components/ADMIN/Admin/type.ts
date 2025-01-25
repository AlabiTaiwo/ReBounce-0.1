import { UseFormRegister, FieldError } from "react-hook-form";

export type FormData = {
  Title: string;
  Name: string;
  Date;
};

export type FormType = "text" | "number" | "email" | "image" | "datetime";

export type FormFieldProps = {
  type: FormType;
  register: UseFormRegister<FormData>;
};
