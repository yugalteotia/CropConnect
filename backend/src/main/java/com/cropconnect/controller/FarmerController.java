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
import com.cropconnect.dto.FarmerDTO;
import com.cropconnect.service.FarmerService;

@RestController
@RequestMapping("/api/farmers")
public class FarmerController {

    @Autowired
    private FarmerService farmerService;

    @GetMapping
    public ResponseEntity<List<FarmerDTO>> getAllFarmers() {
        return ResponseEntity.status(HttpStatus.OK).body(farmerService.getFarmers());
    }

    @PostMapping
    public ResponseEntity<ApiResponse> createFarmer(@RequestBody FarmerDTO farmerDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(farmerService.addFarmer(farmerDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updateFarmer(@PathVariable int id, @RequestBody FarmerDTO farmerDto) {
        return ResponseEntity.status(HttpStatus.OK).body(farmerService.updateFarmer(id, farmerDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteFarmer(@PathVariable int id) {
        return ResponseEntity.status(HttpStatus.OK).body(farmerService.deleteFarmer(id));
    }    
    @GetMapping("/sorted/asc")
    public ResponseEntity<List<FarmerDTO>> getFarmersSortedAsc(@RequestParam String sortBy) {
        List<FarmerDTO> sortedFarmers = farmerService.getFarmersSortedAsc(sortBy);
        return ResponseEntity.status(HttpStatus.OK)
                             .body(sortedFarmers);
    }

    @GetMapping("/sorted/desc")
    public ResponseEntity<List<FarmerDTO>> getFarmersSortedDesc(@RequestParam String sortBy) {
        List<FarmerDTO> sortedFarmers = farmerService.getFarmersSortedDesc(sortBy);
        return ResponseEntity.status(HttpStatus.OK)
                             .body(sortedFarmers);
    }
    
    @GetMapping("/top10")
    public ResponseEntity<List<FarmerDTO>> getTop10FarmersByRating() {
        List<FarmerDTO> topFarmers = farmerService.getTop10FarmersByRating();
        return ResponseEntity.status(HttpStatus.OK).body(topFarmers);
    }
}
