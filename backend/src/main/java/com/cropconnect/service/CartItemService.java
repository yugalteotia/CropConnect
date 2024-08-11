package com.cropconnect.service;

import com.cropconnect.dto.ApiResponse;

public interface CartItemService {

	ApiResponse addItemToCart(Integer cartId, Integer cropId, Integer quantity);
	ApiResponse updateCartItem(Integer cartItemId, Integer quantity);
	ApiResponse deleteCartItem(Integer cartItemId);
}
