import React from 'react'
import Button from './Button'
import Link from 'next/link'

function Paralax() {
  return (
    <div>
    <div
    className="hero min-h-screen bg-fixed "
    style={{
      backgroundImage: "url(https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBhcnRtZW50fGVufDB8MXwwfHx8Mg%3D%3D)",
    }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Guaranteed Rent?</h1>
        <p className="mb-5">
        Are you Landlord or Agent?  Find out more about how I can help create an ideal scenario for you below
        </p>
        <Link href="/Contact">
        <Button text={'Get Started'} bgColor={'bg-black'} color={'text-white'} padding={'p-3'}/>
        </Link>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Paralax