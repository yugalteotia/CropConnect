package com.cropconnect.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cropconnect.entities.Merchant;
import com.cropconnect.entities.User;

public interface MerchantRepository extends JpaRepository<Merchant, Integer> {
	
	Optional<Merchant> findByUser(User user);
	
	
}
