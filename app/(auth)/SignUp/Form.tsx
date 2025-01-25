"use client";
import { useForm } from "react-hook-form";
import { FormField } from "./FormField";
import { FormData } from "./type";
import { SignUpSchema } from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const SignUpForm: React.FC = () => {
  const router = useRouter();
  //Api Response Data here:
  const [ResponseData, setResponseData] = useState<any>();
  //UseForm is set here:
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isValid,
      isSubmitSuccessful,
      isSubmitting,
      isSubmitted,
      isValidating,
    },
  } = useForm<FormData>({
    resolver: zodResolver(SignUpSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {},
  });

  //Mutation Function here:
  const { mutate } = useMutation({
    mutationFn: (body: FormData) =>
      axios.post("http://localhost:3000/api/Query/Users", body),
  });

  //Reset Function using UseForm reset method Positioned here:
  const push = () => {
    if (ResponseData?.status == "201" && isSubmitSuccessful) {
      reset({
        email: "",
        password: "",
        FirstName: "",
        LastName: "",
        Phone: 0,
        ProfileName: "",
        ConfirmPassword: "",
        Age: 0,
      }),
        setTimeout(() => router.push("/SignIn"), 2000);
    }
  };

  // useEffect for resetting form state:
  useEffect(() => {
    if (ResponseData?.status == "201" && isSubmitSuccessful) {
      push();
    }
  }, [isSubmitSuccessful, ResponseData]);

  //OnSubmit function here:
  const onSubmit = async (data: FormData) => {
    mutate(data, {
      onSuccess(data) {
        setResponseData(data?.data);
      },
    });
  };
  //I can't recall what this is for perhaps it's removable or not i will check later...
  // const onError = (errors: FieldErrors<FormData>) => {
  //   console.error(errors);
  // };

  return (
    <form
      method="post"
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full m-auto flex flex-col justify-between Glass gap-7 mb-[40px] col-span-2 overflow-hidden rounded-r-lg"
    >
      <div className="w-full h-fit border-b-[4px] border-b-neutral-800 p-2 rounded-tr-lg">
        <h1 className="text-left text-[30px] font-medium">Sign Up</h1>
      </div>
      <div className="grid grid-flow-row grid-cols-2 w-full h-full grid-rows-[70px_70px_70px_70px] p-3 gap-x-4 gap-y-8 rounded-r-lg">
        <FormField
          type="text"
          name="FirstName"
          register={register}
          label="First Name"
          minL={3}
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
              } tabler-icon tabler-icon-id `}
            >
              <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
              <path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M15 8l2 0"></path>
              <path d="M15 12l2 0"></path>
              <path d="M7 16l10 0"></path>
            </svg>
          }
          Errors={errors.FirstName}
        />
        <FormField
          type="text"
          name="LastName"
          register={register}
          label="Last Name"
          minL={3}
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
              } tabler-icon tabler-icon-id `}
            >
              <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
              <path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M15 8l2 0"></path>
              <path d="M15 12l2 0"></path>
              <path d="M7 16l10 0"></path>
            </svg>
          }
          Errors={errors.LastName}
        />
        <FormField
          type="text"
          name="ProfileName"
          register={register}
          label="Username"
          minL={5}
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
              } tabler-icon tabler-icon-id-badge-2 `}
            >
              <path d="M7 12h3v4h-3z"></path>
              <path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6"></path>
              <path d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
              <path d="M14 16h2"></path>
              <path d="M14 12h4"></path>
            </svg>
          }
          Errors={errors.ProfileName}
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
        <FormField
          type="email"
          name="email"
          register={register}
          label="Email"
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
          Errors={errors.email}
        />
        <FormField
          type="number"
          name="Age"
          register={register}
          label="Age"
          minL={2}
          maxL={2}
          Invalid={!isValid}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${
                isValid
                  ? "dark:stroke-[rgba(147,255,138,0.4)] stroke-[rgba(147,255,138,0.4)]"
                  : "dark:stroke-[rgba(255,255,255,0.55)] stroke-black"
              } tabler-icon tabler-icon-calendar-check `}
            >
              <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"></path>
              <path d="M16 3v4"></path>
              <path d="M8 3v4"></path>
              <path d="M4 11h16"></path>
              <path d="M15 19l2 2l4 -4"></path>
            </svg>
          }
          Errors={errors.Age}
          valueAsNumber
        />
        <FormField
          type="password"
          name="password"
          register={register}
          label="Password"
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
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${
                isValid
                  ? "dark:stroke-[rgba(147,255,138,0.4)] stroke-[rgba(147,255,138,0.4)]"
                  : "dark:stroke-[rgba(255,255,255,0.55)] stroke-black"
              } tabler-icon tabler-icon-lock-code `}
            >
              <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2"></path>
              <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
              <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
              <path d="M20 21l2 -2l-2 -2"></path>
              <path d="M17 17l-2 2l2 2"></path>
            </svg>
          }
          Errors={errors.password}
        />
        <FormField
          type="password"
          name="ConfirmPassword"
          register={register}
          label="Confirm Password"
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
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${
                isValid
                  ? "dark:stroke-[rgba(147,255,138,0.4)] stroke-[rgba(147,255,138,0.4)]"
                  : "dark:stroke-[rgba(255,255,255,0.55)] stroke-black"
              } tabler-icon tabler-icon-lock-code `}
            >
              <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2"></path>
              <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
              <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
              <path d="M20 21l2 -2l-2 -2"></path>
              <path d="M17 17l-2 2l2 2"></path>
            </svg>
          }
          Errors={errors.ConfirmPassword}
        />
        <div className="flex flex-col gap-1 items-center justify-between w-full h-fit col-span-2">
          <span
            className={`w-full h-fit m-auto ${
              ResponseData?.status === 201 ? "text-green-900" : "text-red-700"
            } text-[13px] font-medium`}
          >
            {ResponseData?.message}
          </span>
          <button
            type="submit"
            className="w-fit h-fit px-[30px] py-[5px] rounded-lg dark:bg-black bg-white  shadow-sm text-[14px] font-medium shadow-purple-900"
          >
            {isSubmitting ? "Sending..." : "SignUp"}
          </button>
          {ResponseData?.status === 201 ? (
            <span className="text-green-900 text-[16px] font-medium">
              {ResponseData?.message}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </form>
  );
};

//  {
//    !isSubmitted ? (
//      <button
//        type="submit"
//        className="w-fit h-fit px-[10px] py-[2px] rounded-lg outline oultine-[1px] outline-white"
//      >
//        {isSubmitting ? "Sending..." : "SignUp"}
//      </button>
//    ) : (
//      // <Button2 Type="submit" Holder={{isSubmitting ? Send : SignUp}} />
//      <h2 className="">
//        User created successfully, redirecting to signin page...
//      </h2>
//    );
//  }

export default SignUpForm;
