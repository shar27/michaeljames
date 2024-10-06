"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo from './img/logo.jpg'
import Image from "next/image";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <div className="flex items-center justify-between   bg-black text-white  z-100 p-4">
      <a href="/">
        {/* <Image  src={logo} alt="logo" height={100} width={100} className="w-full max-w-md" /> */}
        <p className="text-2xl font-bold ">MichaelJames</p> 
        <p className="text-sm text-center font-bold">Property</p>

      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 bg-white text-black"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8  bg-black"></span>
            <span className="block h-0.5 w-8  bg-black"></span>
            <span className="block h-0.5 w-8  bg-black"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul
              className="MENU-LINK-MOBILE-OPEN list-none flex flex-col items-center 
          justify-between min-h-[250px] bg-black w-full "
            >
              
            <ul className="menu menu-horizontal px-1 text-white">
           <Link href="/About">
            <li>About</li>
            </Link>
            </ul>
          

            <li>
                <details>
                  <summary className="text-white">Portfolio building</summary>
                  <ul className="p-2 text-white">
                    <li className="mt-2">
                      <Link href="BespokeSourcing">Bespoke-sourcing</Link>
                    </li>
                    <li className="mt-2">
                      <Link href="https://chat.whatsapp.com/E5IRjrEMJJgFyeqZyRAi7I">MJ property deals HUB</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="text-white">Land acquisitions</summary>
                  <ul className="p-2 text-white">
                    <li className="mt-2">
                      <Link href="Landowners">Landowner</Link>
                    </li>
                    <li className="mt-2">
                     <Link href="Developers">Developers</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <ul className="menu menu-horizontal px-1 text-white">
            <Link 
           className="text-white bg-black border 
          border-white p-3 w-52 text-xl font-bold"
              href="/Contact"
              
            >
              INVEST WITH US
              </Link>
            </ul>
          
          </div>
        </section>
        {/* large screen */}

        <ul
          className="
     
      DESKTOP-MENU hidden lg:flex justify-between
      
      "
        >
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><Link href="About">About</Link></li>
              <li>
                <details>
                  <summary>Portfolio building</summary>
                  <ul className="p-2 text-black">
                    <li>
                      <Link href="BespokeSourcing">Bespoke-sourcing</Link>
                    </li>
                    <li>
                      <Link href="https://chat.whatsapp.com/E5IRjrEMJJgFyeqZyRAi7I">MJ property deals HUB</Link>
                      
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Land acquisitions</summary>
                  <ul className="p-2 text-black">
                    <li>
                      <Link href="Landowners">Landowner</Link>
                    </li>
                    <li>
                    <Link href="Developers"> Developers</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <li className="list-none p-2">
           <Link
           className="text-white bg-black border 
          border-white p-3 w-48 text-xl font-bold"
              href="/Contact"
              
            >
              INVEST WITH US
              </Link>
          </li>
        </ul>
      </nav>
      <style>{`
    .hideMenuNav {
      display: none;
    }
    .showMenuNav {
      display: block;
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: black;
      color:black;
      z-index: 11;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  `}</style>
    </div>
  );
}

export default NavBar;
