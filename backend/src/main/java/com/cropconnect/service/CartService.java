package com.cropconnect.service;

import java.util.List;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.CartItemDTO;
import com.cropconnect.entities.CartItem;

public interface CartService {

	ApiResponse createCartForMerchant(Integer merchantId);
	List<CartItemDTO> getCartItems(Integer cartId);
}
