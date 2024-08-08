package com.cropconnect.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cropconnect.entities.Cart;
import com.cropconnect.entities.Merchant;

public interface CartRepository extends JpaRepository<Cart, Integer> {
	Optional<Cart> findByMerchant(Merchant merchant);

}
