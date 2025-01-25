"use client";
import { motion } from "framer-motion";

const DateTimeDisplay = () => {
  return (
    <div className="">
      <DateTime />
    </div>
  );
};

const DateTime = () => {
  const Time = new Date();
  const Day = Time.getDay();
  const Month = Time.getDate();
  const Year = Time.getFullYear();
  const Minute = Time.getMinutes();
  const Hour = Time.getHours();

  return (
    <div className="w-[100%] h-[10%] rounded-lg flex absolute top-2 left-7 justify-between items-center">
      <div className="w-5 h-5 rounded-lg border-white border"></div>
      <div className="w-full h-full text-green-800">{`${Day}:${Month}:${Year}`}</div>
    </div>
  );
};

export default DateTimeDisplay;
