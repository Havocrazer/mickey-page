"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

import address from "../../public/address.png";
import email from "../../public/email.png";
import github from "../../public/github.png";
import linkedin from "../../public/linkedin.png";
import phone from "../../public/phone.png";

const notify = () => toast("Copy to clipboard.");

const ContactBar = () => {
  const [copiedText, setCopiedText] = useState(null);

  const handleCopyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedText(text);
        toast.success("Copied to clipboard!");
        setTimeout(() => {
          setCopiedText(null);
        }, 1500);
      })
      .catch((error) => console.error("Failed to copy:", error));
  };

  return (
    <div className="bg-white rounded-xl flex justify-center gap-[30px] w-fit h-full p-[30px] mt-[50px] relative">
      <Toaster position="top-center" />
      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 relative cursor-pointer">
        <div
          className="group"
          onClick={() =>
            handleCopyToClipboard(
              "347/63 Phaholyothin 1, Samsen Nai, Phayathai, Bangkok 10400"
            )
          }
        >
          <Image src={address} alt="" className="w-[40px] h-[40px] relative" />
          <p className="absolute font-bold opacity-0 group-hover:opacity-100 bg-white rounded-xl p-[10px] left-[-80px] top-[75px] w-[205px]">
            347/63 Phaholyothin 1, Samsen Nai, Phayathai, Bangkok 10400
          </p>
        </div>
      </div>
      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 relative cursor-pointer">
        <div
          className="group"
          onClick={() => handleCopyToClipboard("piyarat_uyakie@hotmail.com")}
        >
          <Image src={email} alt="" className="w-[40px] h-[40px]" />
          <p className="absolute font-bold opacity-0 group-hover:opacity-100 bg-white rounded-xl p-[10px] left-[-100px] top-[75px] w-[245px]">
            piyarat_uyakie@hotmail.com
          </p>
        </div>
      </div>
      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 relative">
        <div className="group">
          <Link
            href="https://github.com/Havocrazer?tab=repositories"
            target="_blank"
          >
            <Image src={github} alt="" className="w-[40px] h-[40px]" />
            <p className="absolute font-bold opacity-0 group-hover:opacity-100 bg-white rounded-xl p-[10px] left-[-110px] top-[75px] w-[275px]">
              https://github.com/Havocrazer?tab=repositories
            </p>
          </Link>
        </div>
      </div>
      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 relative">
        <div className="group">
          <Link href="https://linkedin.com/in/mickeypiyarat" target="_blank">
            <Image src={linkedin} alt="" className="w-[40px] h-[40px]" />
            <p className="absolute font-bold opacity-0 group-hover:opacity-100 bg-white rounded-xl p-[10px] left-[-130px] top-[75px] w-[300px]">
              https://linkedin.com/in/mickeypiyarat
            </p>
          </Link>
        </div>
      </div>
      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 relative cursor-pointer">
        <div
          className="group"
          onClick={() =>
            handleCopyToClipboard(
              "347/63 Phaholyothin 1, Samsen Nai, Phayathai, Bangkok 10400"
            )
          }
        >
          <Image src={phone} alt="" className="w-[40px] h-[40px]" />
          <p className="absolute font-bold opacity-0 group-hover:opacity-100 bg-white rounded-xl p-[10px] left-[-45px] top-[75px] w-[160px]">
            +66 87-5277692
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContactBar;
