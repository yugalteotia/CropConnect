package com.cropconnect.service;

import java.util.List;
import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.FarmerDto;

public interface FarmerService {

    List<FarmerDto> getFarmers();

    ApiResponse addFarmer(FarmerDto farmerDto);

    ApiResponse updateFarmer(Integer id, FarmerDto farmerDto);

    ApiResponse deleteFarmer(Integer id);
    
    
}
