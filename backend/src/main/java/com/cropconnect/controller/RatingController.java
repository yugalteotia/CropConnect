package com.cropconnect.controller;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.RatingDTO;
import com.cropconnect.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ratings")
public class RatingController {

	@Autowired
	private RatingService ratingService;

	@PostMapping
	public ResponseEntity<ApiResponse> createRating(@RequestBody RatingDTO ratingDTO) {

		return ResponseEntity.status(HttpStatus.CREATED).body(ratingService.createRating(ratingDTO));

	}

	@PutMapping("/{id}")
	public ResponseEntity<ApiResponse> updateRating(@PathVariable Integer id, @RequestBody RatingDTO ratingDTO) {

		return ResponseEntity.status(HttpStatus.OK).body(ratingService.updateRating(id, ratingDTO));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<ApiResponse> deleteRating(@PathVariable Integer id) {
		return ResponseEntity.status(HttpStatus.OK).body(ratingService.deleteRating(id));
	}

	@GetMapping("/{id}")
	public ResponseEntity<RatingDTO> getRatingById(@PathVariable Integer id) {
		RatingDTO ratingDTO = ratingService.getRatingById(id);
		return ResponseEntity.ok(ratingDTO);
	}

	@GetMapping
	public ResponseEntity<List<RatingDTO>> getAllRatings() {
		List<RatingDTO> ratings = ratingService.getAllRatings();
		return ResponseEntity.ok(ratings);
	}

	@GetMapping("/top-rated-farmers")
	public ResponseEntity<List<RatingDTO>> getTopRatedFarmers(@RequestParam int topN) {
		List<RatingDTO> topRatedFarmers = ratingService.getTopRatedFarmers(topN);
		return ResponseEntity.ok(topRatedFarmers);
	}

}
