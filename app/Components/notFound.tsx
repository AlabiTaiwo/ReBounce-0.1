"use client";
import { IconCaretLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

type button = {
  placeHolder: string;
};

export const NotFoundBtn: React.FC<button> = ({ placeHolder }) => {
  const Router = useRouter();
  return (
    <button
      type="submit"
      onClick={() => Router.back()}
      className="flex items-center justify-between gap-[5px] w-fit h-fit m-auto px-[30px] py-[10px] bg-white border-[1px] font-medium text-black border-black"
    >
      <IconCaretLeft size={30} color="black" />
      {placeHolder}
    </button>
  );
};
