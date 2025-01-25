"use client";
import motion from "framer-motion";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { MouseEventHandler, SVGProps } from "react";

type Button = {
  Type: "submit" | "reset" | "button" | undefined;
  Holder: string;
  OnClick: (e: any) => void;
  icon: SVGProps<SVGSVGElement>;
};

export const Button1: React.FC<Button> = ({ Type, Holder, OnClick, icon }) => {
  return (
    <>
      <span className="w-fit h-fit py-[1px] relative m-0 flex items-center justify-between rounded-lg  Button1 -z-40">
        <span className=" rounded-lg w-[30px] h-full flex items-center justify-center m-0 outline outline-[1px] outline-[rgba(255_255_255/0.121)] -z-30 ">
          <>{icon}</>
        </span>
        <button
          type={Type}
          className="w-full h-full px-2 m-auto bg-transparent rounded-lg text-white -z-10"
          onClick={OnClick}
        >
          <h3 className="font-medium ">{Holder}</h3>
        </button>
      </span>
    </>
  );
};
