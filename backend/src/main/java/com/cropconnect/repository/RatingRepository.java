package com.cropconnect.repository;

import com.cropconnect.entities.Rating;

import org.springframework.data.domain.Pageable;		
import org.springframework.data.domain.PageRequest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RatingRepository extends JpaRepository<Rating, Integer> {
	
//	@Query("SELECT r FROM Rating r ORDER BY r.rating DESC")
	//List<Rating> findTopRatedFarmers(int topN);		
	
	@Query("SELECT r FROM Rating r ORDER BY r.rating DESC")
    List<Rating> findTopRatedFarmers(Pageable pageable);
}
