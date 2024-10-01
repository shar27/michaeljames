"use client"; // Required for client-side logic

import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your HubSpot Portal ID and Form GUID
    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
    const formGuid = process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID;

    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    const body = {
      fields: [
        { name: 'firstname', value: formData.firstname },
        { name: 'lastname', value: formData.lastname },
        { name: 'email', value: formData.email },
        { name: 'message', value: formData.message },
      ],
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setSuccessMessage('Thank you for your submission!');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        setErrorMessage('There was a problem with your submission. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="p-2 lg:p-20">
      <h1 className="text-2xl mb-5 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-4">
          <label className="block text-white">First Name</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Last Name</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
            
        </div>
        <section className="flex justify-center">
        <button type="submit" className="w-full lg:w-48 p-4 text-xl 
        text-white
        bg-black border border-white font-bold rounded-sm">Submit</button>
        </section>
      </form>
      {successMessage && <p className="mt-5 text-green-500">{successMessage}</p>}
      {errorMessage && <p className="mt-5 text-red-500">{errorMessage}</p>}
    </div>
  );
}

export default ContactForm;
