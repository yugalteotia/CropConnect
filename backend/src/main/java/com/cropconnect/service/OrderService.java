package com.cropconnect.service;

import java.util.List;

import com.cropconnect.dto.CreateOrderRequest;
import com.cropconnect.dto.OrderDTO;
import com.cropconnect.dto.OrderUpdateRequest;

public interface OrderService {

    //create order
    OrderDTO createOrder(CreateOrderRequest orderDto);

    //remove order
    void removeOrder(String orderId);

    //get orders of user
    List<OrderDTO> getOrdersOfMerchant(Integer merchantId);

    OrderDTO updateOrder(String orderId, OrderUpdateRequest request);

    

}

