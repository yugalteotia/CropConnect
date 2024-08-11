package com.cropconnect.service;

import java.util.List;
import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.FarmerDto;
import com.cropconnect.entities.Farmer;

public interface FarmerService {

    List<FarmerDto> getFarmers();

    ApiResponse addFarmer(FarmerDto farmerDto);

    ApiResponse updateFarmer(Integer id, FarmerDto farmerDto);

    ApiResponse deleteFarmer(Integer id);

	List<FarmerDto> getFarmersSortedAsc(String sortBy);

	List<FarmerDto> getFarmersSortedDesc(String sortBy);

	List<FarmerDto> getTop10FarmersByRating();
	
	
    
    
}
