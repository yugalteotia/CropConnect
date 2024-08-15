import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaRegIdCard } from 'react-icons/fa'; // Importing icons from react-icons

const CompanyInfo = () => {
  return (
    <div className="mt-10 space-y-4">
      <div className="flex items-center text-sm text-gray-500">
        <FaRegIdCard className="h-5 w-5 mr-2" />
        <p>Crop Connect Pvt Ltd.<br />GST No: INDXXXXXXXX</p>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <FaMapMarkerAlt className="h-5 w-5 mr-2" />
        <p>Inovation Park, Pune<br />Panchavati Pashan, Zip Code: 440387</p>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <FaPhone className="h-5 w-5 mr-2" />
        <p>Call us: <br />+91 1800-1800-90</p>
      </div>
    </div>
  );
};

export default CompanyInfo;
