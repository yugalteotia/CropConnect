package com.cropconnect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cropconnect.dto.AddItemToCartRequest;
import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.CartDTO;
import com.cropconnect.dto.CartItemDTO;
import com.cropconnect.service.CartService;

@RestController
@RequestMapping("/api/cart")
public class CartController {

	@Autowired
	private CartService cartService;
	
	
	
	 @GetMapping("/{userId}")
	    public ResponseEntity<CartDTO> getCart(@PathVariable int merchantId) {
	        CartDTO cartDto = cartService.getCartByMerchant(merchantId);
	        return new ResponseEntity<>(cartDto, HttpStatus.OK);
	    }
	
//	Adding Item to cart
	@PostMapping("/{userId}")
    public ResponseEntity<CartDTO> addItemToCart(@PathVariable int merchantId, @RequestBody AddItemToCartRequest request) {
        CartDTO cartDto = cartService.addItemToCart(merchantId, request);
        return new ResponseEntity<>(cartDto, HttpStatus.OK);
    }
	
	@GetMapping("/cartItems/{cartId}")
	public ResponseEntity<List<CartItemDTO>> getAllCartItems(@PathVariable Integer cartId){
		
		return ResponseEntity.ok(cartService.getAllCartItemsByCartId(cartId));
	}
	
	
//	removing single item
	@DeleteMapping("/{userId}/items/{itemId}")
    public ResponseEntity<ApiResponse> removeItemFromCart(@PathVariable int merchantId, @PathVariable int itemId) {
        cartService.removeItemFromCart(merchantId, itemId);
        ApiResponse response = ApiResponse.builder()
                .message("Item is removed !!")
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);

    }
	
//	removing all items form cart
	@DeleteMapping("/{userId}")
    public ResponseEntity<ApiResponse> clearCart(@PathVariable int merchantId) {
        cartService.clearCart(merchantId);
        ApiResponse response = ApiResponse.builder()
                .message("Now cart is blank !!")
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);

    }
	
	
	
	
	
}
