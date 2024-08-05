package com.cropconnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cropconnect.entities.Address;

public interface AddressRepository extends JpaRepository<Address, Integer> {

}
