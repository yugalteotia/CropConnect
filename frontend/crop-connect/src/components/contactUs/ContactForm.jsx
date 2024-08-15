import React from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';

const ContactForm = () => {
  return (
    <form className="space-y-6">
      <div className="flex gap-4">
        <InputField label="First Name" placeholder="Your Name" />
        <InputField label="Last Name" placeholder="Your Last Name" />
      </div>
      <InputField label="Your email" placeholder="name@gmail.com" type="email" />
      <InputField label="Phone Number" placeholder="+91 999 999 9999" type="tel" />
      <TextAreaField label="Your message" placeholder="Leave a comment..." />
      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Send message
        </button>
      </div>
      <p className="text-xs text-gray-400 mt-2">
        By submitting this form you agree to our <a href="#" className="text-blue-600">terms and conditions</a> and our <a href="#" className="text-blue-600">privacy policy</a>.
      </p>
    </form>
  );
};

export default ContactForm;
