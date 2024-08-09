package com.cropconnect.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cropconnect.dto.RatingDTO;
import com.cropconnect.service.RatingService;

@RestController
@RequestMapping("/ratings")
public class RatingController {

	@Autowired
    private RatingService ratingService;
	@PostMapping
    public ResponseEntity<RatingDTO> createRating(@RequestBody RatingDTO ratingDTO) {
        RatingDTO createdRating = ratingService.createRating(ratingDTO);
        return ResponseEntity.ok(createdRating);
    }
	
	
	
	
}
