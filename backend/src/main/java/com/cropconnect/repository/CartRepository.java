package com.cropconnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cropconnect.entities.Cart;

public interface CartRepository extends JpaRepository<Cart, Integer> {

}
