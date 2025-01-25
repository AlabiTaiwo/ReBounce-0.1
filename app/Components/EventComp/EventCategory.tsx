"use client";
import { motion } from "motion/react";
import EventPreview, { NewPreview } from "./EventPreview";
import Holder from "../../Image/jess.jpg";

export const EventCategory = () => {
  return (
    <motion.div className="w-full h-fit bg-transparent">
      <motion.div
        initial={{
          backgroundColor: "green",
          width: "50%",
          margin: "auto",
        }}
        whileInView={{
          backgroundColor: "yellow",
          width: "100%",
          margin: "auto",
        }}
        transition={{
          duration: 0.3,
        }}
        viewport={{
          margin: "-130px 0px -120px 0px",
        }}
        className=" w-full h-[70px] flex items-center justify-around bg-transparent"
      >
        <h2 className="text-black">Events near you.</h2>
      </motion.div>
      <motion.div className="p-[10px] w-full h-[90%] relative bg-transparent grid grid-flow-row grid-cols-3 row-auto EventGrid">
        <NewPreview />
        <NewPreview />
        <NewPreview />
        <NewPreview />
        <NewPreview />
        <NewPreview />
        <NewPreview />
      </motion.div>
    </motion.div>
  );
};
