"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Display from "../../Image/jess.jpg";
import trial1 from "../../Image/My pictures 2.jpg";
import { IconCalendarEvent } from "@tabler/icons-react";

export default function FrontPage() {
  const Events = [
    {
      id: 1,
      Type: "Event",
      Title: "Lorem ipsum dolor sit.",
      Loaction: "Lagos, island lekki",
      Date: "01-04-2025",
      Image: Display,
    },
    {
      id: 2,
      Type: "Ad",
      Vist: "Address or profile or whatever",
      Image: Display,
    },
  ];
  return (
    <motion.div className="w-[100%] h-[79vh] bg-white dark:bg-black relative z-40 rounded-lg">
      <motion.div
        whileHover={{
          scaleZ: 0.7,
        }}
        className={`w-[100%] m-auto h-full image relative rounded-lg z-30 after:content-[''] hover:after:bg-[#1111111c] after:w-full after:h-full after:absolute after:top-0 after:right-0 after:z-30 before:content-[""] before:w-full before:h-full before:absolute before:top-0 before:right-0 before:z-30 overflow-hidden`}
      >
        <MainEventDisplay />
        <Image
          src={trial1}
          priority={true}
          sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
          style={{
            objectFit: "cover",
            // objectPosition: `40% 10%`,
            // width: "100%",
            // height: "100%",
          }}
          fill={true}
          className="z-20 absolute top-0 right-0 group-hover:scale-50 rounded-lg overflow-hidden"
        />
      </motion.div>
    </motion.div>
  );
}

export const MainEventDisplay = () => {
  return (
    <div
      className={`w-full h-full m-0 p-0 flex flex-col place-items-start justify-around z-40 rounded-lg bg-[rgba(17,17,17,0.61)] HeadlineView absolute bottom-0 left-0 before:content-[""] before:absolute before:top-0 before:right-0 HeadLineMask before:w-full before:h-full`}
    >
      <Calender />
      <Location />
      <BuyTicket />
    </div>
  );
};

export const Calender = () => {
  return (
    <motion.div
      initial={{
        x: "100%",
        right: 0,
      }}
      animate={{
        x: 0,
        right: "50px",
      }}
      transition={{
        delay: 0.4,
        type: "spring",
        stiffness: 100,
      }}
      className={`w-[10%] place-self-end top-[0px] right-[50px] h-[22%] m-0 p-0 bg-gradient-to-b from-[rgba(26_26_26/0.1)] to-[rgba(29_29_29/0.1)] outline-solid outline-[.2px] outline-[rgba(71_71_71/0.125)]  backdrop-blur-2xl shadow-[0px_0px_3px_0px_rgba(0_0_0/0.37)]  rounded-lg relative z-30 flex-col items-center justify-around after:content-[""] after:absolute after:inset-[-10px] after:outline after:outline-[.1px] after:outline-[rgba(102,102,102,0.04)] after:shadow-[0px_0px_3px_0px_rgba(0_0_0/.4)] after:bg-[rgba(36,36,36,0.18)] after:rounded-lg after:-z-20 after:backdrop:blur-lg before:content-[""] before:absolute before:-z-40 before:inset-[-10px] Calender before:rounded-lg`}
    >
      <span className="absolute w-full h-full -z-30 GlassHighblurDarkComp rounded-lg"></span>
      <div className="w-full h-[30%] z-30">
        <IconCalendarEvent
          // color="rgba(82, 19, 134, 0.74)"
          size="20%"
          className="bg-white  dark:bg-black stroke-black dark:stroke-white  rounded-full w-[25%] h-[25%] m-auto p-[4px] absolute top-2 left-2 z-40"
        />
        <h2 className="w-[80%] h-full text-right z-40 text-[30px]">MAR</h2>
      </div>
      <div className="w-full h-[70%] z-40">
        <h2 className="w-full h-full text-center text-[60px] z-40">12</h2>
      </div>
    </motion.div>
  );
};

export const BuyTicket = () => {
  return (
    <div className="flex w-[70%] h-[60%] absolute bottom-0">
      <div className="w-full h-[60%] place-items-start">
        <h3 className="text-[100px]">Lagos Fest</h3>
      </div>
      <motion.button
        initial={{
          x: "-100%",
          left: 0,
        }}
        animate={{
          x: 0,
          left: "20px",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
        }}
        className={`w-[19%] h-[10%] bg-white dark:bg-black  shadow-[0px_0px_3px_0px_rgba(0_0_0/0.37)] MainEventButton outline-solid outline-[.2px] outline-[rgba(71_71_71/0.125)]  rounded-lg place-self-start absolute bottom-[50px] left-[20px] after:content-[""] after:absolute after:inset-[-.8px] after:outline after:outline-[.1px] after:outline-[rgba(102,102,102,0.04)] after:shadow-[0px_0px_3px_0px_rgba(0_0_0/.4)] after:bg-[rgba(36,36,36,0.18)] after:rounded-lg after:-z-20 after:backdrop:blur-lg before:content-[""] before:absolute before:-z-40 before:inset-[-.8px] MainEventButton before:rounded-lg  text-[17px] font-medium`}
        // className={`w-[19%] h-[10%]  rounded-lg place-self-start absolute bottom-[50px] left-[20px]  dark:GlassHighblurDarkButton after:content-[""] after:absolute after:inset-[-4px] after:outline after:outline-[.1px] after:outline-[rgba(102,102,102,0.04)] after:shadow-[0px_0px_3px_0px_rgba(0_0_0/.4)] after:bg-[rgba(36,36,36,0.18)] after:rounded-lg after:-z-20 after:backdrop:blur-lg before:content-[""] before:absolute before:-z-40 before:inset-[-4px] MainEventButton before:rounded-lg text-black dark:text-white text-[17px] font-medium`}
      >
        Buy Ticket
      </motion.button>
    </div>
  );
};

export const Location = () => {
  return (
    <motion.div
      initial={{
        x: "100%",
        right: 0,
      }}
      animate={{
        x: 0,
        right: "20px",
      }}
      transition={{
        delay: 0.6,
        type: "spring",
        stiffness: 100,
      }}
      className={`w-[24%] h-[6%] rounded-3xl flex bg-gradient-to-b from-[rgba(26_26_26/0.1)] to-[rgba(29_29_29/0.1)] outline-solid outline-[.2px] outline-[rgba(71_71_71/0.125)]  backdrop-blur-2xl shadow-[0px_0px_3px_0px_rgba(0_0_0/0.37)]   items-center place-self-end relative bottom-[0px] right-[20px] after:content-[""] after:absolute after:inset-[-10px] after:outline after:outline-[.1px] after:outline-[rgba(102,102,102,0.04)] after:shadow-[0px_0px_3px_0px_rgba(0_0_0/.4)] after:bg-[rgba(36,36,36,0.18)] after:rounded-3xl after:-z-20 after:backdrop:blur-lg before:content-[""] before:absolute before:-z-40 before:inset-[-10px] Calender before:rounded-3xl`}
    >
      <span>
        <>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-location-down "
          >
            <path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.328 9.217"></path>
            <path d="M19 16v6"></path>
            <path d="M22 19l-3 3l-3 -3"></path>
          </svg>
        </>
      </span>
    </motion.div>
  );
};
