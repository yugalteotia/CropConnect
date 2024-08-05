package com.cropconnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cropconnect.entities.CartPayment;

public interface CartPaymentRepository extends JpaRepository<CartPayment, Integer> {

}
