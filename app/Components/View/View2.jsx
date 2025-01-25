"use client";
import { useSelector } from "react-redux";
import MainNavigation from "../Navigation/Navigation";
import FrontPage from "../FrontPage/HeadLinepage";

export default function View({ children, Auth }) {
  const Navs = (state) => state.Nav;
  const { NavState } = useSelector(Navs);

  return (
    <div
      className={` bg-transparent h-[87vh] overflow-x-hidden text-black dark:text-white  ${
        NavState ? "overflow-y-hidden  w-[97.8vw]" : "overflow-scroll w-[98vw]"
      } z-20 m-auto View relative after:content-[""]   after:w-[96.5%] after:fixed after:top-[10%] after:left-[1%] after:h-[87vh] after:rounded-lg  after:z-30 `}
    >
      <div
        className={` ${
          NavState
            ? "fixed right-0 z-50 overflow-hidden roundd-lg GlassLowblurDarkNav"
            : "fixed delay-700 -z-30  "
        } h-[87vh] top-[10%] left-[1%]  rounded-lg w-[96.8%] flex flex-col items-center p-0 m-0`}
      >
        <MainNavigation Session={Auth} />
      </div>
      <div
        className={` ${
          NavState
            ? "h-full oveflow-hidden absolute -z-30 w-[99%]"
            : "h-fit overflow-hidden relative z-30 w-[99.3%]"
        } after:content-[''] bg-transparent flex-col items-center after:m-auto after:w-[96.5%] after:fixed after:top-[10%] after:left-[1%] after:h-[87vh] after:rounded-lg Screen after:-z-30 place-self-start NoView m-0 p-0 rounded-lg`}
      >
        {children}
      </div>
    </div>
  );
}
