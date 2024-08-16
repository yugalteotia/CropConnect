package com.cropconnect.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cropconnect.entities.Farmer;
import com.cropconnect.entities.User;

public interface FarmerRepository extends JpaRepository<Farmer, Integer> {

	@Query("SELECT f FROM Farmer f ORDER BY f.rating DESC")
	List<Farmer> findTopFarmersByRating(Pageable pageable);

	Optional<Farmer> findByUser(User user);

}
