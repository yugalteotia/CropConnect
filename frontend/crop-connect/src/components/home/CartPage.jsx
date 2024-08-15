import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { FaTrash } from "react-icons/fa"; 
import productsData from "../Json/products.json";

const CartPage = () => {
  
  const [products, setProducts] = useState(productsData);
  const [quantities, setQuantities] = useState(
    productsData.reduce((acc, product) => {
      acc[product.id] = 1; 
      return acc;
    }, {})
  );


  const handleQuantityChange = (id, increment) => {
    setQuantities((prevQuantities) => {
      const newQuantity = prevQuantities[id] + increment;
      return {
        ...prevQuantities,
        [id]: newQuantity > 0 ? newQuantity : 1, 
      };
    });
  };


  const handleRemoveProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };


  const totalPrice = products.reduce(
    (acc, product) => acc + product.price * quantities[product.id],
    0
  );

  return (
    <Card className="p-4"  style={{ backgroundImage: `url('/images/farm.jpg')`,maxWidth: "500px", margin: "auto" ,backgroundColor: "#f8f9fa"}}>
   
      <Card.Body>
        {products.map((product) => (
          <div key={product.id}>
            <div className="d-flex align-items-center mb-3">
              <img
                src={product.image}
                alt={product.name}
                className="me-3"
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
              />
              <div className="flex-grow-1">
                <h5 className="mb-1">{product.name}</h5>
                <p className="text-muted mb-0">{product.location}</p>
              </div>
              <FaTrash onClick={() => handleRemoveProduct(product.id)} />
            </div>

            <div className="border-bottom pb-3 mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6>{product.type}</h6>
                </div>
                <div className="d-flex align-items-center">
                  <Button
                    variant="light"
                    className="px-2 py-0"
                    onClick={() => handleQuantityChange(product.id, -1)}
                  >
                    -
                  </Button>
                  <span className="px-2">{quantities[product.id]}</span>
                  <Button
                    variant="light"
                    className="px-2 py-0"
                    onClick={() => handleQuantityChange(product.id, 1)}
                  >
                    +
                  </Button>
                  <div className="text-end ms-3">
                    <p className="mb-0">
                      ₹{product.price * quantities[product.id]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="border-bottom pb-3 mb-3">
          <h6>Bill Details</h6>
          <div className="d-flex justify-content-between">
            <p className="mb-1">Item Total</p>
            <p className="mb-1">₹{totalPrice}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="mb-1">Platform fee</p>
            <p className="mb-1">₹4</p>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <h5>TO PAY</h5>
          <h5>₹{totalPrice + 4}</h5>
        </div>
        <br />
        <Button variant="success">
          <h5>PAY</h5>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartPage;



///// code for backend /////
// import React, { useState, useEffect } from "react";
// import { Card, Button, Form } from "react-bootstrap";
// import { FaTrash } from "react-icons/fa";

// const CartPage = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);


//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("/api/products"); 
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);


//   const handleQuantityChange = async (id, increment) => {
//     try {
//       const productToUpdate = products.find((product) => product.id === id);
//       const newQuantity = productToUpdate.quantity + increment;

//       if (newQuantity < 1) return;

//       const response = await fetch(`/api/products/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ quantity: newQuantity }),
//       });

//       if (response.ok) {
     
//         setProducts((prevProducts) =>
//           prevProducts.map((product) =>
//             product.id === id ? { ...product, quantity: newQuantity } : product
//           )
//         );
//       }
//     } catch (error) {
//       console.error("Error updating quantity:", error);
//     }
//   };


//   const handleRemoveProduct = async (id) => {
//     try {
//       const response = await fetch(`/api/products/${id}`, {
//         method: "DELETE",
//       });

//       if (response.ok) {

//         setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
//       }
//     } catch (error) {
//       console.error("Error removing product:", error);
//     }
//   };


//   const totalPrice = products.reduce(
//     (acc, product) => acc + product.price * product.quantity,
//     0
//   );

//   if (loading) {
//     return <p>Loading...</p>; 
//   }

//   return (
//     <Card className="p-4" style={{ maxWidth: "500px", margin: "auto" }}>
//       <Card.Body>
//         {products.map((product) => (
//           <div key={product.id}>
//             <div className="d-flex align-items-center mb-3">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="me-3"
//                 style={{ width: "60px", height: "60px", objectFit: "cover" }}
//               />
//               <div className="flex-grow-1">
//                 <h5 className="mb-1">{product.name}</h5>
//                 <p className="text-muted mb-0">{product.location}</p>
//               </div>
//               <FaTrash
//                 style={{ cursor: "pointer" }}
//                 onClick={() => handleRemoveProduct(product.id)}
//               />
//             </div>

//             <div className="border-bottom pb-3 mb-3">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h6>{product.type}</h6>
//                 </div>
//                 <div className="d-flex align-items-center">
//                   <Button
//                     variant="light"
//                     className="px-2 py-0"
//                     onClick={() => handleQuantityChange(product.id, -1)}
//                   >
//                     -
//                   </Button>
//                   <span className="px-2">{product.quantity}</span>
//                   <Button
//                     variant="light"
//                     className="px-2 py-0"
//                     onClick={() => handleQuantityChange(product.id, 1)}
//                   >
//                     +
//                   </Button>
//                   <div className="text-end ms-3">
//                     <p className="mb-0">
//                       ₹{product.price * product.quantity}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         <div className="border-bottom pb-3 mb-3">
//           <h6>Bill Details</h6>
//           <div className="d-flex justify-content-between">
//             <p className="mb-1">Item Total</p>
//             <p className="mb-1">₹{totalPrice}</p>
//           </div>
//           <div className="d-flex justify-content-between">
//             <p className="mb-1">Platform fee</p>
//             <p className="mb-1">₹4</p>
//           </div>
//         </div>

//         <div className="d-flex justify-content-between align-items-center">
//           <h5>TO PAY</h5>
//           <h5>₹{totalPrice + 4}</h5>
//         </div>
//         <br />
//         <Button variant="success">
//           <h5>PAY</h5>
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default CartPage;
