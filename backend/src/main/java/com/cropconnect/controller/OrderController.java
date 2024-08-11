package com.cropconnect.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.CreateOrderRequest;
import com.cropconnect.dto.OrderDto;
import com.cropconnect.dto.OrderUpdateRequest;
import com.cropconnect.service.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderController {

	
	private OrderService orderService;
	
	@PostMapping
    public ResponseEntity<OrderDto> createOrder(@Valid @RequestBody CreateOrderRequest request) {
        OrderDto order = orderService.createOrder(request);
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }
	
	
	@DeleteMapping("/{orderId}")
    public ResponseEntity<ApiResponse> removeOrder(@PathVariable String orderId) {
        orderService.removeOrder(orderId);
        ApiResponse responseMessage = ApiResponse.builder()
                .message("order is removed !!")
                .build();
        return new ResponseEntity<>(responseMessage, HttpStatus.OK);

    }
	
	
	@GetMapping("/merchants/{merchantId}")
    public ResponseEntity<List<OrderDto>> getOrdersOfUser(@PathVariable Integer merchantId) {
        List<OrderDto> ordersOfUser = orderService.getOrdersOfMerchant(merchantId);
        return new ResponseEntity<>(ordersOfUser, HttpStatus.OK);
    }
	
	 @PutMapping("/{orderId}")
	    public ResponseEntity<OrderDto> updateOrder(
	            @PathVariable("orderId") String orderId,
	            @RequestBody OrderUpdateRequest request
	    ) {

	        OrderDto dto = this.orderService.updateOrder(orderId,request);
	        return new ResponseEntity<>(dto, HttpStatus.OK);


	    }
}
