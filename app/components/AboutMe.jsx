"use client";

import Image from "next/image";

import pic2 from "../../public/pic2.png";
import logo1 from "../../public/logo1.png";

const AboutMe = () => {
  return (
    <div className="mx-auto max-w-6xl flex flex-col items-center relative gap-[50px]">
      <Image
        src={logo1}
        alt=""
        className="absolute top-[-100px] left-[-160px] w-[300px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
      />
      <div className="flex w-fit h-fit justify-center items-center text-white font-bold text-center gap-[70px]">
        <div className="flex flex-col justify-center items-center mt-[90px] bg-blue-700 bg-opacity-50 rounded-2xl p-[20px]">
          <h3 className="text-[45px]">Full-Stack Software Developer</h3>
          <h1 className="text-[70px]">Mickey</h1>
          <h2 className="text-[65px]">Piyarat Taoyot</h2>
        </div>
        <div className="pt-[70px]">
          <Image
            src={pic2}
            alt=""
            className="w-[300px] rounded-xl shadow-2xl shadow-rose-600 hover:rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-between w-[1200px] h-fit mt-[50px] gap-[40px]">
        <div className="w-[500px] flex bg-violet-500 bg-opacity-50 rounded-2xl p-[20px]">
          <p className=" text-white font-bold text-[30px] ">
            " I want to be a Software Developer because I want to create
            software that can fulfill user's desires and I think a Software
            Developer job has a lot of knowledge that I can learn endlessly. "
          </p>
        </div>
        <div className="flex flex-col text-white bg-amber-500 bg-opacity-50 rounded-2xl p-[20px]">
          <h1 className="font-bold text-[30px]">Experience</h1>
          <div className="mb-[10px]">
            <h1 className="font-bold text-[20px]">
              Tradition Siam (Brokers) Limited (2022-2023)
            </h1>
            <h2 className="font-bold text-[17px]">Dealing Room Assistant</h2>
            <ul>
              <li>
                - Negotiate stock price with traders to facilitate transactions
                and close deals.
              </li>
              <li>
                - Checking the market close's price from yesterday to estimate
                today's market price.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-[20px]">
              V.O. Construction 2004 Company Limited (2019-2021)
            </h1>
            <h2 className="font-bold text-[17px]">
              Document management and Foreman
            </h2>
            <ul>
              <li>- Administrative documents management.</li>
              <li>
                - On-site viewing and checking the correctness of the work
                according to the drawings.
              </li>
              <li>- Drawing and Drafting assistant</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
