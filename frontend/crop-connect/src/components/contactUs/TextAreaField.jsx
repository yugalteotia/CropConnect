import React from 'react';

const TextAreaField = ({ label, placeholder }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <textarea
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        rows="4"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextAreaField;
