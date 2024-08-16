// CropListPage.js
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import CropBox from './CropBox';
import EditCropForm from './EditCropForm'; 
import { useFormValues } from "../../hooks/useFormValues";
import { useNavigate } from "react-router-dom";
import SearchBar from '../home/SearchBar';

const CropListPage = () => {
  const [cropData, setCropData] = useState([]);
  const [categoriesName, setCategoriesName] = useState({});
  const [selectedCrop, setSelectedCrop] = useState(null); // New state for selected crop
  const formRef = useRef(null);

  const { setFormValues } = useFormValues();
  const navigate = useNavigate();
        
  const resultJSON = localStorage.getItem("user");  
  const user = JSON.parse(resultJSON);
  const userId = user.id;

  const handleSearch = async (keyword) => {
    try {
      //const response = await axios.get(`/api/crops/search?keyword=${keyword}`);
      const response = await axios.get(`/api/farmers/user/${userId}`);
      const farmerData = response.data;
      const farmerId = farmerData.id; 

      const cropsResponse = await axios.get(`/api/crops/farmers/${farmerId}`);
      //console.log("mayur laksha --- ",cropsResponse.data);
      const SearchedCrops = cropsResponse.data;

      const filteredCrops = SearchedCrops.filter(crop => 
        crop.cropName.toLowerCase().includes(keyword.toLowerCase())
    );

    setCropData(filteredCrops);
    
    setCropData(filteredCrops);
    console.log("Filtered crops:", filteredCrops);
      //console.log(response.data);// Update cropData with the search results
    } catch (error) {
      console.error("Error searching for crops:", error);
    }
  };
  
  useEffect(() => {    

    const fetchCrops = async () => {
      try {   
        //console.log("User ID retrieved from local storage: ", userId);
    
        const response = await axios.get(`/api/farmers/user/${userId}`);
        console.log("Farmers data returned is = ", response.data);
    
        const farmerData = response.data;
        const farmerId = farmerData.id; 
    
        //console.log("Farmer ID retrieved: ", farmerId);
    
        const cropsResponse = await axios.get(`/api/crops/farmers/${farmerId}`);
        console.log("Crops data received by farmer id of specific farmer: ", cropsResponse.data);
    
        setCropData(cropsResponse.data);
        fetchCategoryNames(cropsResponse.data);
      } catch (error) {
        console.error('Error fetching crops:', error);
      }
    };
    

    const fetchCategoryNames = async (cropData) => {
      const categoryMap = {};
      for (const crop of cropData) {
        try {
          const response = await axios.get(`/api/categories/${crop.categoryId}`);
          categoryMap[crop.categoryId] = response.data.categoryName;
        } catch (error) {
          console.error(`Error fetching category for ID ${crop.categoryId}:`, error);
        }
      }
      setCategoriesName(categoryMap);
    };

    fetchCrops();
  }, []);

  const handleEdit = async (id) => {
    try {
      const response = await axios.get(`/api/crops/${id}`);

      setSelectedCrop(response.data); // Set the selected crop
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      console.error("Error fetching crop data:", error);
    }
  };

  const handleUpdate = async (updatedData) => {
    try {

      const cropResponse = await axios.get(`/api/crops/${updatedData.id}`);
      const cropDetails = cropResponse.data;

      const dataToSend = {
        cropName: updatedData.cropName,        // Assuming backend expects cropName
        price: updatedData.cropPrice,      // Assuming backend expects cropPrice
        quantity: updatedData.cropQuantity, // Assuming backend expects cropQuantity
        cropCategory: updatedData.cropCategory, // Assuming backend expects cropCategory
        imageUrl: updatedData.cropImage,   // Assuming backend expects cropImage
        categoryId: cropDetails.categoryId, // Add categoryId from fetched data
        farmerId: cropDetails.farmerId      // Add farmerId from fetched data
      };

      //console.log("Sending updated data:", updatedData);
      const updateResponse = await axios.put(`/api/crops/${updatedData.id}`, dataToSend);
      console.log("Update response:", updateResponse);
      
      const response = await axios.get(`/api/farmers/user/${userId}`);
      const farmerData = response.data;
      const farmerId = farmerData.id;
      const cropsResponse = await axios.get(`/api/crops/farmers/${farmerId}`);
      console.log("here - ",cropsResponse.data);
      //console.log("Response data after update:", response);
      
      setCropData(cropsResponse.data);
      setSelectedCrop(null); // Reset the selected crop\
    } catch (error) {
      console.error('Error updating crop:', error);
    }
  };

  const handleDelete = async (id) => {
    // Show confirmation dialog
    const confirmDelete = window.confirm("Are you sure you want to delete this crop ?");
    
    if (confirmDelete) {
      try {
        // Proceed with deletion if user confirmed
        await axios.delete(`/api/crops/${id}`);
        const response = await axios.get('/api/crops');
        setCropData(response.data);
      } catch (error) {
        console.error('Error deleting crop:', error);
      }
    } else {
      // Do nothing if user canceled
      console.log("Deletion canceled.");
    }
  };
  

  const handleCancel = () => {
    setSelectedCrop(null);
  };

  return (
    <div className="mt-0" ref={formRef}>
      <SearchBar onSearch={handleSearch} />
      <h3 className="text-3xl font-bold text-blue-800 mb-4 border-b-2 border-green-500 pb-2 ml-4 mt-1"> Manage Your Crops</h3>
      {selectedCrop && (
        <EditCropForm
          cropData={selectedCrop}
          categoriesName={categoriesName}
          onUpdate={handleUpdate}
          onCancel={handleCancel}
        />
      )}
      <div className="row" style={{ gap: '10px' }}>
        {cropData.map((crop) => (
          <div className="col-md-4 mb-4" key={crop.id}>
            <CropBox
              cropName={crop.cropName}
              cropPrice={crop.price}
              cropImage={crop.imageUrl}
              cropQuantity={crop.quantity}
              cropCategory={categoriesName[crop.categoryId]}
              onEdit={() => handleEdit(crop.id)}
              onDelete={() => handleDelete(crop.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropListPage;











// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import CropBox from './CropBox';
// import { useFormValues } from "../../hooks/useFormValues";
// import { useNavigate } from "react-router-dom";

// const CropListPage = () => {
//   const [cropData, setCropData] = useState([]);

//   const [categoriesName, setCategoriesName] = useState({});
//   const {setFormValues} = useFormValues();
//   const navigate = useNavigate();


//   useEffect(() => {
//     const fetchCrops = async () => {
//       try {
//         const response = await axios.get('/api/crops');
//         setCropData(response.data);
//         fetchCategoryNames(response.data);
//       } catch (error) {
//         console.error('Error fetching crops:', error);
//       }
//     };

//     const fetchCategoryNames = async (cropData) => {
//       const categoryMap = {};
//       for (const crop of cropData) {
//         try {
//           const response = await axios.get(`/api/categories/${crop.categoryId}`);
//           categoryMap[crop.categoryId] = response.data.categoryName;
//         } catch (error) {
//           console.error(`Error fetching category for ID ${crop.categoryId}:`, error);
//         }
//       }
//       setCategoriesName(categoryMap);
//     };

//     fetchCrops();
//   }, []);

//   const handleEdit = async (id) => {
//     try {
//       const response = await axios.get(`/api/crops/${id}`);
//       setFormValues(response.data);
  
//       if (formRef.current) {
//         formRef.current.scrollIntoView({ behavior: "smooth" });
//       }
//     } catch (error) {
//       console.error("Error fetching crop data:", error);
//     }
//   };
  

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/crops/${id}`);
//       const response = await axios.get('/api/crops');
//       setCropData(response.data);
//     } catch (error) {
//       console.error('Error deleting crop:', error);
//     }
//   };

//   return (
//     <div className="mt-5">
//       <h3 className="text-3xl font-bold text-blue-800 mb-4 border-b-2 border-green-500 pb-2">Manage Crops</h3>
//       <div className="row" style={{ gap: '10px' }}>
//         {cropData.map((crop) => (
//           <div className="col-md-4 mb-4" key={crop.id}>
//             <CropBox
//               cropName={crop.cropName}
//               cropPrice={crop.price}
//               cropImage={crop.imageUrl}
//               cropQuantity={crop.quantity}
//               cropCategory={categoriesName[crop.categoryId]}
//               onEdit={() => handleEdit(crop.id)}
//               onDelete={() => handleDelete(crop.id)}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CropListPage;