import { setTimeout } from "timers/promises";
import { auth } from "../../../auth";
import SignInForm from "./Form";
import { redirect } from "next/navigation";
import { Providers } from "./Providers";
export default async function SignIn() {
  const session = await auth();
  if (session) {
    return (
      (
        <div className="">
          <h2>You're already signed In, let's send you back in a minute!</h2>
        </div>
      ) && (await setTimeout(9000000, redirect("/")))
    );
  }
  return (
    <div className="w-full h-full p-8">
      <div className="w-[30%] h-full m-auto flex flex-col items-center justify-between gap-2">
        <SignInForm />
        <Providers />
      </div>
    </div>
  );
}

