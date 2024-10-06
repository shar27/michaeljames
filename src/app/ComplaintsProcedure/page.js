import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Link from 'next/link';

function ComplaintsProcedure() {
  return (
    <>
    <NavBar/>
    
    <div className="p-4">
      <h1 className="text-5xl text-center">Complaints Procedure</h1>
      <p className="text-xl">
        Michael James Investment Group Ltd (Trading as: Michael James Property)
      </p>
      <p className="text-xl">Refund Policy Last Updated: 28/09/2023</p>

      <h2 className="text-4xl mt-5">COMPLAINTS PROCEDURE</h2>
      <p className="text-xl">
        Michael James Property is fully committed to providing the best quality service to clients in the property investment and buying industry.
      </p>
      <p className="text-xl">
        Nevertheless, we understand there will be times when mistakes occur and in the majority of cases a complaint will help us improve our service. If you feel that Michael James Property or one of its employees have made a mistake or find that any part of our service is not to your satisfaction, please endeavour to let us know.
      </p>

      <h2 className="text-4xl mt-5">HOW TO MAKE A COMPLAINT</h2>
      <p className="text-xl">
        If you have a complaint, please put it in writing, including as much detail as possible. We will then respond in line with the time-frames set out below (if you feel we have not sought to address your complaints within eight weeks, you may be able to refer your complaint to the Property Redress Scheme to consider without our final viewpoint on the matter). If you need to make a complaint, the address for correspondence is:
      </p>
      <ul className="p-5">
        <li className="list-disc p-6">Email: <Link href="mailto:michael@michaeljamesproperty.co.uk">
        michael@
        michaeljamesproperty.co.uk</Link></li>
        <li className="">
          Or you can post a letter to:
          <ul className="">
            <li className=" p-6">Michael James Property <br/> 20 Wenlock Road, London, N1 7GU, England</li>
           
          </ul>
        </li>
      </ul>

      <p className="text-xl">
        Even if you have already made your complaint verbally to a representative at Michael James Property, you will still need to issue your complaint in writing.
      </p>

      <h2 className="text-4xl mt-5">What will happen next?</h2>
      <ul className="p-5">
        <li className="list-disc p-6">We will send you a letter or email acknowledging receipt of your complaint within three working days of receiving it.</li>
        <li className="list-disc p-6">
          We will then investigate your complaint. This will normally be dealt with by the office manager who will review your file and speak to the member of staff who dealt with you. A formal written outcome of our investigation will be sent to you within 15 working days of sending the acknowledgement email or letter.
        </li>
        <li className="list-disc p-6">
          If, at this stage, you are still not satisfied, you should contact us again and we will arrange for a separate review to take place by a senior member of staff.
        </li>
        <li className="list-disc p-6">We will write to you within 15 working days of receiving your request for a review, confirming our final viewpoint on the matter.</li>
        <li className="list-disc p-6">
          If you are still not satisfied after the last stage of the in-house complaint procedure (or more than 8 weeks has elapsed since the complaint was first made) you can request an independent review from Property Redress Scheme without charge.
        </li>
      </ul>

      <h2 className="text-4xl mt-5">If you are a customer / general public:</h2>
      <p className="text-xl">
        Property Redress Scheme
      </p>
      <ul className="p-5">
        <li className="list-disc p-6">Premiere House,</li>
        <li className="list-disc p-6">1st Floor,</li>
        <li className="list-disc p-6">Elstree Way,</li>
        <li className="list-disc p-6">Borehamwood,</li>
        <li className="list-disc p-6">WD6 1JH.</li>
      </ul>

      <h2 className="text-4xl mt-5">Contact Information:</h2>
      <ul className="p-5">
        <li className=" p-6 font-bold">Tel: 0333 321 9418</li>
        <li className=" p-6 font-bold">Email: <a href="mailto:info@theprs.co.uk">info@theprs.co.uk</a></li>
        <li className=" p-6 font-bold">Web: <a href="https://www.theprs.co.uk" target="_blank" rel="noopener noreferrer">www.theprs.co.uk</a></li>
      </ul>

      <h2 className="text-4xl mt-5">Please note the following:</h2>
      <p className="text-xl">
        You will need to submit your complaint to Property Redress Scheme within 12 months of receiving our final viewpoint letter, including any evidence to support your case. Property Redress Scheme requires that all complaints are addressed through this in-house complaint’s procedure before being submitted for an independent review.
      </p>
    </div>
    <Footer/>
    </>
  );
}

export default ComplaintsProcedure;
