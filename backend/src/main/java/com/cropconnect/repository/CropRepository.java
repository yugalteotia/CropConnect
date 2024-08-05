package com.cropconnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cropconnect.entities.Crop;

public interface CropRepository extends JpaRepository<Crop, Integer> {

}
