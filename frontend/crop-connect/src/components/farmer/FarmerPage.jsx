import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import CropBox from './CropBox'; 

const FarmerPage = () => {
  const [cropData, setCropData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formValues, setFormValues] = useState({
    id: null,
    name: "",
    price: "",
    imageUrl: "",
    quantity: "",
    categoryId: "", // For the category dropdown
    farmerId: 1, // This should come from the logged-in user's context or state
  });

  // const crops = [
  //   {
  //     id: 1,
  //     name: 'Jowar',
  //     price: '$10',
  //     imageUrl: 'https://cdn-magazine.nutrabay.com/wp-content/uploads/2023/12/cropped-jowar.jpg',
  //   },
  // ];

  useEffect(() => {
    // Fetch categories when the component mounts
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data);
        console.log("All categories ----->" , response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    // Fetch crops when the component mounts
    const fetchCrops = async () => {
      try {
        const response = await axios.get("/api/crops");
        setCropData(response.data);
        console.log("Crops ---->",response.data);
      } catch (error) {
        console.error("Error fetching crops:", error);
      }
    };

    fetchCategories();
    fetchCrops();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formValues,
        imageUrl: formValues.imageUrl || "default-image-url", // Ensure imageUrl is not null
      };

      if (formValues.id === null) {
        await axios.post("/api/crops", payload);
      } else {
        await axios.put(
          `/api/crops/${formValues.id}`,
          payload
        );
      }
      // const response = await axios.get("http://localhost:8080/crops");
      // setCropData(response.data);
      resetForm();
    } catch (error) {
      console.error("Error saving crop:", error);
    }
  };

  const resetForm = () => {
    setFormValues({
      id: null,
      name: "",
      price: "",
      imageUrl: "",
      quantity: "",
      categoryId: "", // Reset categoryId
      farmerId: "", // Set the farmer ID here if needed
    });
  };

  // Handle edit operation
  const handleEdit = async (id) => {
    const cropToEdit = cropData.find((crop) => crop.id === id);
    if (cropToEdit) {
      setFormValues(cropToEdit);
    }
  };

  // Handle delete operation
  const handleDelete = async (id) => {
    console.log("Id------>>>>",id)
    try {
      await axios.delete(`/api/crops/${id}`);
      // Fetch updated crop data
      const response = await axios.get("/api/crops");
      setCropData(response.data);
    } catch (error) {
      console.error("Error deleting crop:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Farmer Dashboard</h2>

      {/* Add New Crop Form */}
      <div className="card mt-4">
        <div className="card-header">Add New Crop</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="cropName" className="form-label">
                Crop Name
              </label>
              <input
                type="text"
                className="form-control"
                id="cropName"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                placeholder="Enter crop name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="categoryId" className="form-label">
                Category
              </label>
              <select
                className="form-select"
                id="categoryId"
                name="categoryId"
                value={formValues.categoryId}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="imageUrl" className="form-label">
                Image URL
              </label>
              <input
                type="text"
                className="form-control"
                id="imageUrl"
                name="imageUrl"
                value={formValues.imageUrl}
                onChange={handleInputChange}
                placeholder="Enter image URL"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  value={formValues.quantity}
                  onChange={handleInputChange}
                  placeholder="Enter quantity"
                  required
                />
                <span className="input-group-text">units</span>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={formValues.price}
                  onChange={handleInputChange}
                  placeholder="Enter crop price"
                  required
                />
                <span className="input-group-text">per unit</span>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              {formValues.id === null ? "Submit" : "Update"}
            </button>
          </form>
        </div>
      </div>

      {/* Crop List as Cards */}
      <div className="mt-5">
        <h3>Manage Your Crops</h3>
        <div className="row" style={{ gap: '10 px' }}>
          {cropData.map((crop) => (

            <div className="col-md-4 mb-4" key={crop.id}>
              <CropBox
                cropName={crop.cropName}
                cropPrice={crop.price}
                cropImage={crop.imageUrl}
                cropQuantity={crop.quantity}
                cropCategory={crop.categoryId}
                onEdit={() => handleEdit(crop.id)}
                onDelete={() => handleDelete(crop.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmerPage;
