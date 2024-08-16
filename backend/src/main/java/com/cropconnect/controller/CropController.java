package com.cropconnect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.CartDTO;
import com.cropconnect.dto.CategoryDTO;
import com.cropconnect.dto.CropDTO;
import com.cropconnect.dto.OrderDTO;
import com.cropconnect.service.CropService;

@RestController
@RequestMapping("/api/crops")
public class CropController {

	@Autowired
	private CropService cropService;
	
	@PostMapping
	public ResponseEntity<ApiResponse> addCrop(@RequestBody CropDTO cropDTO){
		
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(cropService.addCrop(cropDTO));
	}
	
	@GetMapping
	public ResponseEntity<List<CropDTO>> getAllCrops(){
		
		return ResponseEntity.status(HttpStatus.OK)
				.body(cropService.getAllCrops());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<CropDTO> getSingleCrop(@PathVariable Integer id){
		
		return ResponseEntity.status(HttpStatus.OK)
				.body(cropService.getSingleCrop(id));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<ApiResponse> updateCrop(@PathVariable Integer id, @RequestBody CropDTO cropDTO){
		System.out.println("DATA FROM REACT "+ cropDTO.getQuantity() +" "+cropDTO.getPrice());
		return ResponseEntity.status(HttpStatus.OK)
				.body(cropService.updateCrop(id, cropDTO));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<ApiResponse> deleteCrop(@PathVariable Integer id){
		
		return ResponseEntity.status(HttpStatus.OK)
				.body(cropService.deleteCrop(id));
	}
	
	@GetMapping("/search")
	public ResponseEntity<List<CropDTO>> searchCrop(@RequestParam String keyword){
		
		return ResponseEntity.status(HttpStatus.OK)
				.body(cropService.searchCrops(keyword));
	}
	
	@GetMapping("/sort/asc")
	public ResponseEntity<List<CropDTO>> getAllCropsSortedAsc(@RequestParam String sortBy){
		
		return ResponseEntity.status(HttpStatus.OK)
				.body(cropService.getAllCropsSortedAsc(sortBy));
	}
	
	@GetMapping("/sort/desc")
	public ResponseEntity<List<CropDTO>> getAllCropsSortedDesc(@RequestParam String sortBy){
		
		return ResponseEntity.status(HttpStatus.OK)
				.body(cropService.getAllCropsSortedDesc (sortBy));
	}	
	
	
	@GetMapping("/farmers/{farmerId}")
	public ResponseEntity<List<CropDTO>> getCropsOfFarmer(@PathVariable Integer farmerId) {
		List<CropDTO> cropsOfFarmer = cropService.getCropsOfFarmer(farmerId);
		return new ResponseEntity<>(cropsOfFarmer, HttpStatus.OK);
	}		
	
}
