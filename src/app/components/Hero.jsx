import React from "react";
import Link from "next/link";
import whatsapp from "./svg/whatsapp.svg";
import Image from "next/image";
import profile from "../components/img/profile.jpg";
import Button from "./Button";
function hero() {
  return (
    <div className="hero bg-black text-white min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse min-h-screen">
        <Image
          src={profile} // relative path from the public directory or static path in next.js
          alt="Profile Image"
          className="w-full lg:w-72 rounded-lg shadow-2xl"
        />

        <div>
          <h1 className="text-3xl lg:text-5xl font-bold">Michael James</h1>
          <h2 className="py-0 lg:py-6 text-xl lg:text-2xl ">
            Property Investor, Property Trader, Entrepreneur
          </h2>
        <Button text={'INVEST WITH US'} padding={'p-3'}/>
        </div>
        <Link href="https://chat.whatsapp.com/E5IRjrEMJJgFyeqZyRAi7I">
          <Image
            className="cursor-pointer fixed bottom-2 right-10 lg:right-12 z-100 w-16 h-16 "
            src={whatsapp}
            width={50}
            height={50}
          />
        </Link>
      </div>
    </div>
  );
}

export default hero;
