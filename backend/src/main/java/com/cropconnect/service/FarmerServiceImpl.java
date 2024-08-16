package com.cropconnect.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cropconnect.dto.AddressDTO;
import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.CropDTO;
import com.cropconnect.dto.FarmerDTO;
import com.cropconnect.dto.UserDTO;
import com.cropconnect.entities.Address;
import com.cropconnect.entities.Crop;
import com.cropconnect.entities.Farmer;
import com.cropconnect.entities.Role;
import com.cropconnect.entities.User;
import com.cropconnect.exception.ResourceNotFoundException;
import com.cropconnect.repository.AddressRepository;
import com.cropconnect.repository.FarmerRepository;
import com.cropconnect.repository.UserRepository;


@Service
@Transactional
public class FarmerServiceImpl implements FarmerService {

    @Autowired
    private FarmerRepository farmerRepository;
    
    @Autowired
    private AddressRepository addressRepository ;
    
    @Autowired
    private UserRepository userRepository ;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<FarmerDTO> getFarmers() {
        List<Farmer> farmers = farmerRepository.findAll();
        return farmers.stream().map(farmer -> modelMapper.map(farmer, FarmerDTO.class)).toList();
    }
    
    @Override
    public FarmerDTO getSingleFarmer(Integer id) {
    	Farmer farmer = farmerRepository.findById(id)
    			.orElseThrow(()-> new ResourceNotFoundException("Farmer not found"));
    	FarmerDTO farmerDTO =  modelMapper.map(farmer, FarmerDTO.class);
    	Address address = farmer.getAddress();
//    	Address address = modelMapper.map(farmerDTO.getAddressDTO(), Address.class);
    	farmerDTO.setAddressDTO(modelMapper.map(address,AddressDTO.class ));
    	User user = farmer.getUser();
//    	User user = modelMapper.map(farmerDTO.getUserDto(), User.class);
    	farmerDTO.setUserDTO(modelMapper.map(user,UserDTO.class ));
    	farmerDTO.setUserId(user.getId());
    	
    	return farmerDTO;
    }

    @Override
    public ApiResponse addFarmer(FarmerDTO farmerDto) {
    	
    	Address address = modelMapper.map(farmerDto.getAddressDTO(), Address.class);
    	address = addressRepository.save(address);
    	
    	User user = modelMapper.map(farmerDto.getUserDTO(), User.class);
    	user.setRole(Role.FARMER);
    	user = userRepository.save(user);
    	
        Farmer farmer = modelMapper.map(farmerDto, Farmer.class);
        farmer.setAddress(address);
        farmer.setUser(user);
        
        
        farmerRepository.save(farmer);
        return new ApiResponse("Farmer added successfully");
    }

    @Override
    public ApiResponse updateFarmer(Integer id, FarmerDTO farmerDto) {
        Farmer farmer = farmerRepository.findById(id)
        		.orElseThrow(()->new ResourceNotFoundException("Farmer not Found with id: "+id));
        
        modelMapper.map(farmerDto, farmer);
        farmerRepository.save(farmer);
        return new ApiResponse("Farmer updated successfully");
    }

    @Override
    public ApiResponse deleteFarmer(Integer id) {
    	
    	Farmer farmer = farmerRepository.findById(id)
    			.orElseThrow(()->new ResourceNotFoundException("Farmer not Found with id: "+id) );
    	
    	Address address = farmer.getAddress();
    	if(address != null)
    		addressRepository.delete(address);
    	
        farmerRepository.deleteById(id);
        return new ApiResponse("Farmer deleted successfully");
    }
    
    @Override
    public List<FarmerDTO> getFarmersSortedAsc(String sortBy) {
        List<Farmer> farmers = farmerRepository.findAll(Sort.by(Sort.Direction.ASC, sortBy));
        return farmers.stream()
                      .map(farmer -> modelMapper.map(farmer, FarmerDTO.class))
                      .toList();
    }

    @Override
    public List<FarmerDTO> getFarmersSortedDesc(String sortBy) {
        List<Farmer> farmers = farmerRepository.findAll(Sort.by(Sort.Direction.DESC, sortBy));
        return farmers.stream()
                      .map(farmer -> modelMapper.map(farmer, FarmerDTO.class))
                      .toList();
    }

    
    @Override
    public List<FarmerDTO> getTop10FarmersByRating() {
        Pageable pageable = PageRequest.of(0, 10); 
        List<Farmer> topFarmers = farmerRepository.findTopFarmersByRating(pageable);
        return topFarmers.stream()
                         .map(farmer -> modelMapper.map(farmer, FarmerDTO.class))
                         .toList();
    }
    
    @Override
    public FarmerDTO getFarmerByUserId(Integer userId) {
        // Fetch the User entity
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        // Fetch the Farmer associated with the User
        Farmer farmer = farmerRepository.findByUser(user)
                .orElseThrow(() -> new ResourceNotFoundException("Farmer not found"));

        // Convert Farmer entity to FarmerDTO
        return modelMapper.map(farmer, FarmerDTO.class);
    }

    
    
    
}
