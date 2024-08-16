package com.cropconnect.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cropconnect.entities.Crop;
import com.cropconnect.entities.Farmer;

public interface CropRepository extends JpaRepository<Crop, Integer> {
	
		List<Crop> findByFarmer(Farmer farmer);
	
	  @Query("SELECT c FROM Crop c WHERE c.cropName LIKE %:keyword%")
	    List<Crop> searchByCropName(@Param("keyword") String keyword);
	  
	  

}
