import React from 'react';

const CropBox = ({ 
  cropName, 
  cropQuantity, 
  cropCategory, 
  cropPrice, 
  cropImage, 
  onEdit, 
  onDelete 

  }) => {
  return (

    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[350px] mb-6 m-10"> 

      <div className="bg-green-500 p-4">
        <h1 className="text-3xl font-bold text-black">
          {cropName}
        </h1>
      </div>
      {/* Crop Image */}
      <img 
        src={cropImage} 
        alt={cropName} 
        className="w-full h-48 object-cover" 
      />

      <div className="p-4">
          {/* Quantity */}
          <p className="text-2xl text-black mt-1">
            Quantity : {cropQuantity}
          </p>
          {/* Category */}
          <p className="text-2xl text-black mt-1">
            Category : {cropCategory}
          </p>
          {/* Price */}
          <p className="text-2xl text-black mt-1">
            Price : ₹{cropPrice}
          </p>
          
          <div className="mt-4 flex justify-between">
            {/* Edit Button */}
            <button 
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors" 
              onClick={onEdit}
            >
              Edit
            </button>
            {/* Delete Button */}
            <button 
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors" 
              onClick={onDelete}
            >
              Delete
            </button>
        </div>

      </div>
    </div>
  );
};

export default CropBox;

