"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { EventCategory } from "./Components/EventComp/EventCategory";
import EventPreview from "./Components/EventComp/EventPreview";
import FrontPage from "./Components/FrontPage/HeadLinepage";
import image from "./Image/jess.jpg";

export default function Home(scrollYProgress, TargetRef) {
  const Navs = (state) => state.Nav;
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
