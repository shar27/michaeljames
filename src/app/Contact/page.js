import React from 'react'
import ContactForm from '../components/ContactForm'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function page() {
  return (
    <div>
      <NavBar/>
      <h1 className="text-center text-5xl bg-black text-white p-2">Contact Us</h1>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page