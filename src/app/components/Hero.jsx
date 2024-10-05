import React from 'react'
import Link from 'next/link'
import whatsapp from './svg/whatsapp.svg'
import Image from 'next/image'
import profile from '../components/img/profile.jpg'
function hero() {
    
  return (
    <div className="hero bg-black text-white min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <Image 
        src={profile} // relative path from the public directory or static path in next.js
        alt="Profile Image" 
         className="w-full lg:w-72 rounded-lg shadow-2xl"
       
        
      />
    
    <div>
      <h1 className="text-5xl font-bold">Michael James</h1>
      <h2 className="py-6 text-2xl ">
      Property Investor, Property Trader, Entrepreneur
      </h2>
      <button className="bg-white border 
      border-black 
      text-black 
      text-xl
      rounded-sm  p-4 font-bold w-48 animate-pulse">Work with me</button>
    </div>
    <Link href="https://chat.whatsapp.com/E5IRjrEMJJgFyeqZyRAi7I">
        <Image
          className="cursor-pointer fixed bottom-2 right-10 lg:right-12 z-100 w-16 h-16 "
          src={whatsapp}
          width={50}
          height={50}
        />
      </Link>
  </div>
</div>
  )
}

export default hero