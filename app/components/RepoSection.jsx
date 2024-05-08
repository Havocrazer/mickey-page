"use client";

import Image from "next/image";
import Link from "next/link";

import bmi_calculator from "../../public/bmi_calculator.png";
import ecommerce_product from "../../public/ecommerce_product.jpg";
import neatly from "../../public/neatly.png";
import tip_calculator from "../../public/tip_calculator.jpg";
import tourist_attraction from "../../public/tourist_attraction.png";

const RepoSection = () => {
  return (
    <div className="bg-black bg-opacity-50 flex flex-col items-center w-full h-full px-[70px] py-[60px] mt-[80px]">
      <h1 className="text-white text-[50px] font-bold">My Portfolio</h1>
      <div className="flex flex-wrap justify-between">
        <div className="m-[50px] flex flex-col gap-[15px] cursor-pointer w-fit h-full p-[20px] hover:bg-gray-200 hover:bg-opacity-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl duration-300">
          <Link
            href="https://github.com/Havocrazer/NeatlyHotel"
            target="_blank"
          >
            <Image
              src={neatly}
              alt=""
              className="w-[450px] h-[280px] rounded-xl mb-[20px]"
            />
            <p className="text-white text-[30px] font-bold">Neatly Hotel</p>
            <p className="w-[450px] text-white mb-[20px]">
              Create a hotel website that can search for rooms, book rooms, and
              manage rooms. The website has customer users and hotel admin
              users. Develop as a team Project
            </p>
            <p className="w-[450px] text-white">
              (tailwind CSS, daisy UI, material UI, Node.js, React, Axios,
              Prisma, Firebase Authentication, Express, PostgreSQL)
            </p>
          </Link>
        </div>
        <div className="m-[50px] flex flex-col gap-[5px] cursor-pointer w-fit h-full p-[20px] hover:bg-gray-200 hover:bg-opacity-50 hover:rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Link
            href="https://github.com/Havocrazer/react-tourist-attraction-mini-project-Havocrazer"
            target="_blank"
          >
            <Image
              src={tourist_attraction}
              alt=""
              className="w-[450px] h-[280px] rounded-xl mb-[20px]"
            />
            <p className="text-white text-[30px] font-bold">
              Tourist Attraction
            </p>
            <p className="w-[450px] text-white mb-[20px]">
              Create a website that can search for tourist attractions. Develop
              as an individual Project
            </p>
            <p className="w-[450px] text-white">
              (HTML, CSS, Node.js, React, Axios,)
            </p>
          </Link>
        </div>
        <div className="m-[50px] flex flex-col gap-[5px] cursor-pointer w-fit h-full p-[20px] hover:bg-gray-200 hover:bg-opacity-50 hover:rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Link
            href="https://comforting-horse-91beb4.netlify.app/"
            target="_blank"
          >
            <Image
              src={ecommerce_product}
              alt=""
              className="w-[450px] h-[280px] rounded-xl mb-[20px]"
            />
            <p className="text-white text-[30px] font-bold">
              E-Commerce Product Page
            </p>
            <p className="w-[450px] text-white mb-[20px]">
              Create a e-commerce product webpage that can view product picture,
              add product quantity, and calculate for total price. Develop as an
              individual Project
            </p>
            <p className="w-[450px] text-white">
              (tailwind CSS, shad cn, Node.js, React,)
            </p>
          </Link>
        </div>
        <div className="m-[50px] flex flex-col gap-[5px] cursor-pointer w-fit h-full p-[20px] hover:bg-gray-200 hover:bg-opacity-50 hover:rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Link
            href="https://frabjous-maamoul-3f320e.netlify.app/"
            target="_blank"
          >
            <Image
              src={tip_calculator}
              alt=""
              className="w-[450px] h-[280px] rounded-xl mb-[20px]"
            />
            <p className="text-white text-[30px] font-bold">Tip Calculator</p>
            <p className="w-[450px] text-white mb-[20px]">
              Create a tip calculator app that you can add your bill and the
              number of your friend or your customer to automatically calculate
              the tip amount and the total price that everyone must pay. Develop
              as an individual Project
            </p>
            <p className="w-[450px] text-white">
              (HTML, CSS, react.js, Node.js)
            </p>
          </Link>
        </div>
        <div className="m-[50px] flex flex-col gap-[5px] cursor-pointer w-fit h-full p-[20px] hover:bg-gray-200 hover:bg-opacity-50 hover:rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Link
            href="https://bmi-calculator-app-next-js.netlify.app/"
            target="_blank"
          >
            <Image
              src={bmi_calculator}
              alt=""
              className="w-[450px] h-[280px] rounded-xl mb-[20px]"
            />
            <p className="text-white text-[30px] font-bold">BMI Calculator</p>
            <p className="w-[450px] text-white mb-[20px]">
              Create a BMI calculator app that you can type your weight and your
              height and the app will automatically calculate your BMI and
              display the result to you. Develop as an individual Project
            </p>
            <p className="w-[450px] text-white">
              (HTML, CSS, Next.js, Node.js)
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RepoSection;
