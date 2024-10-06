import React from 'react'
import Link from 'next/link';
function Footer() {
  const title = 'Michael James Property';
    const currentYear = new Date().getFullYear();
  return (
    <>
    <footer className="footer bg-black text-white  p-10">
  <aside>
  <p className="text-2xl font-bold">MichaelJames</p> 
    <p className="text-sm text-center font-bold ml-16">Property</p>


    <p className="text-sm text-wrap">
    Michael James Investment Group LTD
      <br />
     
    
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Useful Links</h6>
    <Link href="/Compliance" className="link link-hover">Compliance</Link>
    <Link href="/Compliance" className="link link-hover">Design</Link>
    <Link href="/Compliance" className="link link-hover">About</Link>
    <Link href="/Compliance" className="link link-hover">Sourcing Services</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Contact</h6>
    <Link href="/Compliance" className="link link-hover"> T: 07763868132</Link>
    <Link href="/Compliance" className="link link-hover">  E: Michael @michaeljamesproperty.co.uk</Link>
 
  </nav>
  <nav>
    <h6 className="footer-title">Information</h6>
    <Link href="/Compliance" className="link link-hover">Privacy Policy</Link>
    <Link href="/Compliance" className="link link-hover">Refund Policy</Link>
    <Link href="/Compliance" className="link link-hover">Complaints Procedure</Link>
  </nav>
  
</footer>
<div className="text-center text-black bg-white font-bold "><p>© {title} {currentYear}</p></div>
</>
  )
}

export default Footer