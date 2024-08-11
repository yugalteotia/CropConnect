package com.cropconnect.service;

<<<<<<< HEAD
import com.cropconnect.dto.AddItemToCartRequest;
import com.cropconnect.dto.CartDto;

public interface CartService {

	
//	Add items to cart
//	case1: if cart not available then create new
//	case2: ifn available then add item to that cart
	
	CartDto addItemToCart(int merchantId, AddItemToCartRequest request);

    //remove item 
	void removeItemFromCart(int merchantId,int cartItem);

    //remove all items
    void clearCart(int merchantId);

    CartDto getCartByMerchant(int merchantId);
=======
import java.util.List;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.CartItemDTO;
import com.cropconnect.entities.CartItem;

public interface CartService {

	ApiResponse createCartForMerchant(Integer merchantId);
	List<CartItemDTO> getCartItems(Integer cartId);
>>>>>>> a5454e0db577298f3261aad9cd5e1850d0bfcdfb
}
