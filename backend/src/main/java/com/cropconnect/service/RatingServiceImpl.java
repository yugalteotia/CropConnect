package com.cropconnect.service;

import com.cropconnect.dto.RatingDTO;
import com.cropconnect.entities.Farmer;
import com.cropconnect.entities.Rating;
import com.cropconnect.repository.RatingRepository;
import com.cropconnect.repository.FarmerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import org.springframework.data.domain.Pageable;		
import org.springframework.data.domain.PageRequest;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RatingServiceImpl implements RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    @Autowired
    private FarmerRepository farmerRepository;

    @Override
    public RatingDTO createRating(RatingDTO ratingDTO) {
        Rating rating = new Rating();
        rating.setRating(ratingDTO.getRating());

        Farmer farmer = farmerRepository.findById(ratingDTO.getFarmerId())
            .orElseThrow(() -> new RuntimeException("Farmer not found"));
        rating.setFarmer(farmer);

        Rating savedRating = ratingRepository.save(rating);
        return convertToDTO(savedRating);
    }

    @Override
    public RatingDTO updateRating(Integer id, RatingDTO ratingDTO) {
        Rating rating = ratingRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Rating not found"));
        
        rating.setRating(ratingDTO.getRating());

        Farmer farmer = farmerRepository.findById(ratingDTO.getFarmerId())
            .orElseThrow(() -> new RuntimeException("Farmer not found"));
        rating.setFarmer(farmer);

        Rating updatedRating = ratingRepository.save(rating);
        return convertToDTO(updatedRating);
    }

    @Override
    public void deleteRating(Integer id) {
        Rating rating = ratingRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Rating not found"));
        ratingRepository.delete(rating);
    }

    @Override
    public RatingDTO getRatingById(Integer id) {
        Rating rating = ratingRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Rating not found"));
        return convertToDTO(rating);
    }

    @Override
    public List<RatingDTO> getAllRatings() {
        return ratingRepository.findAll().stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
    @Override
  public List<RatingDTO> getTopRatedFarmers(int topN) {
       Pageable pageable = PageRequest.of(0, topN);
        return ratingRepository.findTopRatedFarmers(pageable).stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }

   // @Override
//   public List<RatingDTO> getTopRatedFarmers(int topN) {
//        return ratingRepository.findTopRatedFarmers(topN).stream()
//            .map(this::convertToDTO)
//            .collect(Collectors.toList());
//    }

    private RatingDTO convertToDTO(Rating rating) {
        RatingDTO ratingDTO = new RatingDTO();
        ratingDTO.setId(rating.getId());
        ratingDTO.setFarmerId(rating.getFarmer().getId());
        ratingDTO.setRating(rating.getRating());
        return ratingDTO;
    }
}
