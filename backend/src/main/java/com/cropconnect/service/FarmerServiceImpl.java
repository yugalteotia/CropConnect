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

import com.cropconnect.exception.ResourceNotFoundException;
import com.cropconnect.entities.Address;
import com.cropconnect.entities.Farmer;
import com.cropconnect.entities.Role;
import com.cropconnect.entities.User;
import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.FarmerDto;
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
    public List<FarmerDto> getFarmers() {
        List<Farmer> farmers = farmerRepository.findAll();
        return farmers.stream().map(farmer -> modelMapper.map(farmer, FarmerDto.class)).toList();
    }

    @Override
    public ApiResponse addFarmer(FarmerDto farmerDto) {
    	
    	Address address = modelMapper.map(farmerDto.getAddressDTO(), Address.class);
    	address = addressRepository.save(address);
    	
    	User user = modelMapper.map(farmerDto.getUserDto(), User.class);
    	user.setRole(Role.FARMER);
    	user = userRepository.save(user);
    	
        Farmer farmer = modelMapper.map(farmerDto, Farmer.class);
        farmer.setAddress(address);
        farmer.setUser(user);
        
        
        farmerRepository.save(farmer);
        return new ApiResponse("Farmer added successfully");
    }

    @Override
    public ApiResponse updateFarmer(Integer id, FarmerDto farmerDto) {
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
    public List<FarmerDto> getFarmersSortedAsc(String sortBy) {
        List<Farmer> farmers = farmerRepository.findAll(Sort.by(Sort.Direction.ASC, sortBy));
        return farmers.stream()
                      .map(farmer -> modelMapper.map(farmer, FarmerDto.class))
                      .toList();
    }

    @Override
    public List<FarmerDto> getFarmersSortedDesc(String sortBy) {
        List<Farmer> farmers = farmerRepository.findAll(Sort.by(Sort.Direction.DESC, sortBy));
        return farmers.stream()
                      .map(farmer -> modelMapper.map(farmer, FarmerDto.class))
                      .toList();
    }

    
    @Override
    public List<FarmerDto> getTop10FarmersByRating() {
        Pageable pageable = PageRequest.of(0, 10); 
        List<Farmer> topFarmers = farmerRepository.findTopFarmersByRating(pageable);
        return topFarmers.stream()
                         .map(farmer -> modelMapper.map(farmer, FarmerDto.class))
                         .collect(Collectors.toList());
    }
    
    
    
}
