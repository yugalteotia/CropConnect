package com.cropconnect.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cropconnect.exception.ResourceNotFoundException;
import com.cropconnect.entities.Farmer;
import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.FarmerDto;
import com.cropconnect.repository.FarmerRepository;
import com.cropconnect.service.FarmerService;

@Service
@Transactional
public class FarmerServiceImpl implements FarmerService {

    @Autowired
    private FarmerRepository farmerRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<FarmerDto> getFarmers() {
        List<Farmer> farmers = farmerRepository.findAll();
        return farmers.stream().map(farmer -> modelMapper.map(farmer, FarmerDto.class)).toList();
    }

    @Override
    public ApiResponse addFarmer(FarmerDto farmerDto) {
        Farmer farmer = modelMapper.map(farmerDto, Farmer.class);
        farmerRepository.save(farmer);
        return new ApiResponse("Farmer added successfully");
    }

    @Override
    public ApiResponse updateFarmer(Integer id, FarmerDto farmerDto) {
        Farmer farmer = farmerRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Nt found!"));
        modelMapper.map(farmerDto, farmer);
        farmerRepository.save(farmer);
        return new ApiResponse("Farmer updated successfully");
    }

    @Override
    public ApiResponse deleteFarmer(Integer id) {
        farmerRepository.deleteById(id);
        return new ApiResponse("Farmer deleted successfully");
    }
}
