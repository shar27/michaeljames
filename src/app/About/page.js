import React from "react";
import NavBar from "../components/NavBar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Landowners",
  description: "Landowners",
};

export default function Page() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-1 lg:grid-cols-2 p-10">
  <div className="max-w-md leading-8 ">
    <h1 className="text-5xl font-bold ">Hey! I'm Michael,</h1>
    <p className="py-6 font-bold text-nowrap">
      An entrepreneur, property sourcer and unshakable optimist dedicated
      to helping you find your ideal investment property.
    </p>
 

    <h2 className="text-4xl font-bold ">My Story</h2>
    <h3 className="text-3xl mt-3">What we are looking for</h3>
    <p>
      While immersing myself in the real estate market, I noticed two
      critical aspects:
    </p>
    <p>
      Firstly, I observed a significant gap in the property sourcing
      market, where individuals struggled to find a service that truly
      understood their investment needs.
    </p>
    <p>
      Secondly, I realized that to achieve my personal investment goals, I
      needed to gain expertise and insights into the property market.
    </p>
    <p>
      Fueled by the desire to fill this market gap and pursue my
      investment dreams, I embarked on a mission. I founded Michael James
      Property, a property sourcing business dedicated to providing
      exceptional service to investors.
    </p>
    <p>
      My vision was to bridge the gap in the market by offering
      personalized guidance, transparency, and a level of professionalism
      that's currently missing for investors seeking the perfect property
      investment opportunities.
    </p>
  </div>
  
  <div className="flex justify-center items-center">
    <Image 
      className="rounded-lg shadow-lg"
      width={300}
      height={300}
      src="/mj.jpg" 
      alt="Michael's photo"
    />
  </div>
</div>


      <ContactForm />
      <Footer />
    </>
  );
}
