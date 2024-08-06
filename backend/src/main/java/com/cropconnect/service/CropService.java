package com.cropconnect.service;

import java.util.List;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.CropDTO;

public interface CropService {

	ApiResponse addCrop(CropDTO cropDTO);
	List<CropDTO> getAllCrops();
	CropDTO getSingleCrop(Integer id);
	ApiResponse updateCrop(Integer id, CropDTO cropDTO);
	ApiResponse deleteCrop(Integer id);
	List<CropDTO> searchCrops(String keyword);
	List<CropDTO> getAllCropsSortedAsc(String sortBy);
	List<CropDTO> getAllCropsSortedDesc(String sortBy);
}
