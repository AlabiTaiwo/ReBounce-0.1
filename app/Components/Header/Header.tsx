import { auth } from "../../../auth";
import AuthComp from "./AuthComp";
import Menu from "./HeaderMenu";
import NavButton from "./NavButtons";

export default async function Header() {
  const Session = await auth();

  return (
    <div className="w-full h-[10vh] flex items-center justify-around m-0 p-2 z-50 relative">
      <div className="w-[10%] h-[80%] p-[5px] m-auto rounded-lg flex items-center justify-around gap-2">
        <div></div>
      </div>
      <NavButton />
      <div className="w-[50%] h-[80%] Glass flex items-center justify-between p-2 m-auto z-50 relative rounded-lg ">
        <div className="w-[20%]">
          <h2 className="dark:text-white text-black">Header</h2>
        </div>
        <Menu Session={Session} />
      </div>
      <AuthComp />
    </div>
  );
}
