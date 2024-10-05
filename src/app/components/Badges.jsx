import React from "react";
import Image from "next/image";
import Icons from "../components/img/badges2.png";

function Badges() {
  return (
    <div className="">
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
