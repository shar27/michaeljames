import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
function Compliance() {
  return (
    <div className="">
        <NavBar/>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 p-0 lg:p-10">
            <div className="shadow-lg p-2 lg:p-20 ">
                <h2 className="text-5xl">HM Revenue & Customs</h2>
                <h3 className="text-4xl">Anti Money Laundering</h3>
                <p>We are fully registered with <span className="font-bold">HMRC</span> for <span className="font-bold">Anti Money Laundering</span> under reference number:<span className="font-bold">XNML00000191566</span> </p>
                <p>Our nominated Officer is <span className="font-bold">Michael Jordan </span> who can be contacted at <span className="font-bold">michael@michaeljamesproperty.co.uk</span></p>
            </div>
            <div className="shadow-lg p-2 lg:p-20 ">
                <h2 className="text-5xl">Property Redress Scheme
                </h2>
                {/* <h3 className="text-4xl">Anti Money Laundering</h3> */}
                <p>We are fully registered with the PRS - a fair and impartial redress scheme for property agents. The PRS will handle any complaints, should we not be able to resolve them</p>
                <p>Membership No: <span className="font-bold">PRS041902</span></p>
            </div>
            <div className="shadow-lg p-2 lg:p-20 ">
                <h2 className="text-5xl">Information Commissioner's Office  </h2>
                {/* <h3 className="text-4xl">Anti Money Laundering</h3> */}
                <p>We are registered with the <span className="font-bold" >Information Commissioner's Office</span> under reference number :<span className="font-bold">C1405495</span>  </p>
                <p>We use a <span className="font-bold">GDPR</span> compliant <span className="font-bold">CRM</span> platform to hold any data you submit using our online forms. We will never disclose your personal information to any third parties.</p>
            </div>
            <div className="shadow-lg p-2 lg:p-20 ">
                <h2 className="text-5xl">Professional Indemnity Insurance</h2>
                {/* <h3 className="text-4xl">Anti Money Laundering</h3> */}
                <p>We are Fully Insured with Professional Indemnity Insurance</p>
               <ul>
                <li>Insurer : <span className="font-bold">Prosure Solutions Limited</span>
                </li>
                <li>Policy Number: <span className="font-bold"> 121789557</span></li>
               </ul>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Compliance;