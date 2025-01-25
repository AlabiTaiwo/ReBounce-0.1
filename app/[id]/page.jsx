import EventTicket from "../Components/EventComp/EventTicket";
import { EventView } from "../Components/EventComp/EventView";

export default function EventId({ params }) {
  return (
    <div className="w-full h-fit p-[29px] m-0">
      <h3 className=" text-white text-[20px]">this page is {params.id}</h3>
      <EventView />
      {/* <EventTicket /> */}
    </div>
  );
}
