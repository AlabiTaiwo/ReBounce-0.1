"use client";
import { useRouter } from "next/navigation";

export default function NavButton() {
  const Router = useRouter();
  const NavArrows = [
    {
      id: 1,
      Name: "Back",
      SVg: (
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
          className="stroke-black dark:stroke-white tabler-icon tabler-icon-arrow-left "
        >
          <path d="M5 12l14 0"></path>
          <path d="M5 12l6 6"></path>
          <path d="M5 12l6 -6"></path>
        </svg>
      ),
      function: () => Router.back(),
    },
    {
      id: 2,
      Name: "Forward",
      SVg: (
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
          className="stroke-black dark:stroke-white tabler-icon tabler-icon-arrow-right "
        >
          <path d="M5 12l14 0"></path>
          <path d="M13 18l6 -6"></path>
          <path d="M13 6l6 6"></path>
        </svg>
      ),
      function: () => Router.forward(),
    },
  ];
  return (
    <div className="w-[5%] h-[65%] rounded-lg flex items-center justify-around gap-2 ">
      {NavArrows.map((Nav) => (
        <button
          className="rounded-lg w-[50%] h-full p-[1px] m-0 place-items-center Glass"
          key={Nav.id}
          onClick={Nav.function}
        >
          <>{Nav.SVg}</>
        </button>
      ))}
    </div>
  );
}
