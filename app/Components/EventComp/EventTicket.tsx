"use client";
import { motion } from "framer-motion";
import { IconTicket, IconTicketOff } from "@tabler/icons-react";
import { useState } from "react";

export const EventTicket = () => {
  return (
    <div className="">
      <span className="">
        <IconTicket size={90} color="white" />
      </span>
      <span className="">
        <IconTicketOff size={90} color="white" />
      </span>
      <div className="w-[300px] h-[130px] flex flex-row-reverse bg-white">
        <span className="w-[40%] h-full bg-gray-800 border-l-[5px] border-l-black border-dashed gap-[9px]">
          <input
            type="number"
            name="Price"
            defaultValue={0}
            min={0}
            max={10}
            onChange={(e) => {}}
            maxLength={2}
            className="bg-white text-black text-[12px] w-[35px]"
          />
          <span className="text-[16px] text-white ">{Total}</span>
        </span>
      </div>
    </div>
  );
};

export default EventTicket;
