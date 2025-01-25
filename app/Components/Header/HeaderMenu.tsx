"use client";
import { useSession, signOut } from "next-auth/react";
import { Button3 } from "../Button/Button3";
import HeaderNav from "./Navigation";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Open } from "../../Store/NavigationSlice";
import { SVGProps } from "react";

export const Menu = ({ Session }: any) => {
  const Navs = (state: any) => state.Nav;
  const { NavState } = useSelector(Navs);
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-fit h-fit ">
        <button
          type="button"
          className=" relative w-fit h-fit z-50"
          onClick={() => dispatch(Open())}
        >
          {NavState ? (
            <MenuSvg
              svg=<svg
                className="h-6 w-6 stroke-black dark:stroke-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                // stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            />
          ) : (
            <MenuSvg
              svg=<svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                // stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-menu-3 z-50 stroke-black dark:stroke-white"
              >
                <path d="M10 6h10"></path>
                <path d="M4 12h16"></path>
                <path d="M7 12h13"></path>
                <path d="M4 18h10"></path>
              </svg>
            />
          )}
        </button>
      </div>
    </>
  );
};

export const MenuSvg = ({ svg }: any) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.6,
          duration: 5,
        }}
        exit={{
          y: "100%",
        }}
        className="w-fit h-fit"
      >
        {svg}
      </motion.div>
    </AnimatePresence>
  );
};

export const MenuDisplay = ({ Session }: any) => {
  const Router = useRouter();
  const string = "string";
  const Photo = string[0];
  const Photo2 = string[1];
  if (Session?.user?.Id) {
    return (
      <div className="w-fit h-fit p-4 m-auto flex flex-col z-50">
        <span className="w-full h-full m-0 p-0 flex items-center justify-around">
          <span className="rounded-full border border-white w-fit h-fit m-auto flex items-center justify-around py-2 px-5">
            {/* {session.user.image ? (
              <Image src={{}} alt={``} />
            ) : (
              <h1 className="w-full rounded-full h-full text-white flex items-center justify-between font-normal text-[40px] text-center ">
                {Photo}
                {Photo2}
              </h1>
            )} */}
          </span>
        </span>
        <span className="w-full h-full z-30">
          <HeaderNav />
        </span>
        <span className="w-fit h-fit p-0 m-0">
          {Session?.user?.Access === "CREATOR" ? (
            <span className="w-full h-full border-t-[2px] border-white">
              <h2
                className="text-[15px] font-medium text-center cursor-pointer"
                onClick={() => Router.replace("/CreateEvents")}
              >
                Create ticket
              </h2>
            </span>
          ) : (
            ""
          )}
          <Button3
            Type="submit"
            OnClick={() => signOut()}
            Holder="Sign Out"
            Style="bg-red-800"
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
                className="tabler-icon tabler-icon-menu-3 "
              >
                <path d="M10 6h10"></path>
                <path d="M4 12h16"></path>
                <path d="M7 12h13"></path>
                <path d="M4 18h10"></path>
              </svg>
            }
          />
          {Session?.user?.Access === "USER" ? (
            <span className="w-full h-full border-t-[2px] border-white">
              <h2
                className="text-[15px] font-medium text-center cursor-pointer"
                onClick={() => Router.replace("/CreatorSignUp")}
              >
                Sell Tickets
              </h2>
            </span>
          ) : (
            ""
          )}
        </span>
      </div>
    );
  }
  return (
    <div className="w-full h-full m-0 p-0">
      <h2 className="m-auto text-center w-fit h-fit">NO DATA</h2>
    </div>
  );
};

export function NavArrow() {
  const NavArrows = {
    Back: {
      Name: "Back",
      SVg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="tabler-icon tabler-icon-arrow-left "
        >
          <path d="M5 12l14 0"></path>
          <path d="M5 12l6 6"></path>
          <path d="M5 12l6 -6"></path>
        </svg>
      ),
    },
    Forward: {
      Name: "Forward",
      SVg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="tabler-icon tabler-icon-arrow-right "
        >
          <path d="M5 12l14 0"></path>
          <path d="M13 18l6 -6"></path>
          <path d="M13 6l6 6"></path>
        </svg>
      ),
    },
    SignIn: {
      Name: "SignIn",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="tabler-icon tabler-icon-login-2 "
        >
          <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2"></path>
          <path d="M3 12h13l-3 -3"></path>
          <path d="M13 15l3 -3"></path>
        </svg>
      ),
    },
  };
  return (
    <div className="">
      <span className=""></span>
    </div>
  );
}

export default Menu;
