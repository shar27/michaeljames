import React,{useState} from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function NavBar() {

    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <div className="flex items-center justify-between   bg-black text-white  z-100 p-4">
    <a href="/">
      {/* <Image  src={logo} alt="logo" width={100} height={100} className="w-full max-w-md " /> */}
      <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 
        1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 
        1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
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
          <ul className="MENU-LINK-MOBILE-OPEN list-none flex flex-col items-center 
          justify-between min-h-[250px] bg-black w-full ">
            <li className="list-none border-b border-gray-400 my-8 uppercase">
              <a className="list-none text-white" href="/About">About</a>
            </li>
           
            <li className="list-none text-white border-b border-gray-400 my-8 uppercase">
              <a className="list-none text-white" href="/Services">Services</a>
            </li>
            <li className="list-none text-white border-b border-gray-400 my-8 uppercase">
              <a className="list-none text-white" href="/#casestudies">Case Studies</a>
            </li>
            <li className="list-none text-white border-b border-gray-400 my-8 uppercase">
              <a className="list-none text-white" href="/Blog">Blog</a>
            </li>
            <li className="list-none text-white border-b border-gray-400 my-8 uppercase">
              <a className="list-none text-white" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </section>
      {/* large screen */}
      <Menu as="ul" className="relative inline-block text-left">
      <ul className="DESKTOP-MENU hidden lg:flex justify-between text-xl
      
      ">
        <li className="list-none p-2">
          <a className="text-white" href="/About">About</a>
        </li>
        <MenuButton className="inline-flex
        
        gap-x-1.5 
        p-2 border-none
        text-white 
        ">
          Portfolio Building
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
        <MenuItems
        transition
        className="absolute left-10 z-10 mt-10 w-auto 
        origin-top-right rounded-md bg-white 
        shadow-lg ring-1 ring-black ring-opacity-5 
        transition focus:outline-none 
        data-[closed]:scale-95 
        data-[closed]:transform data-[closed]:opacity-0 
        data-[enter]:duration-100 
        data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
      
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 
              data-[focus]:text-gray-900"
            >
              Bespoke-sourcing
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
             MJ property deals HUB
            </a>
          </MenuItem>
          </MenuItems>
          
          
          <MenuButton className="inline-flex
        
        gap-x-1.5 
        p-2 border-none
        text-white 
        ">
          Land acquisitions
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
        <MenuItems
        transition
        className="absolute left-10 z-10 mt-10 w-auto 
        origin-top-right rounded-md bg-white 
        shadow-lg ring-1 ring-black ring-opacity-5 
        transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
      
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 
              data-[focus]:text-gray-900"
            >
              landowner
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
             landowner-0
            </a>
          </MenuItem>
          </MenuItems>
        <li className="list-none p-2">
          <a className="text-white bg-black border 
          border-white p-3 w-48 text-xl font-bold" href="/#contact">INVEST WITH US</a>
        </li>
      </ul>
      </Menu>
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
  )
}

export default NavBar