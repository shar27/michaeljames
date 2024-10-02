import React from "react";
import NavBar from "../components/NavBar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Link from "next/link";

export const metadata = {
  title: "Landowners",
  description: "Landowners",
};

export default function Page() {
  return (
    <>
      <NavBar />
      <div
        className="hero bg-base-200 min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1551295022-de5522c94e08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxhbmQlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8Mg%3D%3D)",
        }}
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
            Hey! I'm Michael,
            </h1>
            <p className="py-6 font-bold">
            An entrepreneur, property sourcer and unshakable optimist dedicated to helping you find your ideal investment property. 
            </p>
            <Button text="Get in Touch" color="text-white" bgColor="bg-black" />
          </div>
        </div>
      </div>
      {/* process */}
      <div className="bg-black text-white h-32 p-5 text-5xl text-center font-bold">
        <h2>WHY DID I START THIS BUSINESS?</h2>
      </div>
   
      {/* steps */}
      <div className="bg-black  ">
        <div className=" text-white h-auto p-5  text-center font-bold  grid grid-cols-1 lg:grid-cols-3 ">
          <div>
            <h3 className="text-5xl">01</h3>
            <h3 className="text-2xl mt-3">What we are looking for</h3>
           <p>While immersing myself in the real estate market, I noticed two critical aspects:</p>
           <p>Firstly, I observed a significant gap in the property sourcing market, where individuals struggled to find a service that truly understood their investment needs.</p>
          <p>Secondly, I realized that to achieve my personal investment goals, I needed to gain expertise and insights into the property market..</p>
          </div>
        
          <div>

            <ul className="mt-4 p-2 list-none text-left">
              <p>Fueled by the desire to fill this market gap and pursue my investment dreams, I embarked on a mission. I founded Michael James Property, 
                a property sourcing business dedicated to providing exceptional service to investors.</p>
                <p>My vision was to bridge the gap in the market by offering personalized guidance, transparency, and a level of professionalism that's  currently missing for investors seeking the perfect property investment opportunities.</p>
            </ul>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}
