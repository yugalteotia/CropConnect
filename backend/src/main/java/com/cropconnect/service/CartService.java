package com.cropconnect.service;

import java.util.List;

import com.cropconnect.dto.CartItemDTO;
import com.cropconnect.entities.Cart;

public interface CartService {
    Cart addItemsToCart(Integer merchantId, List<CartItemDTO> items);
    Cart getCartByMerchantId(Integer merchantId);
    Cart updateCartItem(Integer merchantId, Integer productId, Integer quantity);
    void removeCartItem(Integer merchantId, Integer productId);
}
