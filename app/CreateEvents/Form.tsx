import { useForm } from "react-hook-form";
import { FormField } from "./FormField";
import { FormData } from "./Type";
import { EventSchema } from "./Type";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const EventForm: React.FC = () => {
  const [Response, setResponse] = useState<any>();
  //UseForm is set here:
  const {
    formState: {
      errors,
      isSubmitSuccessful,
      isSubmitting,
      isSubmitted,
      isValid,
      isValidating,
    },
    reset,
    register,
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(EventSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {},
  });

  const { mutate } = useMutation({
    mutationFn: (body: FormData) =>
      axios.post("http://localhost:3000/api/CreateNewEvent", body),
  });
  const onSubmit = async (data: FormData) => {
    mutate(data, {
      onSuccess(data) {
        setResponse(data?.data);
      },
    });
  };

  return (
    <div className="">
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Event Name"
          name="Name"
          register={register}
          MinL={2}
          MaxL={30}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${
                isValid
                  ? "dark:stroke-[rgba(147,255,138,0.4)] stroke-[rgba(147,255,138,0.4)]"
                  : "dark:stroke-[rgba(255,255,255,0.55)] stroke-black"
              } tabler-icon tabler-icon-mail-opened `}
            >
              <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
              <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"></path>
              <path d="M3 19l6 -6"></path>
              <path d="M15 13l6 6"></path>
            </svg>
          }
          Invalid={!isValid}
          type="text"
          Errors={errors.Name}
        />
        {/* <FormField
          label="Event Poster"
          name="Image"
          register={register}
          MinL={}
          MaxL={}
          icon={}
          Invalid={}
          type={}
          Errors={errors.About}
        />
        <FormField
          label="About Event"
          name="About"
          register={register}
          MinL={}
          MaxL={}
          icon={}
          Invalid={}
          type={}
          Errors={errors.Time}
        />
        <FormField
          label="Date"
          name="Date"
          register={register}
          MinL={}
          MaxL={}
          icon={}
          Invalid={}
          type={}
          Errors={errors.Image}
        />
        <FormField
          label="Time"
          name="Time"
          register={register}
          MinL={}
          MaxL={}
          icon={}
          Invalid={}
          type={}
          Errors={errors.Date}
        />
        <FormField
          label="Venue"
          name="Venue"
          register={register}
          MinL={}
          MaxL={}
          icon={}
          Invalid={}
          type={}
          Errors={errors.Price}
        />
        <FormField
          label="Performers"
          name="Performers"
          register={register}
          MinL={}
          MaxL={}
          icon={}
          Invalid={}
          type={}
          Errors={errors.Venue}
        />
        <FormField
          label="Age Range"
          name="AgeRange"
          register={register}
          MinL={}
          MaxL={}
          icon={}
          Invalid={}
          type={}
          Errors={errors.Performers}
        /> */}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
