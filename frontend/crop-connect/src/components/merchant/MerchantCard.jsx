// import React from 'react';
// import Button from './Button';

// const MerchantCard = ({ image, title, price, beds, baths, reviews }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden w-72 m-4">
//       <img src={image} alt={title} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
//         <h4 className="text-gray-600 mt-2">{beds} BEDS • {baths} BATHS</h4>
//         <h3 className="text-lg font-bold mt-2">{title}</h3>
//         <p className="text-gray-700">${price} / wk</p>
//         <div className="mt-3 flex items-center">
//           <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
//           <span className="ml-2 text-gray-600">{reviews} reviews</span>
//         </div>
//       </div>
//       <div className="p-4">
//         <Button />
//       </div>
//     </div>
//   );
// };

// export default MerchantCard;



import React from 'react';

const MerchantCard = ({ image, title, price, qty, ctg, reviews }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-72 mb-6 m-3">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mt-2">{title}</h3>
        <p className="text-gray-700">₹{price}/Kg</p>
        <h4 className="text-gray-600 mt-2">Quantity: {qty}</h4>
        <h4 className="text-gray-600 mt-2">Category: {ctg}</h4>
        <div className="mt-3 flex items-center">
          <span className="text-gray-600">Farmer: {reviews}</span>
        </div>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default MerchantCard;