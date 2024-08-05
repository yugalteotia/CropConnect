package com.cropconnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cropconnect.entities.Farmer;

public interface FarmerRepository extends JpaRepository<Farmer, Integer> {

}
