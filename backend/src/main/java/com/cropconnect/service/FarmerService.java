package com.cropconnect.service;

import java.util.List;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.CropDTO;
import com.cropconnect.dto.FarmerDTO;

public interface FarmerService {

    List<FarmerDTO> getFarmers();
    FarmerDTO getSingleFarmer(Integer id);

    ApiResponse addFarmer(FarmerDTO farmerDto);

    ApiResponse updateFarmer(Integer id, FarmerDTO farmerDto);

    ApiResponse deleteFarmer(Integer id);

	List<FarmerDTO> getFarmersSortedAsc(String sortBy);

	List<FarmerDTO> getFarmersSortedDesc(String sortBy);

	List<FarmerDTO> getTop10FarmersByRating();
	
	FarmerDTO getFarmerByUserId(Integer userId);
	
	
    
    
}
