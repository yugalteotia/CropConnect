import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useFormValues } from '../../hooks/useFormValues';
// import { useFormValues } from './useFormValues';

const CropFormPage = () => {
  const { formValues, setFormValues } = useFormValues();
  const [categories, setCategories] = React.useState([]);
  const formRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();

    
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formValues,
        imageUrl: formValues.imageUrl || 'default-image-url',
      };
      if (formValues.id === null) {
        await axios.post('/api/crops', payload);
      }
    //   } else {
    //     await axios.put(`/api/crops/${formValues.id}`, payload);
    //   }
      resetForm();
    } catch (error) {
      console.error('Error saving crop:', error);
    }
  };

  const resetForm = () => {
    setFormValues({
      id: null,
      cropName: '',
      price: '',
      imageUrl: '',
      quantity: '',
      categoryId: '',
      farmerId: 1,
    });
  };

  

  return (
    <div className="card">
      <div className="card-header"></div>
      <div className="card-body" ref={formRef}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="cropName" className="form-label">Crop Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="form-control"
              id="cropName"
              name="cropName"
              value={formValues.cropName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              value={formValues.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              name="imageUrl"
              value={formValues.imageUrl}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantity <span className="text-red-500">*</span></label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              name="quantity"
              value={formValues.quantity}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="categoryId" className="form-label">Category <span className="text-red-500">*</span></label>
            <select
              className="form-control"
              id="categoryId"
              name="categoryId"
              value={formValues.categoryId}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CropFormPage;




   








// import React, { useState, useRef, useEffect } from "react";
// import axios from "axios";

// const CropFormPage = () => {
//   const [categories, setCategories] = useState([]);
//   const [formValues, setFormValues] = useState({
//     id: null,
//     cropName: "",
//     price: "",
//     imageUrl: "",
//     quantity: "",
//     categoryId: "",
//     farmerId: 1,
//   });

//   useEffect(()=>{
//     // Fetch categories when the component mounts
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get("/api/categories");
//         setCategories(response.data);
//         console.log("All categories ----->", response.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };
//     fetchCategories();
//   },[])


//   const formRef = useRef(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = {
//         ...formValues,
//         imageUrl: formValues.imageUrl || "default-image-url",
//       };

//       if (formValues.id === null) {
//         await axios.post("/api/crops", payload);
//       } else {
//         await axios.put(`/api/crops/${formValues.id}`, payload);
//       }

//       resetForm();
//     } catch (error) {
//       console.error("Error saving crop:", error);
//     }
//   };

//   const resetForm = () => {
//     setFormValues({
//       id: null,
//       cropName: "",
//       price: "",
//       imageUrl: "",
//       quantity: "",
//       categoryId: "",
//       farmerId: 1,
//     });
//   };

//   return (
//     <div className="card mt-4">
//              <div className="card-header">Add New Crop</div>
//              <div className="card-body" ref={formRef}>
//                <form onSubmit={handleSubmit}>
//                  <div className="mb-3">
//                    <label htmlFor="cropName" className="form-label">
//                      Crop Name
//                    </label>
//                    <input
//                     type="text"
//                     className="form-control"
//                     id="cropName"
//                     name="cropName"
//                     value={formValues.cropName}
//                     onChange={handleInputChange}
//                     placeholder="Enter crop name"
//                     readOnly={formValues.id !== null} // Make it read-only if updating
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="categoryId" className="form-label">
//                     Category
//                   </label>
//                   <select
//                     className="form-select"
//                     id="categoryId"
//                     name="categoryId"
//                     value={formValues.categoryId}
//                     onChange={handleInputChange}
//                     disabled={formValues.id !== null} // Disable the dropdown if updating
//                     required
//                   >
//                     <option value="">Select a category</option>
//                     {categories.map((category) => (
//                       <option key={category.id} value={category.id}>
//                         {category.categoryName}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="imageUrl" className="form-label">
//                     Image URL
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="imageUrl"
//                     name="imageUrl"
//                     value={formValues.imageUrl}
//                     onChange={handleInputChange}
//                     placeholder="Enter image URL"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="quantity" className="form-label">
//                     Quantity
//                   </label>
//                   <div className="input-group">
//                     <input
//                       type="number"
//                       className="form-control"
//                       id="quantity"
//                       name="quantity"
//                       value={formValues.quantity}
//                       onChange={handleInputChange}
//                       placeholder="Enter quantity"
//                       required
//                     />
//                     <span className="input-group-text">units</span>
//                   </div>
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="price" className="form-label">
//                     Price
//                   </label>
//                   <div className="input-group">
//                     <input
//                       type="number"
//                       className="form-control"
//                       id="price"
//                       name="price"
//                       value={formValues.price}
//                       onChange={handleInputChange}
//                       placeholder="Enter crop price"
//                       required
//                     />
//                     <span className="input-group-text">per unit</span>
//                   </div>
//                 </div>
//                 <button type="submit" className="btn btn-primary mt-3">
//                   {formValues.id === null ? "Submit" : "Update"}
//                 </button>
//               </form>
//             </div>
//           </div>
//   );
// };

// export default CropFormPage;
