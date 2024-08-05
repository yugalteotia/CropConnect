package com.cropconnect.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.MerchantUpdateDTO;
import com.cropconnect.dto.MerchantWithAddressDTO;
import com.cropconnect.entities.Address;
import com.cropconnect.entities.Merchant;
import com.cropconnect.repository.AddressRepository;
import com.cropconnect.repository.MerchantRepository;

@Service
@Transactional
public class MerchantServiceImpl implements MerchantService {
	
	@Autowired
	private MerchantRepository merchantRepository;
	
	@Autowired
	private AddressRepository addressRepository;
	
    @Autowired
    private ModelMapper modelMapper;

	@Override
	public ApiResponse addMerchant(MerchantWithAddressDTO merchantWithAddressDTO) {
		
		try {
			Address address = modelMapper.map(merchantWithAddressDTO.getAddress(), Address.class);
			address = addressRepository.save(address);
			
			Merchant merchant = modelMapper.map(merchantWithAddressDTO, Merchant.class);
			merchant.setAddress(address);
			
			merchantRepository.save(merchant);
			return new ApiResponse("Merchant added successfully");
			
		}catch (Exception e) {
			e.printStackTrace();
			return new ApiResponse("Error while adding Merchant");
		}
	}

	@Override
	public ApiResponse updateMerchant(Integer id, MerchantUpdateDTO merchantUpdateDTO) {
		
		try {
			Merchant merchant = merchantRepository.findById(id)
					.orElseThrow(() -> new RuntimeException("Merchant not found with id: " + id));
			
			modelMapper.map(merchantUpdateDTO, merchant);
			merchantRepository.save(merchant);
			return new ApiResponse("Merchant updated successfully");
			
		}catch (Exception e) {
			return new ApiResponse("Error while updating merchant");
		}

	}

	@Override
	public ApiResponse deleteMarchant(Integer id) {
		
		try {
		Merchant merchant = merchantRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Merchant not found with id: " + id));
		
		Address address = merchant.getAddress();
		if(address != null)
			addressRepository.delete(address);
		
		merchantRepository.delete(merchant);
		 return new ApiResponse("Merchant and associated address deleted successfully");
		 
		} catch (Exception e) {
        return new ApiResponse("Error deleting merchant: " + e.getMessage());
        
		}
	}

}
