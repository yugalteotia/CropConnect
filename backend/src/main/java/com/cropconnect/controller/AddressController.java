package com.cropconnect.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cropconnect.dto.AddressDTO;
import com.cropconnect.dto.ApiResponse;
import com.cropconnect.service.AddressService;

@RestController
@RequestMapping("/api/addresses")
public class AddressController {

	@Autowired
	private AddressService addressService;
	
	@PutMapping("/merchant/{merchantId}")
	public ResponseEntity<ApiResponse> updateAddressByMerchantId(@PathVariable Integer merchantId, @RequestBody AddressDTO addressDTO){
		 
		return ResponseEntity.status(HttpStatus.OK)
				.body(addressService.updateAddressByMerchantId(merchantId, addressDTO));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<ApiResponse> deleteAddress(@PathVariable Integer id){
		
		return ResponseEntity.status(HttpStatus.OK)
				.body(addressService.deleteAddress(id));
	}
}
