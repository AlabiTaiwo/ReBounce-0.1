import { ReactNode, SVGProps } from "react";

type Button = {
  Type: "submit" | "reset" | "button" | undefined;
  Holder: {
    isSubmitting: boolean;
    Send: string;
    SignUp: string;
  };
  OnClick: any;
  icon: SVGProps<SVGSVGElement>;
};

export const Button2: React.FC<Button> = ({ Type, Holder, OnClick, icon }) => {
  return (
    <>
      <span className="w-[100px] h-fit p-[2px] m-auto bg-black flex items-center justify-between rounded-lg outline outline-[1px] outline-gray-400 after:content-[] after:bg-gradient-to-r after:from-[#ffffff28] after:to-[#ffffff1a] z-10 Button2">
        <span className="bg-black rounded-lg w-fit h-fit px-[4px] py-[2px] m-auto outline outline-[1px] outline-gray-500">
          <>{icon}</>
        </span>
        <button
          type={Type}
          className="w-fit h-fit px-2 m-auto bg-black rounded-lg text-white"
          onClick={(e) => {
            e.stopPropagation, OnClick;
          }}
        >
          <>{Holder}</>
        </button>
      </span>
    </>
  );
};
