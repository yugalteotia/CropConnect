package com.cropconnect.service;

import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.cropconnect.dto.CreateOrderRequest;
import com.cropconnect.dto.OrderDTO;
import com.cropconnect.dto.OrderUpdateRequest;
import com.cropconnect.entities.Cart;
import com.cropconnect.entities.CartItem;
import com.cropconnect.entities.Merchant;
import com.cropconnect.entities.Order;
import com.cropconnect.entities.OrderItem;
import com.cropconnect.exception.ResourceNotFoundException;
import com.cropconnect.repository.CartRepository;
import com.cropconnect.repository.MerchantRepository;
import com.cropconnect.repository.OrderRepository;

public class OrderServiceImpl implements OrderService {

	
	 @Autowired
	    private MerchantRepository merchantRepository;

	    @Autowired
	    private OrderRepository orderRepository;

	    @Autowired
	    private ModelMapper modelMapper;

	    @Autowired
	    private CartRepository cartRepository;
	    
	    @Override
	    public OrderDTO createOrder(CreateOrderRequest orderDto) {

	        int merchantId = orderDto.getMerchantId();
	        int cartId = orderDto.getCartId();
	        //fetch user
	        Merchant merchant = merchantRepository.findById(merchantId).orElseThrow(() -> new ResourceNotFoundException("Merchant not found with given id !!"));

	        //fetch cart
	        Cart cart = cartRepository.findById(cartId).orElseThrow(() -> new ResourceNotFoundException("Cart with given id not found on server !!"));

	        List<CartItem> cartItems = cart.getItems();

	        if (cartItems.size() <= 0) {
	            throw new ResourceNotFoundException("Invalid number of items in cart !!");

	        }

	        

	        Order order = Order.builder()
	                .billingName(orderDto.getBillingName())
	                .billingPhone(orderDto.getBillingPhone())
	                .billingAddress(orderDto.getBillingAddress())
	                .orderedDate(new Date())
	                .deliveredDate(null)
	                .paymentStatus(orderDto.getPaymentStatus())
	                .orderStatus(orderDto.getOrderStatus())
	                .orderId(UUID.randomUUID().toString())
	                .merchant(merchant)
	                .build();

//	        orderItems,amount

	        AtomicReference<Integer> orderAmount = new AtomicReference<>(0);
	        List<OrderItem> orderItems = cartItems.stream().map(cartItem -> {
//	            CartItem->OrderItem
	            OrderItem orderItem = OrderItem.builder()
	                    .quantity(cartItem.getQuantity())
	                    .crop(cartItem.getCrop())
	                    .totalPrice(cartItem.getQuantity() * cartItem.getCrop().getPrice())
	                    .order(order)
	                    .build();

	            orderAmount.set(orderAmount.get() + orderItem.getTotalPrice());
	            return orderItem;
	        }).collect(Collectors.toList());


	        order.setOrderItems(orderItems);
	        order.setOrderAmount(orderAmount.get());

	        System.out.println(order.getOrderItems().size());

	        //
	        cart.getItems().clear();
	        cartRepository.save(cart);
	        Order savedOrder = orderRepository.save(order);
	        return modelMapper.map(savedOrder, OrderDTO.class);
	    }

	    @Override
	    public void removeOrder(String orderId) {

	        Order order = orderRepository.findById(orderId).orElseThrow(() -> new ResourceNotFoundException("order is not found !!"));
	        orderRepository.delete(order);

	    }

	    @Override
	    public List<OrderDTO> getOrdersOfMerchant(Integer merchantId) {
	        Merchant merchant = merchantRepository.findById(merchantId).orElseThrow(() -> new ResourceNotFoundException("Merchant not found !!"));
	        List<Order> orders = orderRepository.findByMerchant(merchant);
	        List<OrderDTO> orderDtos = orders.stream().map(order -> modelMapper.map(order, OrderDTO.class)).collect(Collectors.toList());
	        return orderDtos;
	    }


	    
	    @Override
	    public OrderDTO updateOrder(String orderId, OrderUpdateRequest request) {

	        //get the order
	        Order order = orderRepository.findById(orderId).orElseThrow(() -> new ResourceNotFoundException("Id not found"));
	        order.setBillingName(request.getBillingName());
	        order.setBillingPhone(request.getBillingPhone());
	        order.setBillingAddress(request.getBillingAddress());
	        order.setPaymentStatus(request.getPaymentStatus());
	        order.setOrderStatus(request.getOrderStatus());
	        order.setDeliveredDate(request.getDeliveredDate());
	        Order updatedOrder = orderRepository.save(order);
	        return modelMapper.map(updatedOrder, OrderDTO.class);
	    }



}
