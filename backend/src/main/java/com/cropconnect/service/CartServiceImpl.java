package com.cropconnect.service;

import java.math.BigDecimal;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
@Transactional
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
		 
		 	Cart cart = cartRepository.findById(cartId)
		 			.orElseThrow(() -> new ResourceNotFoundException("Cart not found"));
		 	
		 	List<CartItem> cartItems = cartItemRepository.findByCartId(cartId);
		 	
		 	return cartItems.stream()
		 							.map(cartItem -> {
		 								CartItemDTO cartItemDTO =  modelMapper.map(cartItem, CartItemDTO.class);
		 								cartItemDTO.setCropId(cartItem.getCrop().getId());
		 								cartItemDTO.setCropName(cartItem.getCrop().getCropName());
		 								
		 								BigDecimal pricePerkg = cartItem.getCrop().getPrice();
		 								int quantityAdded = cartItem.getQuantity();
		 								BigDecimal totalPrice = pricePerkg.multiply(BigDecimal.valueOf(quantityAdded));
		 								cartItemDTO.setPrice(totalPrice);
		 								
		 								return cartItemDTO;
		 								})
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
