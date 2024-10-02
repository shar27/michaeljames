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

export default function Developers() {
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
              Do you own land with development potential?
            </h1>
            <p className="py-6 font-bold">
              We have extensive experience and a team of experts that can help
              evaluate your land and assist in getting planning approval.
            </p>
            <Button text="Sell your land" color="text-white" bgColor="bg-black" />
          </div>
        </div>
      </div>
      {/* process */}
      <div className="bg-black text-white h-32 p-5 text-5xl text-center font-bold">
        <h2>Our Criteria</h2>
      </div>
      <div className="bg-black text-white text-center text-2xl">
        If you received a letter please{" "}
      <Link href="http://landoptionsltd.com/#"><span className="text-blue-300 text-underline">Click Here</span> </Link>to make contact.
      </div>
      {/* steps */}
      <div className="bg-black  ">
        <div className=" text-white h-auto p-5  text-center font-bold  grid grid-cols-1 lg:grid-cols-3 ">
          <div>
            <h3 className="text-5xl">01</h3>
            <h3 className="text-2xl mt-3">What we are looking for</h3>
            <ul className="mt-4 p-4  list-none text-left">
              <li>A large rear or side garden?</li>
              <li>A house or bungalow situated on a large or corner plot?</li>
              <li>A neglected or dilapidated building?</li>
              <li>Storage land or garage(s)?</li>
              <li>Commercial property, such as a pub, petrol station, etc.?</li>
              <li>
                A property with the potential to be converted into offices,
                hotels, guest houses, or B&Bs?
              </li>
              <li>Any property in need of significant modernisation?</li>
              <li>Any property in need of extensive refurbishment?</li>
            </ul>
          </div>
          <div>
            <h3 className="text-5xl">02</h3>
            <h3 className="text-2xl mt-3">
              Lets meet and discuss your options
            </h3>
            <p className="mt-4 p-4  text-left">
              We can have an informal, no-obligation chat about how we might be
              able to help. We guarantee there will never be any pressure to
              move forward. We’ll simply go over the various options available
              for selling your land for development, including:
            </p>
            <ul className="mt-4 p-4  list-none text-left">
              <li>How much land you’re considering selling</li>
              <li>Timescales that suit you best</li>
              <li>How quickly you’d like the sale to go through</li>
              <li>
                Whether you’d prefer to keep part of the land or an existing
                property
              </li>
              <li>
                If you’d like us to obtain planning permission while the land
                stays in your ownership
              </li>
              <li>How much your land could be worth to us</li>
              <li>
                Who covers all the fees (Spoiler alert... We or our development
                partners do)
              </li>
            </ul>
            <p className="mt-4">
              <Link href="/">
              <Button text="Click here to book" color="text-white" bgColor="bg-black" />
              </Link>
            </p>
          </div>
          <div>
            <h3 className="text-5xl">03</h3>
            <h3 className="text-2xl mt-3">What can we offer?</h3>

            <ul className="mt-4 p-2 list-none text-left">
              <li>
                Collaborate with you to assess the value of your land, with no
                obligation to move forward.
              </li>
              <li>Maintain complete transparency and honesty at all times.</li>
              <li>
                Work within a timeline that suits your needs, whether you're
                after a quick sale or planning for the long term.
              </li>
              <li>
                Offer to cover your legal fees if needed (agreed on a
                case-by-case basis).
              </li>
              <li>Ensure open communication throughout the entire process.</li>
              <li>
                Flexibly accommodate any requests to retain parts of your land
                or include building works as part of the deal.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}
