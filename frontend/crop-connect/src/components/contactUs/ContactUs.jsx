import React from 'react';
import ContactForm from './ContactForm';
import CompanyInfo from './CompanyInfo';

const ContactUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
        <p className="text-center text-gray-500 mb-6">
        Have a query or any problems? Don’t hesitate to contact us — we will get back to you!
        </p>
        <ContactForm />
        <CompanyInfo />
      </div>
    </div>
  );
};

export default ContactUs;
