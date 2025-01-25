"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { setTimeout } from "timers";

export default function AutoReturn() {
  const Router = useRouter();
  //   useEffect(
  //     setTimeout(() => Router.push("/SignIn"), 3000),
  //     [AutoReturn]
  //   );
  return (
    <button
      type="submit"
      className="w-fit h-fit px-[20px] py-[10px] bg-white text-black text-[16px] font-medium"
      onClick={() => Router.push("/SignIn")}
    >
      Go to signIn page.
    </button>
  );
}
