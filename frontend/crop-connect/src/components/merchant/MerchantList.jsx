import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './MerchantCard';

const MerchantList = ({searchQuery}) => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
    
  useEffect(() => {
    // Fetch crops data
    axios.get('/api/crops')
      .then(response => {
        const cropsData = response.data;
        console.log('Crops data:', cropsData);
        
        // Extract unique farmer IDs and category IDs from crops data
        const farmerIds = [...new Set(cropsData.map(crop => crop.farmerId))];
        const categoryIds = [...new Set(cropsData.map(crop => crop.categoryId))];
        console.log('Unique farmer IDs:', farmerIds);
        console.log('Unique category IDs:', categoryIds);
        
        // Fetch farmer details based on farmer IDs
        const fetchFarmers = Promise.all(farmerIds.map(id => axios.get(`/api/farmers/${id}`)));
        
        // Fetch category details based on category IDs
        const fetchCategories = Promise.all(categoryIds.map(id => axios.get(`/api/categories/${id}`)));

        // Combine the farmer and category data
        Promise.all([fetchFarmers, fetchCategories])
          .then(([farmerResponses, categoryResponses]) => {
            const farmersData = {};
            const categoriesData = {};

            // Process farmer data
            farmerResponses.forEach(response => {
              console.log('Farmer response:', response.data);
              farmersData[response.data.id] = response.data.firstName + " " + response.data.lastName;
              console.log("Each farmer data ", farmersData);
            });

            // Process category data
            categoryResponses.forEach(response => {
              console.log('Category response:', response.data);
              categoriesData[response.data.id] = response.data.categoryName;
              console.log("Each category data ", categoriesData);
            });

            console.log('Farmers data:', farmersData);
            console.log('Categories data:', categoriesData);

            // Combine crop data with farmer and category data
            const updatedCropsData = cropsData.map(crop => ({
              ...crop,
              farmerName: farmersData[crop.farmerId] || 'Unknown',
              categoryName: categoriesData[crop.categoryId] || 'Unknown'
            }));
            console.log('Updated crops data with farmer names and category names:', updatedCropsData);

            setCrops(updatedCropsData);
            setLoading(false);
          });
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
        setError(error);
        setLoading(false);
      });
  }, []);


  const filteredCrops = (crops || []).filter(crop =>
    (crop.cropName || '').toLowerCase().includes((searchQuery || '').toLowerCase())
  );
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-wrap justify-center">
      {filteredCrops.length > 0 ? (
        filteredCrops.map((crop) => (
          <Card
            key={crop.id}
            image={crop.imageUrl}  // URL to the crop image
            title={crop.cropName}  // Name of the crop
            price={crop.price}     // Price of the crop
            qty={crop.quantity}   // Display quantity (or use differently if needed)
            ctg={crop.categoryName}  // Display category name
            reviews={crop.farmerName}  // Farmer's name
          />
        ))
      ) : (
        <p>No crops found.</p>
      )}
    </div>
  );
};

export default MerchantList;



