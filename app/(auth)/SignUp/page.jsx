import SignUpForm from "./Form";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import Display from "./Display";
import Image1 from "../../Image/Platonic.png";
import Image from "next/image";

export default async function SignUp() {
  const Session = await auth();
  if (Session && Session.user.Id) {
    redirect("/");
  }
  return (
    <div className="w-full h-full p-6 relative">
      <span className="absolute top-[-70px] left-[-80px] w-[400px] h-[500px] rounded-full backdrop-blur-3xl bg-purple-900 BGCOLOR z-[-10]"></span>
      <span className="absolute bottom-[-190px] right-[-160px] w-[400px] h-[500px] rounded-full backdrop-blur-3xl bg-rose-800 BGCOLOR3 z-[-10]"></span>
      <div className="w-[80%] h-full m-auto p-0 grid grid-flow-col grid-cols-3 border-[1px] border-transparent rounded-lg shadow-sm Glass gap-1">
        <Image
          src={Image1}
          width={500}
          height={500}
          className="absolute top-[60px] left-[-260px] z-0"
        />
        <Display />
        <SignUpForm />
      </div>
    </div>
  );
}
