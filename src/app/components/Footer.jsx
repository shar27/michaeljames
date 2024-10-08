"use client"
import React, {useEffect, useState} from 'react'
import Link from 'next/link';
import { fetchLogo } from "@/lib/contentful";
import { faFacebook, faLinkedin, faXTwitter, faSqaureXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
  const [logo, setLogo] = useState([]); // State to store fetched land deals
  // Fetch land deals
  useEffect(() => {
    const getLogo = async () => {
      const logo = await fetchLogo();
      setLogo(logo);
    };
    getLogo();
  }, []); // Runs only once when component mounts
  const title = 'Michael James Property';
    const currentYear = new Date().getFullYear();
  return (
    <>
    <footer className="footer bg-black text-white  p-10">
  <aside>
  {logo.map((l) => (
        <img    src={`https:${l.fields.logo.fields.file.url}`} 
        alt="logo" className="w-72" />
       ))}
        


    <p className="text-sm text-wrap">
    Michael James Investment Group LTD
      <br />
     
    
    </p>
   
  </aside>
  <nav>
    <h6 className="footer-title">Useful Links</h6>
    <Link href="/Compliance" className="link link-hover">Compliance</Link>
    <Link href="/About" className="link link-hover">About</Link>
    <Link href="/BespokeSourcing" className="link link-hover">Sourcing Services</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Contact</h6>
    <Link href="/Compliance" className="link link-hover"> T: 07763868132</Link>
    <Link href="/Compliance" className="link link-hover">  E: Michael @michaeljamesproperty.co.uk</Link>
    <Link href="/Contact" className="link link-hover">Contact us</Link>
 
  </nav>
  <nav>
    <h6 className="footer-title">Information</h6>
    <Link href="/PrivacyPolicy" className="link link-hover">Privacy Policy</Link>
    <Link href="/RefundPolicy" className="link link-hover">Refund Policy</Link>
    <Link href="/ComplaintsProcedure" className="link link-hover">Complaints Procedure</Link>
  </nav>
  
</footer>
<div className="text-center text-black bg-white font-bold "><p>© {title} {currentYear}  <Link href="https://www.facebook.com/profile.php?id=100000656542151">
          <FontAwesomeIcon icon={faFacebook} size="lg" className="mx-2 mt-2"  />
          </Link>
          <FontAwesomeIcon icon={faLinkedin} size="lg" className="mx-2 mt-2"  />
          <FontAwesomeIcon icon={faXTwitter} size="lg" className="mx-2 mt-2"  />
          <FontAwesomeIcon icon={faYoutube} size="lg" className="mx-2 mt-2"  /></p></div>
</>
  )
}

export default Footer