import React, { useEffect, useState } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { fetchServices } from "../../lib/contentful";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
const Services = () => {
  const [serviceSection, setServiceSection] = useState([]); // State to store fetched land deals
  const [loadingserviceSection, setLoadingServiceSection] = useState(true); // Separate loading state for land deals
  // Fetch land deals
  useEffect(() => {
    const getServicesData = async () => {
      const services = await fetchServices();
      setServiceSection(services);
      setLoadingServiceSection(false);
    };
    getServicesData();
  }, []); // Runs only once when component mounts

  // Show loading message while fetching
  if (loadingserviceSection) {
    return <div>Loading...</div>;
  }
  console.log(serviceSection);
  

  return (
    <div className="bg-white min-h-screen mx-0 flex flex-col justify-center items-center">
    <section className="p-4 text-black text-center">
      <h2 className="text-black text-5xl">Services I Offer</h2>
      <h3 className="text-black text-3xl">
        Can't find what you're looking for? Sign up for{" "}
        <Link className="text-black font-bold underline text-3xl" href="BespokeSourcing">
          Bespoke-sourcing
        </Link>
      </h3>
    </section>
  
    {/* Display land deals */}
    {serviceSection.length === 0 ? (
      <div></div>
    ) : (
      <div className="grid grid-cols-1 lg:grid-cols-3 p-5 gap-20 text-black w-full max-w-6xl">
        {serviceSection
        .sort((a,b) => a.fields.order - b.fields.order)
        .map((ldeal) => (
          <div
            className="shadow-lg p-10 flex flex-col rounded-lg h-auto"
            key={ldeal.sys.id}
          >
           
          <img
            src={`https:${ldeal.fields?.featured?.fields?.file.url}`} 
            alt={ldeal.fields?.heading}
            className=""
          />
        
            <h2
              className={
                "text-xl lg:text-3xl font-bold p-2 leading-10 uppercase text-center"
              }
            >
              {ldeal.fields.heading}
            </h2>
  
            <p className="text-wrap text-center">
              {documentToReactComponents(ldeal.fields.description)}
            </p>
            <div className="mt-auto p-5">
              <Link href={ldeal.fields.link}>
                <button className="border border-black text-black p-2 rounded-sm w-full h-12">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    )}
  
    <section className="text-center p-4">
      <p className="text-center text-black">
        If you believe we can add value to each other in a way that’s not covered above, don’t hesitate to reach out. I’m always open to new ideas.
      </p>
      <section className="mt-10">
      <Button
        text={"Speak to us"}
        padding={"p-3"}
        bgColor={"bg-black"}
        color={"text-white"}
      />
      </section>
    </section>
  </div>
  
  );
};

export default Services;
