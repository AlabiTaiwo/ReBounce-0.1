import { auth } from "../../../auth";
import AutoReturn from "../../Components/NotSignedInDefaultPage/AutoReturn";
import Display from "../SignUp/Display";
import CreatorSignUpForm from "./Form";
// import Image from "next/image";

export default async function CreatorSignUp() {
  const Session = await auth();
  if (Session && Session.user?.Id) {
    return (
      <div className="w-full h-full p-6 relative z-30">
        <span className="absolute top-[-70px] left-[-80px] w-[400px] h-[500px] rounded-full backdrop-blur-3xl bg-purple-900 BGCOLOR z-[-10]"></span>
        <span className="absolute bottom-[-190px] right-[-160px] w-[400px] h-[500px] rounded-full backdrop-blur-3xl bg-rose-800 BGCOLOR3 z-[-10]"></span>
        <div className="w-[80%] h-full m-auto p-0 grid grid-flow-col grid-cols-3 border-[1px] border-transparent rounded-lg shadow-sm Glass gap-1 z-30">
          <Display />
          <CreatorSignUpForm />
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-full m-0 p-[300px]">
      <div className=" flex flex-col items-center justify-between gap-[10px] w-[50%] h-[50%] m-auto p-0">
        <h1 className="text-[20px] text-white font-medium ">
          You're not signed, please sign in...
        </h1>
        <AutoReturn />
      </div>
    </div>
  );
}
