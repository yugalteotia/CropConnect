import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../css/SideBar.css'; 
import '../../css/FarmerPage.css'; 

const FarmerPage = () => {
  const [iframeSrc, setIframeSrc] = useState("");

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav id="sidebar" className="bg-dark sidebar mt-12">
          <div className="position-sticky">
            <h4 className="text-center mt-3 text-xl text-white">Side Menu</h4>
            <hr />
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#"
                  onClick={() => setIframeSrc("/farmer-profile")}
                >
                  <i className="bi bi-person"></i> Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#"
                  onClick={() => setIframeSrc("/crop-form")}
                >
                  <i className="bi bi-box"></i> Add Crop
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#"
                  onClick={() => setIframeSrc("/crop-list")}
                >
                  <i className="bi bi-gear"></i> Manage Crops
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h2 className="h2">Farmer Dashboard</h2>
          </div>

          {/* Iframe Content */}
          <div className="iframe-container" style={{ height: "calc(100vh - 80px)", marginTop: "20px" }}>
            {iframeSrc ? (
              <iframe
                src={iframeSrc}
                title="Farmer Content"
                style={{ width: "100%", height: "100%", border: "none" }}
              ></iframe>
            ) : (
              <div>
                <h3>Welcome to the Farmer Dashboard</h3>
                <p>Select an option from the sidebar to get started.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FarmerPage;











// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import '../../css/SideBar.css'; 

// const FarmerPage = () => {
//   const [iframeSrc, setIframeSrc] = useState("");

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         {/* Sidebar */}
//         <nav id="sidebar" className="bg-dark sidebar mt-12">
//           <div className="position-sticky">
//             <h4 className="text-center mt-3 text-xl text-white">Side Menu</h4>
//             <hr />
//             <ul className="nav flex-column">
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   to="#"
//                   onClick={() => setIframeSrc("/farmer-profile")}
//                 >
//                   <i className="bi bi-person"></i> Profile
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   to="#"
//                   onClick={() => setIframeSrc("/crop-form")}
//                 >
//                   <i className="bi bi-box"></i> Add Crop
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   to="#"
//                   onClick={() => setIframeSrc("/crop-list")}
//                 >
//                   <i className="bi bi-gear"></i> My Crops
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </nav>

//         {/* Main Content */}
//         <main className="col-md-9 ms-sm-auto col-lg-10 px-4">
//           <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//             <h2 className="h2">Farmer Dashboard</h2>
//           </div>

//           {/* Iframe Content */}
//           <div className="iframe-container" style={{ height: "80vh" }}>
//             {iframeSrc ? (
//               <iframe
//                 src={iframeSrc}
//                 title="Farmer Content"
//                 style={{ width: "100%", height: "100%", border: "none" }}
//               ></iframe>
//             ) : (
//               <div>
//                 <h3>Welcome to the Farmer Dashboard</h3>
//                 <p>Select an option from the sidebar to get started.</p>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default FarmerPage;










// import React from "react";
// import { Link } from "react-router-dom";
// import '../../css/SideBar.css'; 


// const FarmerPage = () => {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         {/* Sidebar */}
//         <nav id="sidebar" className="bg-dark sidebar mt-12">
//           <div className="position-sticky">
//             <h4 className="text-center mt-3 text-xl text-white">Side Menu</h4>
//             <hr />
//             <ul className="nav flex-column">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/farmer-profile">
//                   <i className="bi bi-person"></i> Profile
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/crop-form">
//                   <i className="bi bi-box"></i> Add Crop
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/crop-list">
//                   <i className="bi bi-gear"></i> My Crops
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </nav>

//         {/* Main Content */}
//         <main className="col-md-9 ms-sm-auto col-lg-10 px-4">
//           <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//             <h2 className="h2">Farmer Dashboard</h2>
//           </div>

//           <div className="row">
//             {/* Quick Links */}
//             <div className="col-md-4">
//               <div className="card bg-primary text-white mb-4">
//                 <div className="card-body">
//                   <h5 className="card-title">Add New Crop</h5>
//                   <p className="card-text">Add a new crop to your inventory.</p>
//                   <Link to="/crop-form" className="btn btn-light">
//                     Go to Form
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4">
//               <div className="card bg-success text-white mb-4">
//                 <div className="card-body">
//                   <h5 className="card-title">View My Crops</h5>
//                   <p className="card-text">Manage your existing crops.</p>
//                   <Link to="/crop-list" className="btn btn-light">
//                     View Crops
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Statistics or Recent Activity */}
//           <div className="row">
//             <div className="col-md-6">
//               <div className="card mb-4">
//                 <div className="card-header">Crop Statistics</div>
//                 <div className="card-body">
//                   <p>Total Crops: 10</p>
//                   <p>Total Quantity: 500 units</p>
//                   <p>Total Revenue: ₹50,000</p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-6">
//               <div className="card mb-4">
//                 <div className="card-header">Recent Activity</div>
//                 <div className="card-body">
//                   <ul>
//                     <li>Added a new crop: Wheat</li>
//                     <li>Updated the price of Rice</li>
//                     <li>Deleted the crop: Corn</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default FarmerPage;































// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import CropBox from './CropBox'; 
// import '../../css/SideBar.css'; 

// const FarmerPage = () => {
//   const [cropData, setCropData] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [categoriesName, setCategoriesName] = useState({});
//   const [formValues, setFormValues] = useState({
//     id: null,
//     cropName: "",
//     price: "",
//     imageUrl: "",
//     quantity: "",
//     categoryId: "", // For the category dropdown
//     farmerId: 1, // This should come from the logged-in user's context or state
//   });

//   // For the edit button
//   const formRef = useRef(null);

//   useEffect(() => {
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

//     // Fetch crops when the component mounts
//     const fetchCrops = async () => {
//       try {
//         const response = await axios.get("/api/crops");
//         setCropData(response.data);
//         fetchCategoryNames(response.data);
//         console.log("Crops ---->", response.data);
//       } catch (error) {
//         console.error("Error fetching crops:", error);
//       }
//     };

//     const fetchCategoryNames = async (cropData) => {
//       console.log("IN fetch cat name", cropData);
//       const categoryMap = {};

//       for (const crop of cropData) {
//         try {
//           const response = await axios.get(`/api/categories/${crop.categoryId}`);
//           const categoryData = response.data; // No need for response.json() with axios
//           console.log("categoryData", categoryData);
//           categoryMap[crop.categoryId] = categoryData.categoryName;
//         } catch (error) {
//           console.error(`Error fetching category for ID ${crop.categoryId}:`, error);
//         }
//       }

//       setCategoriesName(categoryMap);
//     };

//     fetchCategories();
//     fetchCrops();
//   }, []);

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = {
//         ...formValues,
//         imageUrl: formValues.imageUrl || "default-image-url", // Ensure imageUrl is not null
//       };

//       if (formValues.id === null) {
//         await axios.post("/api/crops", payload);
//       } else {
//         await axios.put(`/api/crops/${formValues.id}`, payload);
//       }
//       // Fetch updated crop data
//       const response = await axios.get("/api/crops");
//       setCropData(response.data);
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
//       categoryId: "", // Reset categoryId
//       farmerId: "", // Set the farmer ID here if needed
//     });
//   };

//   // Handle edit operation
//   const handleEdit = async (id) => {
//     const cropToEdit = cropData.find((crop) => crop.id === id);
//     if (cropToEdit) {
//       setFormValues(cropToEdit);
//     }

//     if (formRef.current) {
//       formRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Handle delete operation
//   const handleDelete = async (id) => {
//     console.log("Id------>>>>", id);
//     try {
//       await axios.delete(`/api/crops/${id}`);
//       // Fetch updated crop data
//       const response = await axios.get("/api/crops");
//       setCropData(response.data);
//     } catch (error) {
//       console.error("Error deleting crop:", error);
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         {/* Sidebar */}
//         <nav id="sidebar" className="bg-dark sidebar mt-12">
//           <div className="position-sticky ">
//             <h4 className="text-center mt-3 text-xl text-white">Side Menu</h4>
//             <hr />
//             <ul className="nav flex-column">

//               <li className="nav-item">
//                 <a className="nav-link" href="/farmer-profile">
//                   <i className="bi bi-person"></i> Profile
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/my-crops">
//                   <i className="bi bi-box"></i> My Crops
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   <i className="bi bi-gear"></i> Settings
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </nav>


//         {/* Main Content */}
//         <main className="col-md-9 ms-sm-auto col-lg-10 px-4">
//           <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//             <h2 className="h2">Farmer Dashboard</h2>
//           </div>

//           {/* Add New Crop Form */}
//           <div className="card mt-4">
//             <div className="card-header">Add New Crop</div>
//             <div className="card-body" ref={formRef}>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="cropName" className="form-label">
//                     Crop Name
//                   </label>
//                   <input
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

//           {/* Crop List as Cards */}
//           <div className="mt-5">
//             <h3>Manage Your Crops</h3>
//             <div className="row" style={{ gap: '10px' }}>
//               {cropData.map((crop) => (
//                 <div className="col-md-4 mb-4" key={crop.id}>
//                   <CropBox
//                     cropName={crop.cropName}
//                     cropPrice={crop.price}
//                     cropImage={crop.imageUrl}
//                     cropQuantity={crop.quantity}
//                     cropCategory={categoriesName[crop.categoryId]}
//                     onEdit={() => handleEdit(crop.id)}
//                     onDelete={() => handleDelete(crop.id)}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default FarmerPage;




{/* <div className="card mt-4">
             <div className="card-header">Add New Crop</div>
             <div className="card-body" ref={formRef}>
               <form onSubmit={handleSubmit}>
                 <div className="mb-3">
                   <label htmlFor="cropName" className="form-label">
                     Crop Name
                   </label>
                   <input
                    type="text"
                    className="form-control"
                    id="cropName"
                    name="cropName"
                    value={formValues.cropName}
                    onChange={handleInputChange}
                    placeholder="Enter crop name"
                    readOnly={formValues.id !== null} // Make it read-only if updating
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
                    disabled={formValues.id !== null} // Disable the dropdown if updating
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
          </div> */}
