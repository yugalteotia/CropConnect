package com.cropconnect.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.MerchantUpdateDTO;
import com.cropconnect.dto.MerchantDTO;
import com.cropconnect.entities.Address;
import com.cropconnect.entities.Merchant;
import com.cropconnect.entities.Role;
import com.cropconnect.entities.User;
import com.cropconnect.repository.AddressRepository;
import com.cropconnect.repository.MerchantRepository;
import com.cropconnect.repository.UserRepository;

@Service
@Transactional
public class MerchantServiceImpl implements MerchantService {
	
	@Autowired
	private MerchantRepository merchantRepository;
	
	@Autowired
	private AddressRepository addressRepository;
	
	@Autowired
	private UserRepository userRepository;
	
    @Autowired
    private ModelMapper modelMapper;

	@Override
	public ApiResponse addMerchant(MerchantDTO merchantDTO) {

			Address address = modelMapper.map(merchantDTO.getAddressDTO(), Address.class);
			address = addressRepository.save(address);
			
			User user = modelMapper.map(merchantDTO.getUserDto(), User.class);
			user.setRole(Role.MERCHANT);
			 user = userRepository.save(user);
			
			Merchant merchant = modelMapper.map(merchantDTO, Merchant.class);
			merchant.setAddress(address);
			merchant.setUser(user);
			
			merchantRepository.save(merchant);
			return new ApiResponse("Merchant added successfully");
	}

	@Override
	public ApiResponse updateMerchant(Integer id, MerchantUpdateDTO merchantUpdateDTO) {

			Merchant merchant = merchantRepository.findById(id)
					.orElseThrow(() -> new RuntimeException("Merchant not found with id: " + id));
			
			modelMapper.map(merchantUpdateDTO, merchant);
			merchantRepository.save(merchant);
			return new ApiResponse("Merchant updated successfully");
	}

	@Override
	public ApiResponse deleteMarchant(Integer id) {
		
		Merchant merchant = merchantRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Merchant not found with id: " + id));
		
		Address address = merchant.getAddress();
		if(address != null)
			addressRepository.delete(address);
		
		merchantRepository.delete(merchant);
		 return new ApiResponse("Merchant and associated address deleted successfully");
	}

}
