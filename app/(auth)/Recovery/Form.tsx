"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "./FormField";
import { useForm } from "react-hook-form";
import { RecoverySchema } from "./type";
import { FormData } from "./type";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function RecoveryForm() {
  const [Response, setResponse] = useState<any>();

  //Form Management using useForm
  const {
    register,
    reset,
    handleSubmit,
    formState: {
      errors,
      isValid,
      isSubmitSuccessful,
      isSubmitted,
      isSubmitting,
    },
  } = useForm<FormData>({
    //ZodResolver and useForm Options here:
    resolver: zodResolver(RecoverySchema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {},
  });
  // mutation function here:
  const { mutate } = useMutation({
    mutationFn: (body: FormData) =>
      axios.post("http://localhost:3000/api/Recovery", body),
  });
  //onSubmit function here:
  const onSubmit = async (data: FormData) => {
    mutate(data, {
      onSuccess(data) {
        setResponse(data?.data);
      },
    });
  };
  return (
    <div>
      <form method="post" className="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Forgot Password</h1>
          <FormField
            type="email"
            name="email"
            register={register}
            label="email"
            Errors={errors.email}
            minL={10}
            maxL={18}
            Invalid={!isValid}
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
          />

          <FormField
            type="number"
            name="Phone"
            register={register}
            label="Phone Number"
            minL={10}
            maxL={18}
            Invalid={!isValid}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="transparent"
                stroke="none"
                strokeWidth="2"
                className={`${
                  isValid
                    ? "dark:stroke-[rgba(147,255,138,0.4)] stroke-[rgba(147,255,138,0.4)]"
                    : "dark:stroke-[rgba(255,255,255,0.55)] stroke-black"
                } tabler-icon tabler-icon-phone-filled `}
              >
                <path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"></path>
              </svg>
            }
            Errors={errors.Phone}
            valueAsNumber
          />
          <div className="flex flex-col">
            <span
              className={`${
                Response?.status === 200 ? "text-green-900" : "text-red-900"
              } `}
            >
              {Response?.message}
            </span>
            <button type="submit" className="text-left">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
