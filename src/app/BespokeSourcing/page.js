import React from "react";
import NavBar from "../components/NavBar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Button from "../components/Button";

export const metadata = {
  title: "Bespoke Sourcing",
  description: "Bespoke Sourcing",
};

export default function BespokeSourcing() {
  return (
    <>
      <NavBar />

      <div className="hero bg-base-200 min-h-screen"
      style={{
    backgroundImage: "url(https://plus.unsplash.com/premium_photo-1681412504590-5c23f9a04e3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNreXNjcmFwZXJzfGVufDB8fDB8fHww)",
  }}>
      
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Bespoke Sourcing</h1>
            <p className="py-6">
              Are you in search of the perfect property that aligns with your
              unique vision and requirements? Our bespoke property sourcing
              service is designed to cater specifically to your distinct
              property needs, ensuring a seamless and tailored experience.
            </p>
           <Button/>
          </div>
        </div>
      </div>
      {/* process */}
      <div className="bg-black text-white h-32 p-5 text-5xl text-center font-bold">
        <h2>Our Process</h2>
      </div>

      {/* steps */}
      <div className="bg-black  ">
        <div className=" text-white h-auto p-5  text-center font-bold  grid grid-cols-1 lg:grid-cols-3 ">
          <div>
            <h3 className="text-5xl">01</h3>
            <h3 className="text-3xl mt-3">CONSULT</h3>
            <p className="mt-4 p-2">
              We initiate our process with a comprehensive consultation to
              understand your unique property needs, preferences, and investment
              goals. This consultation can take place in person, over the phone,
              or through video conferencing - whatever suits you best. We'll
              discuss property type, location, budget, desired features, and
              expected returns on investment to tailor our sourcing strategy to
              your requirements.
            </p>
          </div>
          <div>
            <h3 className="text-5xl">02</h3>
            <h3 className="text-3xl mt-3">SOURCE</h3>
            <p className="mt-4 p-2">
              With the insights gained from our consultation, we leverage our
              network and industry expertise to search for properties that match
              your criteria. We explore options, considering property condition,
              market trends, local amenities, and growth potential. We
              thoroughly review each property to ensure it aligns with your
              goals and meets our standards of quality and potential return on
              investment.
            </p>
          </div>
          <div>
            <h3 className="text-5xl">03</h3>
            <h3 className="text-3xl mt-3">NEGOTIATE</h3>
            <p className="mt-4 p-2">
              Once we've identified promising properties, we actively negotiate
              with sellers to secure the best possible terms, including the
              purchase price, closing timelines, and any necessary
              contingencies. We strive to strike a deal that aligns with your
              budget and preferences. After reaching an agreement, we submit a
              well-prepared offer to the seller.
            </p>
          </div>
        </div>
       
       
      </div>
       <div className="bg-black text-white h-auto p-5  text-center font-bold 
        grid grid-cols-1 lg:grid-cols-2 ">
          <div>
            <h3 className="text-5xl">04</h3>
            <h3 className="text-3xl mt-3">SECURE</h3>
            <p className="mt-4 p-2">
              After your offer is accepted, we coordinate and oversee all the
              necessary steps to ensure a smooth transaction. This includes
              liaising with legal and financial professionals, conducting due
              diligence on the property title and condition, and managing the
              paperwork required for the purchase. We ensure that the
              acquisition process is transparent, efficient, and in compliance
              with all legal and regulatory requirements.
            </p>
          </div>
          <div>
            <h3 className="text-5xl">05 </h3>
            <h3 className="text-3xl mt-3">PACKAGE</h3>
            <p className="mt-4 p-2">
              Once the acquisition is complete, we handle the seamless transfer
              of ownership and possession. This involves coordinating with all
              relevant parties, including legal representatives and the seller,
              to ensure a hassle-free handover. We provide you with all the
              necessary documentation and assist you with any post-purchase
              requirements, making your property acquisition a smooth and
              gratifying experience.
            </p>
          </div>
        </div>
        <ContactForm/>
      <Footer />
    </>
  );
}
