package com.cropconnect.service;

import com.cropconnect.dto.AddressDTO;
import com.cropconnect.dto.ApiResponse;
import com.cropconnect.entities.Address;

public interface AddressService {

	ApiResponse updateAddressByMerchantId(Integer merchatId, AddressDTO addressDTO) ;
	ApiResponse deleteAddress(Integer id);
}
