"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import testImg from "../../Image/jess.jpg";
import HostLogo from "../../Image/Platonic.png";
import {
  IconLocationPin,
  IconRating18Plus,
  IconReceiptRefund,
  IconTag,
} from "@tabler/icons-react";
import { RelatedEventPreview } from "./RelatedEvents";

type EventImageProps = {
  src: string;
  width: number;
  height: number;
  priority: boolean | undefined;
  loading: "eager" | "lazy" | undefined;
  name: string;
};

type EventDetailsProps = {
  name: string;
  description: string;
};

const EventImage: React.FC<EventImageProps> = ({
  src,
  priority,
  width,
  height,
  loading,
  name,
}) => {
  return (
    <>
      <div
        className={`w-[100%] h-fit relative m-0 p-0 bg-gradient-to-b from-[rgba(26_26_26/0.1)] to-[rgba(29_29_29/0.1)] outline-solid outline-[.2px] outline-[rgba(71_71_71/0.125)]  backdrop-blur-2xl shadow-[0px_0px_3px_0px_rgba(0_0_0/0.37)]  rounded-lg z-30 after:content-[""] after:absolute after:inset-[-10px] after:outline after:outline-[.1px] after:outline-[rgba(102,102,102,0.04)] after:shadow-[0px_0px_3px_0px_rgba(0_0_0/.4)] after:bg-[rgba(36,36,36,0.18)] after:rounded-lg after:-z-20 after:backdrop:blur-lg before:content-[""] before:absolute before:-z-40 before:inset-[-10px] Calender before:rounded-lg`}
      >
        <Image
          alt={name}
          src={src}
          width={width}
          height={height}
          loading={loading}
          priority={priority}
          className="rounded-lg"
        />
      </div>
    </>
  );
};

export const EventView = () => {
  return (
    <div className="w-full h-fit p-3 grid grid-flow-row grid-cols-5 gap-[100px] relative">
      <div className="w-full h-full col-span-2 flex flex-col sticky top-[0px] left-0">
        <EventImage src={testImg} />
        <h2>About</h2>
        <h3>Tickets lists</h3>
      </div>
      <div className="w-full h-fit col-span-3 flex flex-col gap-7 justify-between">
        <div>
          <h2 className="w-full h-fit text-[40px] font-bold">Title</h2>
          <h2 className="w-full h-fit text-[30px] font-medium">Name</h2>
          <h2 className="w-full h-fit text-[30px] font-medium">Time</h2>
        </div>

        <div className="w-[100px] h-fit flex items-center justify-between gap-2">
          <span className="flex gap-1 items-center justify-between ">
            <IconTag size={20} color="white" /> Category
          </span>
          <span className="flex gap-1 items-center justify-between ">
            <IconLocationPin size={20} color="white" />
            Location
          </span>
        </div>
        <div className="w-full h-fit m-auto p-1 outline outline-[1px] outline-white rounded-lg">
          <h2>Venue</h2>
          <div className="flex flex-col justify-between gap-1">
            <h2>Address: put address here:</h2>
            <span className="block rounded-lg p-[5px] w-fit h-fit outline outline-[1px] outline-white">
              Get location on map
            </span>
          </div>
        </div>
        <div className=" w-full h-fit flex flex-col">
          <div className="w-full h-fit">
            <h2>Who is going?</h2>
          </div>
          <div className="w-full h-fit relative flex">
            <div className=" outline outline-[1px] outline-white rounded-full w-[60px] h-[60px] z-0 bg-black text-center text-[40px] font-medium">
              T
            </div>
            <div className=" relative right-[10px] outline outline-[1px] outline-white rounded-full w-[60px] h-[60px] z-10 bg-black text-center text-[40px] font-medium">
              R
            </div>
            <div className=" relative right-[20px] outline outline-[1px] outline-white rounded-full w-[60px] h-[60px] z-20 bg-black text-center text-[40px] font-medium">
              J
            </div>
          </div>
        </div>
        <div>
          <h2>Terms</h2>
          <h2>Display here:</h2>
          <div className="">
            <IconRating18Plus size={30} color="white" />
            <IconReceiptRefund size={30} color="white" />
          </div>
          <div></div>
        </div>
        <div className="w-full h-fit border border-white rounded-lg flex items-center justify-between">
          <span className="w-fit h-fit flex flex-col items-center justify-between">
            <h2>creator details</h2>
            <button className="w-fit h-fit p-1 px-4 m-0 rounded-md border border-white">
              Like
            </button>
          </span>

          {/* <span className="w-[140px] h-fit rounded-lg">
            <EventImage src={HostLogo} />
          </span> */}
        </div>
      </div>
      <div className="w-full h-fit col-span-5 flex flex-col">
        <h2>Related events</h2>
        <span className="flex w-full h-fit items-center justify-between gap-0">
          <RelatedEventPreview src={testImg} />
          <RelatedEventPreview src={testImg} />
          <RelatedEventPreview src={testImg} />
          <RelatedEventPreview src={testImg} />
          <RelatedEventPreview src={testImg} />
          <RelatedEventPreview src={testImg} />
        </span>
      </div>
    </div>
  );
};
