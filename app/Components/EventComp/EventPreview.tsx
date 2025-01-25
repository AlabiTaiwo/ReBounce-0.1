"use client";

import { IconCalendarEvent, IconLocation } from "@tabler/icons-react";
import Image from "next/image";
import Holder from "../../Image/My pictures 1.jpg";
import trial1 from "../../Image/My pictures 5.jpg";

//Event Image type declaration
type EventImage = {
  src: string;
  alt: string;
  height: number;
  width: number;
  loading: "eager" | "lazy" | undefined;
};

//EventProps type declaration
type EventProps = {
  src: string;
  alt: string;
  loading: "eager" | "lazy" | undefined;
  width: number;
  height: number;
};

//Event Preview component positioned here
export const EventPreview: React.FC<EventProps> = ({
  src,
  alt,
  loading,
  height,
  width,
}) => {
  return (
    <div className="w-[300px] h-fit Glass flex flex-col rounded-lg p-2">
      <div className="w-fit h-fit grid grid-flow-row">
        <EventImage
          src={src}
          alt={alt}
          loading={loading}
          height={height}
          width={width}
        />
        <div className="flex flex-col gap-1">
          <span>
            <h1 className="text-[22px] font-medium ">kee&peele</h1>
          </span>
          <span className="text-[19px] font-medium">Meet and greet</span>
          <div className="flex items-center justify-between">
            <span className="flex flex-col items-center gap-[2px]">
              <h2 className="font-bold text-[14px] flex items-center gap[4px]">
                <IconCalendarEvent size={20} color="white" /> MAR 12
              </h2>
              <h4 className="font-medium text-[12px]">01:30 PM</h4>
            </span>
            <span className="">
              <h2 className="flex items-center gap-[4px]">
                <IconLocation size={12} color="white" /> Ikeja,Lagos
              </h2>
            </span>
            <span className=""></span>
          </div>
        </div>
        <button
          type="submit"
          className="mt-[20px]  rounded-lg p-[5px] border-[2px] border-white"
        >
          Buy Ticket
        </button>
      </div>
    </div>
  );
};

//Event preview image component
const EventImage: React.FC<EventImage> = ({
  src,
  alt,
  loading,
  height,
  width,
}) => {
  return (
    <>
      <Image
        width={width}
        height={height}
        src={src}
        priority
        loading={loading}
        alt={alt}
        className="rounded-t-lg "
      />
    </>
  );
};

const Location = () => {};

const DateTime = () => {};

const NameTitle = () => {};

export const NewPreview = () => {
  return (
    <div
      className={`w-[80%] relative h-[90%] m-auto z-30 rounded-2xl flex flex-col GlassHighblurDark p-[3px]`}
      // className={`w-[20%] relative h-[60%] z-30 rounded-2xl Preview after:content-[" "] after:w-[7%] after:h-[9%] after:flex // after:right-0 after:rounded-tr-3xl after:rounded-br-3xl  after:z-40 after:absolute after:left-0 after:top-[69%] //before:content-[""] before:w-[7%] before:h-[9%] before:right-0 before:top-[69%]  after:border-[2px] after:border-black // // before:absolute before:rounded-tl-3xl before:rounded-bl-3xl`}
    >
      <div
        style={{
          backgroundImage: "",
          background: "",
          backgroundColor: "",
        }}
        className={`ticketImage h-[64%] relative overflow-hidden w-full block p-[2px] rounded-t-2xl`}
      >
        <Image
          src={trial1}
          fill={true}
          alt="hh"
          sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
          className="overflow-hidden object-cover"
        />
      </div>
      <div className="ticket w-full h-[36%] text-black">
        here is where the magic
      </div>
    </div>
  );
};

export default EventPreview;
