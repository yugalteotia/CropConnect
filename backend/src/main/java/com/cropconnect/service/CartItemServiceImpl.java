package com.cropconnect.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.entities.Cart;
import com.cropconnect.entities.CartItem;
import com.cropconnect.entities.Crop;
import com.cropconnect.exception.InsufficientStockException;
import com.cropconnect.exception.ResourceNotFoundException;
import com.cropconnect.repository.CartItemRepository;
import com.cropconnect.repository.CartRepository;
import com.cropconnect.repository.CropRepository;

@Service
@Transactional
public class CartItemServiceImpl implements CartItemService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private CropRepository cropRepository;
    

    public ApiResponse addItemToCart(Integer cartId, Integer cropId, Integer quantity) {
        Cart cart = cartRepository.findById(cartId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart not found"));
        Crop crop = cropRepository.findById(cropId)
                .orElseThrow(() -> new ResourceNotFoundException("Crop not found"));
        
        
        
        if (crop.getQuantity() < quantity) {
            throw new InsufficientStockException("Insufficient quantity available for crop: " + crop.getCropName());
        }

        CartItem cartItem = new CartItem();
        cartItem.setCrop(crop);
        cartItem.setQuantity(quantity);
        cartItem.setCart(cart);
        cart.addCartItem(cartItem);

        crop.setQuantity(crop.getQuantity() - quantity); 
        
        cart.getItems().add(cartItem);
        cartItemRepository.save(cartItem);
        cropRepository.save(crop); 
        cartRepository.save(cart);

        return new ApiResponse("Item added to cart");
    }

   
    
    @Override
    public ApiResponse updateCartItem(Integer cartItemId, Integer quantity) {
        
        CartItem cartItem = cartItemRepository.findById(cartItemId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart Item not found"));
        
        Crop crop = cartItem.getCrop();
        
        if (quantity > crop.getQuantity()) {
            throw new InsufficientStockException("Selected quantity is more than available quantity: Available quantity = " + crop.getQuantity());
        }
        
        cartItem.setQuantity(quantity);
        cartItemRepository.save(cartItem);
        
        return new ApiResponse("Cart item updated successfully");
    }

    
    @Override
    public ApiResponse deleteCartItem(Integer cartItemId) {
    	
        try {
        	CartItem cartItem = cartItemRepository.findById(cartItemId)
        			.orElseThrow(() -> new ResourceNotFoundException("cart not found"));
        	
        	Crop crop = cartItem.getCrop();
        	int quantityToRestore = cartItem.getQuantity();
        	crop.setQuantity(crop.getQuantity() + quantityToRestore);
        	
        	cartItem.getCart().removeCartItem(cartItem);
        	
	        cartItemRepository.deleteById(cartItemId);
	        cropRepository.save(crop);
	        
	    } catch (EmptyResultDataAccessException e) {
	        throw new ResourceNotFoundException("Crop not found");
	    }
	    return new ApiResponse("Crop deleted successfully");
	}

    
    
  
}
