"use client";
import motion from "framer-motion";
import { SVGProps } from "react";
import { any } from "zod";

type Button = {
  Type: "submit" | "reset" | "button" | undefined;
  Holder: string;
  icon: SVGProps<SVGSVGElement>
  OnClick: (e: any) => void;
  Style: string
};

export const Button3: React.FC<Button> = ({ Type, Holder, icon, OnClick, Style }) => {
  return (
    <>
      <span className="flex w-fit h-fit items-center justify-between gap-[4px] m-auto p-[10px]">
        <span className="w-fit h-fit items-center justify-around p-0 m-0">
          <>{icon}</>
        </span>
        <button
        className={`w-fit h-fit mx-[10px] px-[10px] py-[2px] rounded-lg text-center shadow-xl ${Style}`}
          type={Type}
          onClick={OnClick}
      >
        {Holder}
      </button>
    </span>
      
    </>
  );
};
