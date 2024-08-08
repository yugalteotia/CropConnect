package com.cropconnect.service;

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
}
