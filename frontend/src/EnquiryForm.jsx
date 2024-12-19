import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'react-phone-number-input';
import emailjs from '@emailjs/browser';
import './EnquiryForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [type_of_shipment, setType_of_shipment] = useState('');
  const [designation, setDesignation] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidPhoneNumber(phone)) {
      setError('Invalid phone number format.');
      return;
    }
    setError('');
    setSuccess('');

    const templateParams = {
      name,
      phone,
      email,
      message,
      type_of_shipment,
      designation,
    };

    emailjs
      .send(
        'service_qvejz4q',     // Replace with your Service ID
        'template_dsriave',    // Replace with your Template ID
        templateParams,
        'DQMTMJsXJ4BENCHQj'      // Replace with your Public Key
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSuccess('Your message has been sent successfully.');
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        setType_of_shipment('');
        setDesignation('');
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        setError('Failed to send the message. Please try again later1.');
      });
  };

  return (
    <div className="max-w-8xl mx-auto p-6 bg-gray-100 rounded-md mt-4 mb-4">
      <div className="heading text-center">drop a line</div>

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 leading-[1.25em] text-[#2a2a2a] m-0">
        We're Always Here for You
      </h1>
      <p className="leading-[26px] font-normal text-[#797979] mt-0 mb-[15px] mx-0 text-center">
        Please do not hesitate to contact us if you require further information about our logistic service.
      </p>

      <div className="max-w-6xl mx-auto p-4 bg-white border rounded shadow">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mt-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <input
              className="p-4 border rounded flex-1"
              type="text"
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="p-4 border rounded flex-1"
              type="text"
              placeholder="Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 mb-4">
            <input
              className="p-4 border rounded flex-1"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <PhoneInput
              className="p-4 border rounded flex-1"
              placeholder="Phone Number"
              value={phone}
              onChange={setPhone}
              required
            />
            <select
              className="p-4 border rounded flex-1"
              value={type_of_shipment}
              onChange={(e) => setType_of_shipment(e.target.value)}
              required
            >
              <option value="">Type Of Shipment</option>
              <option value="Part Load">Part Load</option>
              <option value="Full Load">Full Load</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <textarea
            className="col-span-1 p-2 border rounded mt-4 mb-4 py-10"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <div className="flex items-center justify-center">
            <button className="bg-green-500 text-white py-2 px-4 text-sm rounded w-40" type="submit">
              Mail Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
