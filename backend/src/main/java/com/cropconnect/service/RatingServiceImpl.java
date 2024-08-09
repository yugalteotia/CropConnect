package com.cropconnect.service;

import java.util.NoSuchElementException;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cropconnect.dto.RatingDTO;
import com.cropconnect.entities.Crop;
import com.cropconnect.entities.Farmer;
import com.cropconnect.entities.Rating;
import com.cropconnect.repository.FarmerRepository;
import com.cropconnect.repository.RatingRepository;
import com.cropconnect.repository.CropRepository;

@Service
public class RatingServiceImpl implements RatingService{

	@Autowired
    private RatingRepository ratingRepository;

    @Autowired
    private FarmerRepository farmerRepository;
    @Autowired
    private CropRepository cropRepository;
    @Autowired
    private ModelMapper modelMapper;

    public RatingDTO createRating(RatingDTO ratingDTO) {
        Rating rating = modelMapper.map(ratingDTO, Rating.class);
        rating.setPaymentId(ratingDTO.getPaymentId());
        Crop crop = cropRepository.findById(ratingDTO.getCropId())
                                  .orElseThrow(() -> new NoSuchElementException("Crop not found for ID: " + ratingDTO.getCropId()));
        rating.setCrop(crop);
        Farmer farmer = farmerRepository.findById(ratingDTO.getFarmerId())
                                        .orElseThrow(() -> new NoSuchElementException("Farmer not found for ID: " + ratingDTO.getFarmerId()));
        rating.setFarmer(farmer);     
        Rating savedRating = ratingRepository.save(rating);
        return modelMapper.map(savedRating, RatingDTO.class);
    }


	
}
