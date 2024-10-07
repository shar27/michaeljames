import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchHero } from "@/lib/contentful";
import whatsapp from "./svg/whatsapp.svg";
import Image from "next/image";
import profile from "../components/img/profile.jpg";
import Button from "./Button";
function hero() {
  const [hero, setHero] = useState([]); // State to store fetched land deals
  const [loadingHero, setLoadingHero] = useState(true); // Separate loading state for land deals
  // Fetch land deals
  useEffect(() => {
    const getHero = async () => {
      const heroImg = await fetchHero();
      setHero(heroImg);
      setLoadingHero(false);
    };
    getHero();
  }, []); // Runs only once when component mounts


  return (
    <div className="hero bg-black text-white min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse min-h-screen mt-0 lg:mt-20">
        {hero.map((h) => (
          <img
            src={`https:${h.fields.hero.fields.file.url}`} // relative path from the public directory or static path in next.js
            alt="Profile Image"
            className="w-full lg:w-72 rounded-lg shadow-2xl"
          />
        ))}

        <div>
          <h1 className="text-3xl lg:text-5xl font-bold">Michael James</h1>
          <h2 className="py-0 lg:py-6 text-xl lg:text-2xl ">
            Property Investor, Property Trader, Entrepreneur
          </h2>
          <Link href="/Contact">
            <Button
              text={"INVEST WITH US"}
              bgColor={"bg-black"}
              color={"text-white"}
              padding={"p-3"}
            />
          </Link>
        </div>
        <Link href="https://chat.whatsapp.com/E5IRjrEMJJgFyeqZyRAi7I">
          <Image
            className="cursor-pointer fixed bottom-0 right-10 lg:right-12 z-100 w-16 h-16 "
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
