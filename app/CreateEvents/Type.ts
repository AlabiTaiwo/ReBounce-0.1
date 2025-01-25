import { SVGProps } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { ZodType, z } from "zod";

export type ValidFieldNames =
  | "Name"
  | "Image"
  | "AgeRange"
  | "Venue"
  | "Date"
  | "Time"
  | "About"
  | "Price"
  | "Quantity"
  | "type"
  | "Performers";

export type FormData = {
  Name: string;
  About: String;
  Image: string;
  Time: number;
  Date: Date;
  Venue: string;
  AgeRange: number;
  Price: number;
  Quantity: number;
  type: string;
  Performers: string;
};

export type EventTicket = {
  Price: number;
  Quantity: number;
};

export type Event = {
  Name: string;
  Tickets: EventTicket[];
};

export type FormFieldProps = {
  type: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  Errors: FieldError | undefined;
  Invalid: boolean;
  label: string;
  icon: SVGProps<SVGSVGElement>;
  valueAsNumber?: boolean;
  MinL: number;
  MaxL: number;
};

export const EventSchema: ZodType<FormData> = z.object({
  Name: z.string({ required_error: "Name input is required." }).trim(),
  About: z.string({ required_error: "About input is required." }),
  Price: z.number({ required_error: "Price input is required." }),
  Quantity: z.number({ required_error: "quantity input is required." }),
  Venue: z.string({ required_error: "Venue input is required." }).trim(),
  Date: z.date({ required_error: "Date input is required." }),
  Time: z.number({ required_error: "Time input is required." }),
  Image: z.string({ required_error: "Please upload an image." }),
  AgeRange: z.number({ required_error: "An age range is required." }),
  type: z.string(),
  Performers: z.string(),
});
