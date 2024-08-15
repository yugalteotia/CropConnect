import React from 'react';

const InputField = ({ label, placeholder, type = 'text' }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
