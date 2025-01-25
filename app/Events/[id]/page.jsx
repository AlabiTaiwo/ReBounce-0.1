import { EventView } from "../../Components/EventComp/EventView";

export default function EventPage({ params }) {
  return (
    <div>
      {/* <h1 className="text-white text-[20px]">This is a page {params.id}</h1> */}
      <EventView />
    </div>
  );
}
