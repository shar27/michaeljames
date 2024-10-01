import React from "react";
import Image from "next/image";
import Icons from "../components/img/badges2.png";
import PRS from "../components/img/prs.png";

function Badges() {
  return (
    <div className="">
      <h1 className="bg-white border- 0 text-4xl font-bold text-center items-center p-4">
          Trusted Property Company
        </h1>
      <div className=" bg-white text-black">
        
        <div className="shadow-xl ">
          <Image
            src={Icons} // relative path from the public directory or static path in next.js
            alt="Profile Image"
            className="w-full h-4/5 rounded-lg shadow-2xl"
            // Adjust the height
          />
        </div>
      </div>
    </div>
  );
}

export default Badges;
