package com.cropconnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cropconnect.entities.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Integer> {
	
}
