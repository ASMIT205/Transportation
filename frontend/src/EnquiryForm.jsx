import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'react-phone-number-input';
import './EnquiryForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidPhoneNumber(phone)) {
      setError('Invalid phone number format.');
      return;
    }
    setError('');

    console.log({ name, phone, email, message });

    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
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
          {/* Row for Name and Company Name */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <input
              className="p-4 border rounded flex-1"
              type="text"
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="p-4 border rounded flex-1"
              type="text"
              placeholder="Designation"
            />
          </div>

          {/* Row for Email, Phone, and Enquire About */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 mb-4">
            <input
              className="p-4 border rounded flex-1"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PhoneInput
              className="p-4 border rounded flex-1"
              placeholder="Phone Number"
              value={phone}
              onChange={setPhone}
            />
            <select className="p-4 border rounded flex-1">
              <option>Enquire About</option>
              <option>TR Facility</option>
              <option>Sea Cargo</option>
              <option>Air Cargo</option>
            </select>
          </div>

          {/* Row for Message Textarea */}
          <textarea
            className="col-span-1 p-2 border rounded mt-4 mb-4 py-10"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          {/* Row for SEND MESSAGE Button */}
          <div className="flex items-center justify-center">
            <button className="bg-green-500 text-white py-2 px-4 text-sm rounded w-40">
              Mail US
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
