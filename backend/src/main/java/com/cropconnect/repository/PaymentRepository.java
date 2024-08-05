package com.cropconnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cropconnect.entities.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {

}
