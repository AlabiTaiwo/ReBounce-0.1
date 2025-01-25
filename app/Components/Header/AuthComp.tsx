"use client";
import { useRouter } from "next/navigation";

const AuthComp = () => {
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      // stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="tabler-icon tabler-icon-login-2 stroke-black dark:stroke-white"
    >
      <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2"></path>
      <path d="M3 12h13l-3 -3"></path>
      <path d="M13 15l3 -3"></path>
    </svg>
  );
  const router = useRouter();
  return (
    <div className="w-[10%] h-full m-auto p-0 flex place-items-center items-center justify-around">
      <button
        type="submit"
        onClick={() => {
          router.replace('/SignIn');
        }}
        className="w-fit h-fit p-[7px] place-items-center rounded-full Glass m-auto"
      >
        <>{svg}</>
      </button>
    </div>
  );
};

export default AuthComp;
