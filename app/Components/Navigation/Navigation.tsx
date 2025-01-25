"use client";
import { motion, AnimatePresence } from "motion/react";
import { useSelector } from "react-redux";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import HeaderNav from "../Header/Navigation";
import { Button3 } from "../Button/Button3";
import Theme from "./ThemeSetter";
import { useState, useEffect } from "react";

export default function MainNavigation({ Session }: any) {
  const navState = (state: any) => state.Nav;
  const { NavState } = useSelector(navState);
  const [Mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  console.log();
  return (
    <AnimatePresence>
      {NavState && (
        <motion.div
          initial={{ x: "100%", height: "100%" }}
          animate={{ x: 0, height: "100%" }}
          transition={{
            duration: 0.5,
          }}
          exit={{ x: "100%", height: "100%", zIndex: "-50" }}
          className={`top-[0] w-[24%] h-[100%] overflow-hidden right-[0] rounded-lg text-black dark dark:text-[white] ${
            NavState
              ? "absolute GlassHighblurLightMainNav dark:GlassHighblurDarkMainNav"
              : "-z-50"
          } text-white shadow-md flex flex-col items-center overflow-hidden p-0 m-0`}
        >
          <MenuDisplay Session={Session} />
          {Mounted && <Theme />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export const MenuDisplay = ({ Session }: any) => {
  const Router = useRouter();
  const string = "string";
  const Photo = string[0];
  const Photo2 = string[1];
  // if (Session?.user?.Id) {
  return (
    <div className="w-full h-[60%] p-4 m-auto bg-transparent flex flex-col z-50 relative">
      {/* <span className="w-full h-full m-0 p-0 flex items-center justify-around">
        <span className="rounded-full border border-white w-fit h-fit m-auto flex items-center justify-around py-2 px-5">
          {session.user.image ? (
              <Image src={{}} alt={``} />
            ) : (
              <h1 className="w-full rounded-full h-full text-white flex items-center justify-between font-normal text-[40px] text-center ">
                {Photo}
                {Photo2}
              </h1>
            )} 
        </span>
      </span> */}
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
        {Session?.user ?  
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="tabler-icon tabler-icon-logout-2 "
            >
              <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2"></path>
              <path d="M15 12h-12l3 -3"></path>
              <path d="M6 15l-3 -3"></path>
            </svg>
          }
        /> : "SignIn"
        }
        <h3>Sell tickets</h3>
        
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
  // }
  // return (
  //   <div className="w-[100%] h-[100%] m-0 p-0 bg-transparent">
  //     <h2 className="m-auto text-center w-full h-full">NO DATA</h2>
  //   </div>
  // );
};

export const ThemeSelector = () => {
  return <div className="w-[90%] m-0 p-0 h-[10%] flex items-center"></div>;
};
