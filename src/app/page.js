"use client";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Badges from "./components/Badges";
import Sections from "./components/Sections";
import Paralax from "./components/Paralax";
import Footer from "./components/Footer";
import Deals from "./components/Deals";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const [showArrow, setShowArrow] = useState(false);

  const title = "Michael James Property";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <title>{title}</title>
      <NavBar />
      <Hero />
      <Badges />
      <Deals />
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-yellow-300 z-100 text-black p-1 lg:p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
      <Sections />
      <Paralax />
      <Footer />
    </div>
  );
}
