"use client";
import { useForm } from "react-hook-form";
import { FormField } from "./Formfield";
import { FormData } from "./type";
import { SignInSchema } from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function SignInForm() {
  const [SignInError, setSignInError] = useState<string>();
  const router = useRouter();
  //form management with useform
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(SignInSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {},
  });
  //onSubmit function here:
  const onSubmit = async (data: FormData) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    //Form result error here, check if credential is correct or results in error
    if (response?.error) {
      setSignInError(
        "Email or Password is wrong, please input correct credentials!"
      );
    } else {
      router.push("/");
      router.refresh();
    }
  };

  // const onError = (errors: FieldErrors<FormData>) => {
  //   console.error(errors);
  // };
  // Resetting form state with reset from useForm
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email: "", password: "" });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="w-full h-full m-0 p-0">
      <form
        method="post"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full m-auto p-3 flex flex-col items-center justify-between gap-4"
      >
        <div className="w-full h-fit border-b-[4px] border-b-neutral-800 p-2 rounded-tr-lg">
          <h1 className="text-left text-[30px] font-medium">Sign In</h1>
        </div>
        <FormField
          type="email"
          name="email"
          register={register}
          label="Email"
          Invalid={!isValid}
          Errors={errors.email}
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
          type="password"
          name="password"
          register={register}
          label="Password"
          Invalid={!isValid}
          Errors={errors.password}
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
        />
        <div className="flex flex-col w-[300px] h-fit ">
          <span
            className="text-white text-[15px] text-left cursor-pointer cursor"
            onClick={() => router.push("/Recovery")}
          >
            Forgot Password?
          </span>
          <div className=" mt-7 flex flex-col">
            <span className="text-red-900">{SignInError}</span>
            <button type="submit">
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
            <span className="text-center">
              Don't have an account?
              <span
                onClick={() => router.push("/SignUp")}
                className="cursor-pointer"
              >
                SignUp
              </span>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
