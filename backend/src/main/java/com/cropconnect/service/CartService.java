package com.cropconnect.service;

import com.cropconnect.dto.AddItemToCartRequest;
import com.cropconnect.dto.CartDTO;

public interface CartService {

	
//	Add items to cart
//	case1: if cart not available then create new
//	case2: ifn available then add item to that cart
	
	CartDTO addItemToCart(int merchantId, AddItemToCartRequest request);

    //remove item 
	void removeItemFromCart(int merchantId,int cartItem);

    //remove all items
    void clearCart(int merchantId);

    CartDTO getCartByMerchant(int merchantId);
}
