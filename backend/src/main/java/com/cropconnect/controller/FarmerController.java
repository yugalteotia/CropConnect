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
import com.cropconnect.dto.FarmerDto;
import com.cropconnect.service.FarmerService;

@RestController
@RequestMapping("/api/farmers")
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
    @GetMapping("/sorted/asc")
    public ResponseEntity<List<FarmerDto>> getFarmersSortedAsc(@RequestParam String sortBy) {
        List<FarmerDto> sortedFarmers = farmerService.getFarmersSortedAsc(sortBy);
        return ResponseEntity.status(HttpStatus.OK)
                             .body(sortedFarmers);
    }

    @GetMapping("/sorted/desc")
    public ResponseEntity<List<FarmerDto>> getFarmersSortedDesc(@RequestParam String sortBy) {
        List<FarmerDto> sortedFarmers = farmerService.getFarmersSortedDesc(sortBy);
        return ResponseEntity.status(HttpStatus.OK)
                             .body(sortedFarmers);
    }
    
    @GetMapping("/top10")
    public ResponseEntity<List<FarmerDto>> getTop10FarmersByRating() {
        List<FarmerDto> topFarmers = farmerService.getTop10FarmersByRating();
        return ResponseEntity.status(HttpStatus.OK).body(topFarmers);
    }
}
