package com.cropconnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cropconnect.entities.Rating;

public interface RatingRepository extends JpaRepository<Rating, Integer> {

}
