"use client";

import { IconCalendarEvent, IconLocation } from "@tabler/icons-react";
import Image from "next/image";

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
export const RelatedEventPreview: React.FC<EventProps> = ({
  src,
  alt,
  loading,
  height,
  width,
}) => {
  return (
    <div className="w-[170px] h-fit Glass flex flex-col rounded-lg p-2 ">
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
            <h1 className="text-[22px] font-medium ">Peller</h1>
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
        className="rounded-t-lg"
      />
    </>
  );
};

const Location = () => {};

const DateTime = () => {};

const NameTitle = () => {};

export default RelatedEventPreview;
