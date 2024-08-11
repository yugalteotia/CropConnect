package com.cropconnect.controller;

import com.cropconnect.dto.RatingDTO;
import com.cropconnect.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ratings")
public class RatingController {

    @Autowired
    private RatingService ratingService;	


    @PostMapping
    public ResponseEntity<RatingDTO> createRating(@RequestBody RatingDTO ratingDTO) {
        RatingDTO createdRating = ratingService.createRating(ratingDTO);
        return new ResponseEntity<>(createdRating, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RatingDTO> updateRating(@PathVariable Integer id, @RequestBody RatingDTO ratingDTO) {
        RatingDTO updatedRating = ratingService.updateRating(id, ratingDTO);
        return ResponseEntity.ok(updatedRating);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRating(@PathVariable Integer id) {
        ratingService.deleteRating(id);
        return ResponseEntity.ok().build(); 
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
