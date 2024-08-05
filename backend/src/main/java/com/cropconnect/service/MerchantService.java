package com.cropconnect.service;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.MerchantUpdateDTO;
import com.cropconnect.dto.MerchantWithAddressDTO;

public interface MerchantService {
	
	ApiResponse addMerchant(MerchantWithAddressDTO merchantWithAddressDTO);
	ApiResponse updateMerchant(Integer id, MerchantUpdateDTO merchantUpdateDTO);
	ApiResponse deleteMarchant(Integer id);
	
}
