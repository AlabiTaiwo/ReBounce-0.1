"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { EventCategory } from "./Components/EventComp/EventCategory";
import EventPreview from "./Components/EventComp/EventPreview";
import FrontPage from "./Components/FrontPage/HeadLinepage";
import image from "./Image/jess.jpg";

const Home:React.FC = ({scrollYProgress, TargetRef}:any) => {
  const Navs = (state : any) => state.Nav;
  const { NavState } = useSelector(Navs);
  return (
    <div
      className={`${
        NavState ? "w-[99.9%]" : "w-[100%]"
      } h-fit NoView -z-10 relative dark text-black dark:text-white rounded-lg `}
    >
      <FrontPage />
      <EventCategory />
    </div>
  );
}


export default Home;