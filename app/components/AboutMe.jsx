"use client";

import Image from "next/image";

import pic2 from "../../public/pic2.png";
import logo1 from "../../public/logo1.png";

const AboutMe = () => {
  return (
    <div className="mx-auto max-w-6xl flex items-center relative gap-[50px]">
      <Image
        src={logo1}
        alt=""
        className="absolute top-[-100px] left-[-250px] w-[300px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
      />
      <div className="flex flex-col items-start bg-violet-500 bg-opacity-80 p-[20px] rounded-md w-[550px] h-fit mt-[80px]">
        <p className=" text-white font-bold text-[30px]">
          " I want to be a Software Developer because I want to create software
          that can fulfill user's desires and I think a Software Developer job
          has a lot of knowledge that I can learn endlessly. "
        </p>
      </div>
      <div className="pt-[70px]">
        <Image
          src={pic2}
          alt=""
          className="w-[300px] rounded-xl shadow-2xl hover:rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer ml-[50px]"
        />
      </div>
    </div>
  );
};

export default AboutMe;
