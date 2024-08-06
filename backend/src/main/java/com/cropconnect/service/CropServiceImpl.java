package com.cropconnect.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.CropDTO;
import com.cropconnect.entities.Category;
import com.cropconnect.entities.Crop;
import com.cropconnect.entities.Farmer;
import com.cropconnect.exception.ResourceNotFoundException;
import com.cropconnect.repository.CategoryRepository;
import com.cropconnect.repository.CropRepository;
import com.cropconnect.repository.FarmerRepository;

@Service
@Transactional
public class CropServiceImpl implements CropService {
	
	@Autowired
	private CropRepository cropRepository;
	
	@Autowired
	private FarmerRepository farmerRepository;
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public ApiResponse addCrop(CropDTO cropDTO) {
	    // Retrieve Farmer and Category entities by their IDs
	    Farmer farmer = farmerRepository.findById(cropDTO.getFarmerId())
	            .orElseThrow(() -> new ResourceNotFoundException("Farmer not found"));

	    Category category = categoryRepository.findById(cropDTO.getCategoryId())
	            .orElseThrow(() -> new ResourceNotFoundException("Category not found"));

	    // Map CropDTO to Crop entity
	    Crop crop = modelMapper.map(cropDTO, Crop.class);
	    crop.setCategory(category);
	    crop.setFarmer(farmer);

	    // Save Crop entity
	    cropRepository.save(crop);
	    return new ApiResponse("Crop added successfully");
	}


	@Override
	public List<CropDTO> getAllCrops() {
		
		List<Crop> crops = cropRepository.findAll();
		return crops.stream()
							.map(crop -> {
								CropDTO cropDTO =  modelMapper.map(crop, CropDTO.class);
								cropDTO.setFarmerId(crop.getFarmer().getId());
								cropDTO.setCategoryId(crop.getCategory().getId());
								return cropDTO;
								})
							.toList();					
	}

	@Override
	public CropDTO getSingleCrop(Integer id) {
		
		Crop crop = cropRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Crop not found"));
		
		CropDTO cropDTO = modelMapper.map(crop, CropDTO.class);		
		cropDTO.setCategoryId(crop.getCategory().getId());
		cropDTO.setFarmerId(crop.getFarmer().getId());
		return cropDTO;
		
	}

	@Override
	public ApiResponse updateCrop(Integer id, CropDTO cropDTO) {
		
		Crop crop = cropRepository.findById(id)
					.orElseThrow(()-> new ResourceNotFoundException("Crop not found"));
		
		modelMapper.map(cropDTO, crop);
		cropRepository.save(crop);
		return new ApiResponse("Crop updated successfully");
	}

	@Override
	public ApiResponse deleteCrop(Integer id) {
		//more efficient way of deleting
	    try {
	        cropRepository.deleteById(id);
	        
	    } catch (EmptyResultDataAccessException e) {
	        throw new ResourceNotFoundException("Crop not found");
	    }
	    return new ApiResponse("Crop deleted successfully");
	}

	@Override
	public List<CropDTO> searchCrops(String keyword) {
	    List<Crop> crops = cropRepository.searchByCropName(keyword);
	    return crops.stream()
	                .map(crop -> {
	                    CropDTO cropDTO = modelMapper.map(crop, CropDTO.class);
	                    cropDTO.setFarmerId(crop.getFarmer().getId()); // Set additional fields if necessary
	                    cropDTO.setCategoryId(crop.getCategory().getId());
	                    return cropDTO;
	                })
	                .toList();
	}

	@Override
	public List<CropDTO> getAllCropsSortedAsc(String sortBy) {
		
		List<Crop> crops = cropRepository.findAll(Sort.by(Sort.Direction.ASC, sortBy));
		return crops.stream()
				.map(crop -> {
					CropDTO cropDTO =  modelMapper.map(crop, CropDTO.class);
					cropDTO.setFarmerId(crop.getFarmer().getId());
					cropDTO.setCategoryId(crop.getCategory().getId());
					return cropDTO;
					})
				.toList();	
	}

	@Override
	public List<CropDTO> getAllCropsSortedDesc(String sortBy) {
		
		List<Crop> crops = cropRepository.findAll(Sort.by(Sort.Direction.DESC, sortBy));
		return crops.stream()
				.map(crop -> {
					CropDTO cropDTO =  modelMapper.map(crop, CropDTO.class);
					cropDTO.setFarmerId(crop.getFarmer().getId());
					cropDTO.setCategoryId(crop.getCategory().getId());
					return cropDTO;
					})
				.toList();	
	}


}
