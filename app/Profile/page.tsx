"use client";
import { useRef } from "react";
import { useScroll, motion } from "motion/react";

const Profile: React.FC = () => {
  const Ref = useRef();
  const { scrollYProgress } = useScroll({});
  return (
    <div className="">
      <div className="w-full h-fit m-0 flex flex-row justify-between gap-7">
        <ProfileDisplay />
        <ProfileDetails />
      </div>
    </div>
  );
};

const ProfileDisplay = () => {
  return (
    <motion.div className="w-[15%] h-[40%] flex sticky top-0 left-0">
      <motion.div
        className={`w-full h-full m-0 p-0 bg-gradient-to-b from-[rgba(26_26_26/0.1)] to-[rgba(29_29_29/0.1)] outline-solid outline-[.2px] outline-[rgba(71_71_71/0.125)]  backdrop-blur-2xl shadow-[0px_0px_3px_0px_rgba(0_0_0/0.37)] rounded-2xl relative z-30 flex-col items-center justify-around border border-white place-content-center`}
      >
        <motion.div className="w-[60%] h-[50%] m-auto p-0 rounded-full border border-white"></motion.div>
        <h2 className="w-fit h-fit text-center m-auto">Name here</h2>
        <h2 className="w-fit h-fit m-auto text-center ">UserName here</h2>
      </motion.div>
    </motion.div>
  );
};

const ProfileDetails = () => {
  return (
    <motion.div className="w-[80%] h-[60vh] border border-white rounded-2xl"></motion.div>
  );
};

const ProfilePreferences = () => {
  return (
    <div className="">
      <div className=""></div>
    </div>
  );
};

export default Profile;
