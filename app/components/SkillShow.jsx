"use client";
import Image from "next/image";

import html5 from "../../public/html5.png";
import css from "../../public/css.png";
import js from "../../public/js.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/nodejs.png";
import express from "../../public/express.png";
import next from "../../public/next.png";
import mongodb from "../../public/mongodb.png";
import postgres from "../../public/postgres.png";
import git from "../../public/git.png";
import cypress from "../../public/cypress.png";

function SkillShow() {
  return (
    <div className="flex flex-col justify-center items-center gap-[20px] p-[15px] rounded-2xl bg-teal-500 bg-opacity-50 h-fit mt-[80px]">
      <h1 className="text-white text-[40px] font-bold">Skills</h1>
      <div className="flex mb-[20px]">
        <div className="flex flex-col w-[200px] items-center gap-[20px]">
          <h2 className="text-white text-[25px] font-bold">Front-End</h2>
          <div className="flex flex-wrap gap-[20px] justify-center">
            <Image
              src={html5}
              className="w-[60px] h-[60px] hover:animate-bounce cursor-pointer"
            />
            <Image
              src={css}
              className="w-[60px] h-[60px] hover:animate-bounce cursor-pointer"
            />
            <Image
              src={js}
              className="w-[60px] h-[60px] rounded-lg hover:animate-bounce cursor-pointer"
            />
            <Image
              src={reactjs}
              className="w-[60px] h-[60px] hover:animate-bounce cursor-pointer"
            />
            <Image
              src={next}
              className="w-[60px] h-[60px] hover:animate-bounce cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col w-[200px] items-center gap-[20px]">
          <h2 className="text-white text-[25px] font-bold">Back-End</h2>
          <div className="flex flex-wrap gap-[20px] justify-center">
            <Image
              src={nodejs}
              className="w-[60px] h-[60px] hover:animate-bounce cursor-pointer"
            />
            <Image
              src={express}
              className="w-[60px] h-[60px] hover:animate-bounce cursor-pointer"
            />
            <Image
              src={mongodb}
              className="w-[60px] h-[60px] hover:animate-bounce cursor-pointer"
            />
            <Image
              src={postgres}
              className="w-[60px] h-[60px] hover:animate-bounce cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col w-[220px] items-center gap-[20px]">
          <h2 className="text-white text-[25px] font-bold">Software Testing</h2>
          <div className="flex flex-wrap gap-[20px] justify-center">
            <Image
              src={cypress}
              className="w-[90px] h-[35px] mt-[10px] hover:animate-bounce cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col w-[200px] items-center gap-[20px]">
          <h2 className="text-white text-[25px] font-bold">Version Control</h2>
          <div className="flex flex-wrap gap-[20px] justify-center">
            <Image
              src={git}
              className="w-[60px] h-[60px] hover:animate-bounce cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SkillShow;
