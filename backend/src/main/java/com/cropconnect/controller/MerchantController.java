package com.cropconnect.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.MerchantUpdateDTO;
import com.cropconnect.dto.MerchantDTO;
import com.cropconnect.service.MerchantService;

@RestController
@RequestMapping("/api/merchants")
public class MerchantController {
	
	@Autowired
	private MerchantService merchantService; 
	
	@PostMapping
	public ResponseEntity<ApiResponse> addMerchant(@RequestBody MerchantDTO merchantDTO){
		
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(merchantService.addMerchant(merchantDTO));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<ApiResponse> updateMerchant(@PathVariable Integer id, MerchantUpdateDTO merchantUpdateDTO){
		
			return ResponseEntity.status(HttpStatus.OK)
					.body(merchantService.updateMerchant(id, merchantUpdateDTO));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<ApiResponse> deleteMerchant(@PathVariable Integer id){
		
		return ResponseEntity.status(HttpStatus.OK)
				.body(merchantService.deleteMarchant(id));
	}
}
