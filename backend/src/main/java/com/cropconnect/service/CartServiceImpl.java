package com.cropconnect.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.CartItemDTO;
import com.cropconnect.entities.Cart;
import com.cropconnect.entities.CartItem;
import com.cropconnect.entities.Merchant;
import com.cropconnect.exception.ResourceNotFoundException;
import com.cropconnect.repository.CartItemRepository;
import com.cropconnect.repository.CartRepository;
import com.cropconnect.repository.MerchantRepository;

@Service
public class CartServiceImpl implements CartService{

	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private CartItemRepository cartItemRepository;
	
	@Autowired
	private MerchantRepository merchantRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	 @Override
	    public List<CartItemDTO> getCartItems(Integer cartId) {
		 	
		 	List<CartItem> cartItems = cartItemRepository.findByCartId(cartId);
		 	return cartItems.stream()
		 							.map(cartItem -> modelMapper.map(cartItem, CartItemDTO.class))
		 							.toList();

	        
	    }
	 
	  @Override
	    public ApiResponse createCartForMerchant(Integer merchantId) {
	        Merchant merchant = merchantRepository.findById(merchantId)
	        		.orElseThrow(() -> new ResourceNotFoundException("Merchant not found"));
	        
	        Cart cart = new Cart();
	        cart.setMerchant(merchant);
	        cartRepository.save(cart);
	        return new ApiResponse("Cart created for the merchant: "+merchantId);
	    }
}
