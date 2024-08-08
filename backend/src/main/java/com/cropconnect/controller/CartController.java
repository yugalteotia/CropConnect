package com.cropconnect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.entities.CartItem;
import com.cropconnect.service.CartService;

@RestController
@RequestMapping("/carts")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/merchant/{merchantId}")
    public ResponseEntity<ApiResponse> createCartForMerchant(@PathVariable Integer merchantId) {
        return ResponseEntity.status(HttpStatus.CREATED)
        		.body(cartService.createCartForMerchant(merchantId));
    } 

    @GetMapping("/{cartId}/items")
    public ResponseEntity<List<CartItem>> getCartItems(@PathVariable Integer cartId) {
        
    	return ResponseEntity.status(HttpStatus.OK)
    			.body(cartService.getCartItems(cartId));
    }
}
