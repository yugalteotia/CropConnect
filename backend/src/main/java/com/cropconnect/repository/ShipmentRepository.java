package com.cropconnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cropconnect.entities.Shipment;

public interface ShipmentRepository extends JpaRepository<Shipment, Integer> {

}
