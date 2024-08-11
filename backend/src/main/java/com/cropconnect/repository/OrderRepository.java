package com.cropconnect.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cropconnect.entities.Merchant;
import com.cropconnect.entities.Order;

public interface OrderRepository extends JpaRepository<Order, String> {

	List<Order> findByMerchant(Merchant merchant);
}
