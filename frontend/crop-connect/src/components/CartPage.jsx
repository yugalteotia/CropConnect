import React, { useEffect, useState } from 'react';
import "../css/CartPage.css";
const CartPage = () => {
    const [cart, setCart] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Fetch cart details and items from the API
        fetchCartData();
    }, []);

    const fetchCartData = async () => {
        try {
            const cartResponse = await fetch('/api/cart'); // Adjust API endpoint as needed
            const cartData = await cartResponse.json();
            setCart(cartData);

            const cartItemsResponse = await fetch(`/api/cart/${cartData.cart_id}/items`);
            const cartItemsData = await cartItemsResponse.json();
            setCartItems(cartItemsData);
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    };

    if (!cart) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Cart Details</h1>
            <div>
                <p><strong>Cart ID:</strong> {cart.cart_id}</p>
                <p><strong>Merchant ID:</strong> {cart.merchant_id}</p>
                <p><strong>Created:</strong> {new Date(cart.created_timestamp).toLocaleString()}</p>
                <p><strong>Updated:</strong> {new Date(cart.updated_timestamp).toLocaleString()}</p>
            </div>

            <h2>Cart Items</h2>
            {cartItems.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.cart_item_id}>
                            <p><strong>Crop ID:</strong> {item.crop_id}</p>
                            <p><strong>Quantity:</strong> {item.quantity}</p>
                            <p><strong>Added:</strong> {new Date(item.created_timestamp).toLocaleString()}</p>
                            <p><strong>Last Updated:</strong> {new Date(item.updated_timestamp).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartPage;
