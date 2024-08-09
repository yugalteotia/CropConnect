package com.cropconnect.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.service.CartItemService;

@RestController
@RequestMapping("/cart-items")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    @PostMapping
    public ResponseEntity<ApiResponse> addItemToCart(@RequestParam Integer cartId, @RequestParam Integer cropId, @RequestParam Integer quantity) {
        
    	return ResponseEntity.status(HttpStatus.CREATED)
    			.body(cartItemService.addItemToCart(cartId, cropId, quantity));
    }

    @PutMapping("/{cartItemId}")
    public ResponseEntity<ApiResponse> updateCartItem(@PathVariable Integer cartItemId, @RequestParam Integer quantity) {
        
    	return ResponseEntity.status(HttpStatus.OK)
    			.body(cartItemService.updateCartItem(cartItemId,quantity));
    }

    @DeleteMapping("/{cartItemId}")
    public ResponseEntity<ApiResponse> deleteCartItem(@PathVariable Integer cartItemId) {
    	
        return ResponseEntity.status(HttpStatus.OK)
        		.body(cartItemService.deleteCartItem(cartItemId));
    }
}
