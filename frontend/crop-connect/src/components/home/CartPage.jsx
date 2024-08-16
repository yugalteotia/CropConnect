import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import productsData from "../Json/products.json";
import "../../css/CartPage.css"; // Ensure this path is correct


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
    <Card
      className="cart-card"
      style={{
        backgroundImage: `url('C:/Users/Kshit/Desktop/CropConnect/frontend/crop-connect/src/assets/logo.png')`,
      }}
    >
      <Card.Body>
        {products.map((product) => (
          <div key={product.id} className="mb-4" style={{ width: "100%" }}>
            <div className="d-flex align-items-center mb-3">
              <img
                src={product.image}
                alt={product.name}
                className="cart-image"
              />
              <div className="flex-grow-1">
                <h5 className="mb-1 cart-product-name">{product.name}</h5>
                <p className="text-muted mb-0">{product.location}</p>
              </div>
              <FaTrash
                onClick={() => handleRemoveProduct(product.id)}
                className="trash-icon"
              />
            </div>

            <div className="border-bottom pb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-0 cart-product-type">{product.type}</h6>
                </div>
                <div className="d-flex align-items-center">
                  <Button
                    variant="outline-dark"
                    className="px-2 py-0 cart-quantity-button"
                    onClick={() => handleQuantityChange(product.id, -1)}
                  >
                    -
                  </Button>
                  <span className="px-3" style={{ fontWeight: "bold" }}>
                    {quantities[product.id]}
                  </span>
                  <Button
                    variant="outline-dark"
                    className="px-2 py-0 cart-quantity-button"
                    onClick={() => handleQuantityChange(product.id, 1)}
                  >
                    +
                  </Button>
                  <div className="text-end ms-3">
                    <p className="mb-0 cart-price">
                      ₹{product.price * quantities[product.id]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="border-bottom pb-3 mb-3">
          <h6 className="bill-details-title">Bill Details</h6>
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
          <h5 className="bill-total">TO PAY</h5>
          <h5 className="to-pay-amount">₹{totalPrice + 4}</h5>
        </div>
        <br />
        <Button variant="success" className="w-100 pay-button">
          <h5>PAY</h5>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartPage;
