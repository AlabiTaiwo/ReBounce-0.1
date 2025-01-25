import DateTimeDisplay from "../DateTime/DateTime";
import AuthComponent from "../Header/AuthComponents";
import {} from "@tabler/icons-react";
import Theme from "../Navigation/ThemeSetter";

export default function Header2() {
  return (
    <div className="w-full h-[5vh] flex justify-between items-center m-auto relative px-3 -z-10 ">
      <div className="w-[50%] h-[90%] Glass m-auto -z-10 flex items-center justify-around">
        <DateTimeDisplay />
        <Theme />
        <AuthComponent />
      </div>
    </div>
  );
}
