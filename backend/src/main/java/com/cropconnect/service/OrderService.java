package com.cropconnect.service;

import java.util.List;

import com.cropconnect.dto.CreateOrderRequest;
import com.cropconnect.dto.OrderDto;
import com.cropconnect.dto.OrderUpdateRequest;

public interface OrderService {

    //create order
    OrderDto createOrder(CreateOrderRequest orderDto);

    //remove order
    void removeOrder(String orderId);

    //get orders of user
    List<OrderDto> getOrdersOfMerchant(Integer merchantId);

    OrderDto updateOrder(String orderId, OrderUpdateRequest request);

    

}

