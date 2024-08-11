package com.cropconnect.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cropconnect.dto.FarmerDto;
import com.cropconnect.entities.Farmer;

public interface FarmerRepository extends JpaRepository<Farmer, Integer> {

//	@Query("SELECT new com.cropconnect.dto.FarmerDto(f.id, f.firstName, f.lastName, AVG(r.rating)) " +
//	           "FROM Farmer f JOIN f.ratings r " +
//	           "GROUP BY f.id " +
//	           "ORDER BY AVG(r.rating) DESC")
//	    List<FarmerDto> getTopFarmersDtoByRating(Pageable pageable);
}
