import React from 'react'

function Footer() {
  return (
    <footer className="footer bg-black text-white  p-10 mt-24 lg:mt-0">
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
    <a className="link link-hover">Compliance</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Sourcing Services</a>
  </nav>
  <nav>
    <h6 className="footer-title">Contact</h6>
    <a className="link link-hover"> T: 07763868132</a>
    <a className="link link-hover">  E: Michael @michaeljamesproperty.co.uk</a>
 
  </nav>
  <nav>
    <h6 className="footer-title">Information</h6>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Refund Policy</a>
    <a className="link link-hover">Complaints Procedure</a>
  </nav>
</footer>
  )
}

export default Footer