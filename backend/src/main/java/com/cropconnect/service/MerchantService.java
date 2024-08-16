package com.cropconnect.service;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.MerchantUpdateDTO;
import com.cropconnect.dto.MerchantDTO;

public interface MerchantService {
	
	ApiResponse addMerchant(MerchantDTO merchantWithAddressAndUserDTO);
	ApiResponse updateMerchant(Integer id, MerchantUpdateDTO merchantUpdateDTO);
	ApiResponse deleteMarchant(Integer id);
	
	MerchantDTO getMerchantByUserId(Integer userId);
	
}
