import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
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
    <Card className="p-4" 
      style={{ 
        backgroundImage: `url('C:/Users/Kshit/Desktop/CropConnect/frontend/crop-connect/src/assets/logo.png')`, 
        maxWidth: "600px", 
        margin: "auto", 
        backgroundColor: "#f8f9fa", 
        backgroundSize: "cover",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", 
        borderRadius: "15px"
      }}>
      <Card.Body>
        {products.map((product) => (
          <div key={product.id} className="mb-4" style={{ width: "100%" }}>
            <div className="d-flex align-items-center mb-3">
              <img
                src={product.image}
                alt={product.name}
                className="me-3"
                style={{ 
                  width: "60px", 
                  height: "60px", 
                  objectFit: "cover", 
                  borderRadius: "10px", 
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                }}
              />
              <div className="flex-grow-1">
                <h5 className="mb-1" style={{ fontWeight: "bold" }}>{product.name}</h5>
                <p className="text-muted mb-0">{product.location}</p>
              </div>
              <FaTrash 
                onClick={() => handleRemoveProduct(product.id)} 
                style={{ cursor: "pointer", color: "#dc3545" }}
              />
            </div>

            <div className="border-bottom pb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-0" style={{ fontStyle: "italic" }}>{product.type}</h6>
                </div>
                <div className="d-flex align-items-center">
                  <Button
                    variant="outline-dark"
                    className="px-2 py-0"
                    onClick={() => handleQuantityChange(product.id, -1)}
                    style={{ borderRadius: "5px" }}
                  >
                    -
                  </Button>
                  <span className="px-3" style={{ fontWeight: "bold" }}>{quantities[product.id]}</span>
                  <Button
                    variant="outline-dark"
                    className="px-2 py-0"
                    onClick={() => handleQuantityChange(product.id, 1)}
                    style={{ borderRadius: "5px" }}
                  >
                    +
                  </Button>
                  <div className="text-end ms-3">
                    <p className="mb-0" style={{ fontWeight: "bold", color: "#28a745" }}>
                      ₹{product.price * quantities[product.id]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="border-bottom pb-3 mb-3">
          <h6 style={{ fontWeight: "bold" }}>Bill Details</h6>
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
          <h5 style={{ fontWeight: "bold" }}>TO PAY</h5>
          <h5 style={{ fontWeight: "bold", color: "#28a745" }}>₹{totalPrice + 4}</h5>
        </div>
        <br />
        <Button variant="success" className="w-100" style={{ borderRadius: "10px" }}>
          <h5>PAY</h5>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartPage;
















// import React, { useState } from "react";
// import { Card, Button, Form } from "react-bootstrap";
// import { FaTrash } from "react-icons/fa"; 
// import productsData from "../Json/products.json";

// const CartPage = () => {
  
//   const [products, setProducts] = useState(productsData);
//   const [quantities, setQuantities] = useState(
//     productsData.reduce((acc, product) => {
//       acc[product.id] = 1; 
//       return acc;
//     }, {})
//   );


//   const handleQuantityChange = (id, increment) => {
//     setQuantities((prevQuantities) => {
//       const newQuantity = prevQuantities[id] + increment;
//       return {
//         ...prevQuantities,
//         [id]: newQuantity > 0 ? newQuantity : 1, 
//       };
//     });
//   };


//   const handleRemoveProduct = (id) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };


//   const totalPrice = products.reduce(
//     (acc, product) => acc + product.price * quantities[product.id],
//     0
//   );

//   return (
//     <Card className="p-4"  style={{ backgroundImage: `url('/images/farm.jpg')`,maxWidth: "500px", margin: "auto" ,backgroundColor: "#f8f9fa"}}>
   
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
//               <FaTrash onClick={() => handleRemoveProduct(product.id)} />
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
//                   <span className="px-2">{quantities[product.id]}</span>
//                   <Button
//                     variant="light"
//                     className="px-2 py-0"
//                     onClick={() => handleQuantityChange(product.id, 1)}
//                   >
//                     +
//                   </Button>
//                   <div className="text-end ms-3">
//                     <p className="mb-0">
//                       ₹{product.price * quantities[product.id]}
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
