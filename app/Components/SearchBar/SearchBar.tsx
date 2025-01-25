"use client";
import { useForm, UseFormRegister } from "react-hook-form";
import { string, z, ZodType } from "zod";

type FormData = {
  SearchParam: string;
};
const SearchSchema: ZodType<FormData> = z.object({
  SearhParam: z.string().min(1).max(30),
});

const FormFieldProp = {
  type: string,
  register: useFormRegister<FormData>,
};
const FormField: React.FC<FormFieldProp> = ({}) => {
  return <input type="search" {...register} id="" />;
};
const SearchBar = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: {
      errors,
      isLoading,
      isSubmitSuccessful,
      isSubmitted,
      isSubmitting,
      isValid,
      isValidating,
    },
  } = useForm();

  const onSubmit = () => {};
  return (
    <form method="" onSubmit={handleSubmit}>
      <input type="search" id="" />
    </form>
  );
};
