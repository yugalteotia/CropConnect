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
import org.springframework.web.bind.annotation.RestController;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.FarmerDto;
import com.cropconnect.service.FarmerService;

@RestController
@RequestMapping("/farmer")
public class FarmerController {

    @Autowired
    private FarmerService farmerService;

    @GetMapping
    public ResponseEntity<List<FarmerDto>> getAllFarmers() {
        return ResponseEntity.status(HttpStatus.OK).body(farmerService.getFarmers());
    }

    @PostMapping
    public ResponseEntity<ApiResponse> createFarmer(@RequestBody FarmerDto farmerDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(farmerService.addFarmer(farmerDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updateFarmer(@PathVariable int id, @RequestBody FarmerDto farmerDto) {
        return ResponseEntity.status(HttpStatus.OK).body(farmerService.updateFarmer(id, farmerDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteFarmer(@PathVariable int id) {
        return ResponseEntity.status(HttpStatus.OK).body(farmerService.deleteFarmer(id));
    }
}