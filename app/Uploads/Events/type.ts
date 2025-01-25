import { FieldError, UseFormRegister } from "react-hook-form";
import { ZodType, z } from "zod";

export type FormData = {
  Name: string 
  Location: string
  Date: Date
  Time: TimeRanges
  Image: URL | string
  

}