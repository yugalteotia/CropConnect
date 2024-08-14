import React from 'react';

const CompanyInfo = () => {
  return (
    <div className="mt-10 space-y-4">
      <div className="flex items-center text-sm text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M12.293 2.293a1 1 0 011.414 0L16 4.586V7h1a1 1 0 011 1v3.03a7 7 0 11-9.8 0V8a1 1 0 011-1h1V4.586l2.293-2.293a1 1 0 010-1.414zM12 4.586l-2 2V7h4V6.586l-2-2z" />
          <path d="M5.707 13.293a1 1 0 010-1.414l1.586-1.586a1 1 0 011.414 0l1.586 1.586a1 1 0 01-1.414 1.414L8 13.414V17h4v-3.586l-.293-.293a1 1 0 011.414-1.414l1.586 1.586a1 1 0 010 1.414L11 18.414V19h-2v-.586l-2.293-2.293a1 1 0 01-.414-.707V13z" />
        </svg>
        <p>Themeberg LLC<br />Tax id: USXXXXXXXX</p>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V7h2v3z" />
        </svg>
        <p>SILVER LAKE, United States<br />1941 Late Avenue, Zip Code/Postal code:03875</p>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V7h2v3z" />
        </svg>
        <p>Call us: <br />+1 (646) 786-5060</p>
      </div>
    </div>
  );
};

export default CompanyInfo;
