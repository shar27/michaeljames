"use client";
import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
function Agents() {
  const images = ["/room.jpeg", "/livingroom.jpeg", "/bedroom2.jpeg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  // This function will advance the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);
  return (
    <div>
      <NavBar />
      <div className="min-h-screen">
        <h1 className="text-white text-center text-5xl bg-black">Agents</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 p-10">
          <div className="content-section">
            <h2 className="text-3xl font-bold  mb-4">
              Making your job easier for you
            </h2>

            <p className="text-lg mb-6">
              I’m always looking to work alongside letting agents. I’m in a
              position to take on multiple properties and offer your landlords a
              hassle-free solution.
            </p>

            <h3 className="text-2xl font-bold mb-2 ">
              “Why you should work alongside me”
            </h3>

            <p>
              As a letting agent, collaborating with someone like myself has
              proven to be mutually advantageous. Whilst streamlining your
              workload by essentially becoming a self managing tenant, this
              position won’t interfere with your management fee or tenant
              finders fee. It will also allow you as an agent to offer a new
              valuable services to your landlords, enhancing their trust in you
              to cater to their needs as a landlord. By working together, we can
              create an efficient and effective property management ecosystem
              that benefits everyone involved.
            </p>
          </div>

          <div className="flex justify-center w-full h-auto p-10">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
<style jsx>{`
  .slideshow-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
  }

  .slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px; /* Adjust as needed */
  }
`}</style>;

export default Agents;
