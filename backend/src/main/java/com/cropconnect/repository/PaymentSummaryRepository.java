package com.cropconnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cropconnect.entities.PaymentSummary;

public interface PaymentSummaryRepository extends JpaRepository<PaymentSummary, Integer> {

}
