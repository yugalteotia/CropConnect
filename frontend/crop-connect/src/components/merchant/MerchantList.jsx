import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './MerchantCard';

const MerchantList = () => {
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-wrap justify-center">
      
      {crops.map((crop) => (
        <Card
          key={crop.id}
          image={crop.imageUrl}  
          title={crop.cropName}  
          price={crop.price}    
          qty={crop.quantity}   
          ctg={crop.categoryName}  
          reviews={crop.farmerName}  
        />
      ))}
    </div>
  );
};

export default MerchantList;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Card from './MerchantCard';

// const MerchantList = () => {
//   const [crops, setCrops] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch crops data
//     axios.get('/api/crops')
//       .then(response => {
//         const cropsData = response.data;
//         console.log('Crops data:', cropsData);
        
//         // Extract unique farmer IDs from crops data
//         const farmerIds = [...new Set(cropsData.map(crop => crop.farmerId))];
//         console.log('Unique farmer IDs:', farmerIds);
        
//         // Fetch farmer details based on farmer IDs
//         return Promise.all(farmerIds.map(id => axios.get(`/api/farmers/${id}`)))
//           .then(farmerResponses => {
//             const farmersData = {};
//             farmerResponses.forEach(response => {
//               console.log('Farmer response:', response.data);
//               farmersData[response.data.id] = response.data.firstName +" "+ response.data.lastName;
//               console.log("Each farmer data ",farmersData)
//             });
//             console.log('Farmers data:', farmersData);

//             // Combine crop data with farmer data
//             const updatedCropsData = cropsData.map(crop => ({
//               ...crop,
//               farmerName: farmersData[crop.farmerId] || 'Unknown'
//             }));
//             console.log('Updated crops data with farmer names:', updatedCropsData);

//             setCrops(updatedCropsData);
//             setLoading(false);
//           });
//       })
//       .catch(error => {
//         console.error("There was an error fetching the data!", error);
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div className="flex flex-wrap justify-center">
//       {crops.map((crop) => (
//         <Card
//           key={crop.id}
//           image={crop.imageUrl}  // URL to the crop image
//           title={crop.cropName}  // Name of the crop
//           price={crop.price}     // Price of the crop
//           qty={crop.quantity}   // Display quantity (or use differently if needed)
//           ctg={crop.categoryName}  // Display category name (if you want)
//           reviews={crop.farmerName}  // Farmer's name (now included in crops data)
//         />
//       ))}
//     </div>
//   );
// };

// export default MerchantList;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Card from './MerchantCard';

// const MerchantList = () => {
//   const [crops, setCrops] = useState([]);

//   useEffect(() => {
//     // Fetch crops data
//     axios.get('/api/crops')
//       .then(response => {
//         const cropsData = response.data;
        
//         // Extract unique farmer IDs from crops data
//         const farmerIds = [...new Set(cropsData.map(crop => crop.farmerId))];
        
//         // Fetch farmer details based on farmer IDs
//         return Promise.all(farmerIds.map(id => axios.get(`/api/farmers/${id}`)))
//           .then(farmerResponses => {
//             const farmersData = {};
//             farmerResponses.forEach(response => {
//               farmersData[response.data.id] = response.data.name;
//             });
//             console.log(farmersData);

//             // Combine crop data with farmer data
//             const updatedCropsData = cropsData.map(crop => ({
//               ...crop,
//               farmerName: farmersData[crop.farmerId] || 'Unknown'
//             }));

//             setCrops(updatedCropsData);
//           });
//       })
//       .catch(error => {
//         console.error("There was an error fetching the data!", error);
//       });
//   }, []);



//   return (
//     <div className="flex flex-wrap justify-center">
//       {crops.map((crop) => (
//         <Card
//           key={crop.id}
//           image={crop.imageUrl}  // URL to the crop image
//           title={crop.cropName}  // Name of the crop
//           price={crop.price}     // Price of the crop
//           qty={crop.quantity}   // Display quantity (or use differently if needed)
//           ctg={crop.categoryName}  // Display category name (if you want)
//           reviews={crop.farmerName}  // Farmer's name (now included in crops data)
//         />
//       ))}
//     </div>
//   );
// };

// export default MerchantList;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Card from './MerchantCard';

// const MerchantList = () => {
//   const [crops, setCrops] = useState([]);

//   useEffect(() => {
//     axios.get('/api/crops')
//       .then(response => {
//         setCrops(response.data);
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the crops!", error);
//       });
//   }, []);

//   return (
//     <div className="flex flex-wrap justify-center">
//       {crops.map((crop) => (
//         <Card
//           key={crop.id}
//           image={crop.imageUrl}  // URL to the crop image
//           title={crop.cropName}  // Name of the crop
//           price={crop.price}     // Price of the crop
//           beds={crop.quantity}   // Display quantity (or use differently if needed)
//           baths={crop.categoryName}  // Display category name (if you want)
//           reviews={crop.farmerName}  // Farmer's name (if you want to display it)
//         />
//       ))}
//     </div>
//   );
// };

// export default MerchantList;





// import React from 'react';
// import Card from './MerchantCard';

// const MerchantList = () => {
//   const cards = [
//     {
//       image: 'https://images.unsplash.com/photo-1600585154340-be6161f2ba30',
//       title: 'Beautiful Home in the Mountains',
//       price: '1,900.00',
//       beds: 3,
//       baths: 2,
//       reviews: 34,
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1505691723518-41cb85c512f9',
//       title: 'Modern Villa with Lake View',
//       price: '2,500.00',
//       beds: 4,
//       baths: 3,
//       reviews: 45,
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
//       title: 'Cozy Cottage in the Woods',
//       price: '1,200.00',
//       beds: 2,
//       baths: 1,
//       reviews: 29,
//     },
//     // Add more card data here as needed
//   ];

//   return (
//     <div className="flex flex-wrap justify-center">
//       {cards.map((card, index) => (
//         <Card
//           key={index}
//           image={card.image}
//           title={card.title}
//           price={card.price}
//           beds={card.beds}
//           baths={card.baths}
//           reviews={card.reviews}
//         />
//       ))}
//     </div>
//   );
// };

// export default MerchantList;



