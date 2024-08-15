package com.cropconnect.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cropconnect.dto.AddItemToCartRequest;
import com.cropconnect.dto.CartDTO;
import com.cropconnect.dto.CartItemDTO;
import com.cropconnect.entities.Cart;
import com.cropconnect.entities.CartItem;
import com.cropconnect.entities.Crop;
import com.cropconnect.entities.Merchant;
import com.cropconnect.exception.ResourceNotFoundException;
import com.cropconnect.repository.CartItemRepository;
import com.cropconnect.repository.CartRepository;
import com.cropconnect.repository.CropRepository;
import com.cropconnect.repository.MerchantRepository;


@Service
@Transactional
public class CartServiceImpl implements CartService {
	
	@Autowired
	private CropRepository cropRepository;
	
	@Autowired
	private MerchantRepository merchantRepository;

	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private CartItemRepository cartItemRepository;
	
	@Override
	public CartDTO addItemToCart(int merchantId, AddItemToCartRequest request) {
		int quantity = request.getQuantity();
		int cropId = request.getCropId();
		
		Crop crop =cropRepository.findById(cropId).orElseThrow(()-> new ResourceNotFoundException("Crop not found with given id !!"));
		Merchant merchant = merchantRepository.findById(merchantId).orElseThrow(() -> new ResourceNotFoundException("merchant not found!!"));
		Cart cart = null;
        try {
            cart = cartRepository.findByMerchant(merchant).get();
        } catch (NoSuchElementException e) {
            cart = new Cart(); 
//            cart.setId();
//            SetCreatedDate
        }

        
        //if cart items already present; then update
        AtomicReference<Boolean> updated = new AtomicReference<>(false);
        List<CartItem> items = cart.getItems();
        items = items.stream().map(item -> {

            if (item.getCrop().getId().equals(cropId)) {
                //item already present in cart
                item.setQuantity(quantity);
                item.setTotalPrice(quantity * crop.getPrice());
                updated.set(true);
            }
            return item;
        }).collect(Collectors.toList());



        //create items
        if (!updated.get()) {
            CartItem cartItem = CartItem.builder()
                    .quantity(quantity)
                    .totalPrice(quantity * crop.getPrice())
                    .cart(cart)
                    .crop(crop)
                    .build();
            cart.getItems().add(cartItem);
        }


        cart.setMerchant(merchant);
        Cart updatedCart = cartRepository.save(cart);
        return mapper.map(updatedCart, CartDTO.class);
		
		
	}




	@Override
	public void removeItemFromCart(int merchantId, int cartItem) {
		 CartItem cartItem1 = cartItemRepository.findById(cartItem).orElseThrow(() -> new ResourceNotFoundException("Cart Item not found !!"));
	     cartItemRepository.delete(cartItem1);
		
	}

	@Override
	public void clearCart(int merchantId) {
		Merchant merchant = merchantRepository.findById(merchantId).orElseThrow(() -> new ResourceNotFoundException("merchant not found !!"));
        Cart cart = cartRepository.findByMerchant(merchant).orElseThrow(() -> new ResourceNotFoundException("Cart of given user not found !!"));
        cart.getItems().clear();
        cartRepository.save(cart);
		
	}

	@Override
	public CartDTO getCartByMerchant(int merchantId) {
		Merchant merchant = merchantRepository.findById(merchantId).orElseThrow(() -> new ResourceNotFoundException("merchant not found !!"));
        Cart cart = cartRepository.findByMerchant(merchant).orElseThrow(() -> new ResourceNotFoundException("Cart of given user not found !!"));

        return mapper.map(cart, CartDTO.class);
	}




	@Override
	public List<CartItemDTO> getAllCartItemsByCartId(Integer cartId) {
	    // Find all CartItems for a particular Cart by cartId
		System.out.println("CART ITEM DETAILS " + cartId);
	    List<CartItem> cartItems = cartItemRepository.findByCartId(cartId);
	    
	    // Map the CartItem entities to CartItemDTO
	    return cartItems.stream()
	            .map(cartItem -> {
	                CartItemDTO cartItemDTO = mapper.map(cartItem, CartItemDTO.class);
	                cartItemDTO.setCrop(cartItem.getCrop()); // Assuming Crop is part of CartItemDTO
	                return cartItemDTO;
	            })
	            .toList();    
	}

}
