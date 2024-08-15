// CropListPage.js
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import CropBox from './CropBox';
import EditCropForm from './EditCropForm'; 
import { useFormValues } from "../../hooks/useFormValues";
import { useNavigate } from "react-router-dom";

const CropListPage = () => {
  const [cropData, setCropData] = useState([]);
  const [categoriesName, setCategoriesName] = useState({});
  const [selectedCrop, setSelectedCrop] = useState(null); // New state for selected crop
  const formRef = useRef(null);

  const { setFormValues } = useFormValues();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await axios.get('/api/crops');
        setCropData(response.data);
        fetchCategoryNames(response.data);
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
      console.log("Sending updated data:", updatedData);
      const updateResponse = await axios.put(`/api/crops/${updatedData.id}`, updatedData);
      console.log("Update response:", updateResponse);
      
      const response = await axios.get('/api/crops');
      console.log("Response data after update:", response);
      
      setCropData(response.data);
      setSelectedCrop(null); // Reset the selected crop
    } catch (error) {
      console.error('Error updating crop:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/crops/${id}`);
      const response = await axios.get('/api/crops');
      setCropData(response.data);
    } catch (error) {
      console.error('Error deleting crop:', error);
    }
  };

  const handleCancel = () => {
    setSelectedCrop(null);
  };

  return (
    <div className="mt-5" ref={formRef}>
      <h3 className="text-3xl font-bold text-blue-800 mb-4 border-b-2 border-green-500 pb-2">Manage Crops</h3>
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