package com.cropconnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cropconnect.entities.Tracking;

public interface TrackingRepository extends JpaRepository<Tracking, Integer> {

}
