package com.cropconnect.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cropconnect.dto.AddressDTO;
import com.cropconnect.dto.ApiResponse;
import com.cropconnect.entities.Address;
import com.cropconnect.entities.Merchant;
import com.cropconnect.exception.ResourceNotFoundException;
import com.cropconnect.repository.AddressRepository;
import com.cropconnect.repository.MerchantRepository;

@Service
@Transactional
public class AddressServiceImpl implements AddressService {
	
    @Autowired
    private AddressRepository addressRepository;
    
    @Autowired
    private MerchantRepository merchantRepository;

    @Autowired
    private ModelMapper modelMapper;

	@Override
	public ApiResponse updateAddressByMerchantId(Integer merchantId, AddressDTO addressDTO) {
		
		try {
			
			Merchant merchant = merchantRepository.findById(merchantId)
					.orElseThrow(() -> new ResourceNotFoundException("Merchant not found with id: " + merchantId));
			
			Address address = merchant.getAddress();
			if (address == null)
				throw new ResourceNotFoundException("Address not found for merchant with id: "+merchantId);
			
			modelMapper.map(addressDTO, address);
			addressRepository.save(address);
			return new ApiResponse("Address updated successfully");
			
		}catch (Exception e) {
			return new ApiResponse("Error updating address: " + e.getMessage());
		}
	}
	
	public ApiResponse deleteAddress(Integer id) {
		//more efficient way of deleting
	    try {
	        addressRepository.deleteById(id);
	        
	    } catch (EmptyResultDataAccessException e) {
	        throw new ResourceNotFoundException("Address not found");
	    }
	    return new ApiResponse("Address deleted successfully");
	}

}
