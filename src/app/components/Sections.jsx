import React,{useState, useEffect} from "react";
import { fetchSectionOne, fetchSectionTwo } from "@/lib/contentful";
import Button from "./Button";
import Link from "next/link";
function Sections() {
  const [sectionOne, setSectionOne] = useState([]); // State to store fetched land deals
  const [sectionTwo, setSectionTwo] = useState([]); // State to store fetched land deals

  // Fetch land deals
  useEffect(() => {
    const getSectionOne = async () => {
      const sectionOneImg = await fetchSectionOne();
      setSectionOne(sectionOneImg);
      
    };
    getSectionOne();
  }, []); // Runs only once when component mounts

  useEffect(() => {
    const getSectionTwo = async () => {
      const sectionTwoImg = await fetchSectionTwo();
      setSectionTwo(sectionTwoImg);
      
    };
    getSectionTwo();
  }, []); // Runs only once when component mounts

  console.log(sectionOne);
  

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        {/* Image 1 */}
        <div className="card bg-base-300 rounded-box flex-grow flex items-center justify-center ">
          <div
            className="hero w-full min-h-screen "
          >
              {sectionOne.map((s1) => (
          <img
            src={`https:${s1.fields.sectionOne.fields.file.url}`} // relative path from the public directory or static path in next.js
            alt="Profile Image"
            className="object-cover min-h-screen"
          />
        ))}
            <div className="hero-overlay bg-opacity-60"></div>
       
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Deal Selling Launch Pad
                </h1>
                <p className="mb-5">
                  Ever thought about getting into property but didn't have the
                  capital? The Deal Selling Launch Pad teaches hungry
                  individuals how to start their own Deal Packaging business
                  with the potential to make £10,000 per month.
                </p>
                <Link href="/Contact">
                  <Button
                    text={"Get Started"}
                    bgColor={"bg-black"}
                    color={"text-white"}
                    padding={"p-3"}
                  />
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="card bg-base-300 rounded-box flex-grow flex items-center justify-center">
          <div
            className="hero w-full min-h-screen">
              {sectionTwo.map((s2) => (
          <img
            src={`https:${s2.fields.sectionTwo.fields.file.url}`} // relative path from the public directory or static path in next.js
            alt="Profile Image"
            className="object-cover min-h-screen "
          />
        ))}
            <div className="hero-overlay bg-opacity-60">
        
            </div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Property Investment Launch Pad
                </h1>
                <p className="mb-5">
                  I want to train you to start your property investment journey.
                  If you want to start buying assets that you can flip for five
                  or six figure profits or keep as assets that pay you every
                  month, you will learn everything you need to know at this full
                  day of in-depth, all secrets revealed training.
                </p>
                <Link href="/Contact">
                  <Button
                    text={"Get Started"}
                    bgColor={"bg-black"}
                    color={"text-white"}
                    padding={"p-3"}
                  />
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sections;
