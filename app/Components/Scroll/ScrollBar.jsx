"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollBar({ scrollYProgress }) {
  console.log(scrollYProgress);
  return (
    <motion.div className="w-[10%] h-[20%] bg-black absolute top-0 right-0 z-40">
      <motion.div
        className={`w-full h-full bg-white origin-top z-50`}
        style={{ scaleY: scrollYProgress, transformOrigin: "0%" }}
      ></motion.div>
    </motion.div>
  );
}
