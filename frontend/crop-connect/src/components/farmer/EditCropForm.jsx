import React ,{useEffect} from 'react';

const EditCropForm = ({ cropData, categoriesName, onUpdate, onCancel }) => {
  const [formData, setFormData] = React.useState({
    cropName: cropData.cropName,
    cropPrice: cropData.price,
    cropQuantity: cropData.quantity,
    cropCategory: categoriesName[cropData.categoryId],
    cropImage: cropData.imageUrl,
  });

  useEffect(() => {
    setFormData({
      id: cropData.id,
      cropName: cropData.cropName,
      cropPrice: cropData.price,
      cropQuantity: cropData.quantity,
      cropCategory: categoriesName[cropData.categoryId],
      cropImage: cropData.imageUrl,
    });
  }, [cropData, categoriesName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data---->",formData)
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cropName">
          Crop Name
        </label>
        <input
          disabled
          name="cropName"
          value={formData.cropName}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cropCategory">
          Category
        </label>
        <input
          disabled
          name="cropCategory"
          value={formData.cropCategory}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cropQuantity">
          Quantity
        </label>
        <input
          name="cropQuantity"
          type="number"
          value={formData.cropQuantity}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cropPrice">
          Price
        </label>
        <input
          name="cropPrice"
          type="number"
          value={formData.cropPrice}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditCropForm;
