package com.cropconnect.service;

import com.cropconnect.dto.RatingDTO;
import com.cropconnect.entities.Farmer;
import com.cropconnect.entities.Rating;
import com.cropconnect.repository.RatingRepository;
import com.cropconnect.repository.FarmerRepository;
import org.modelmapper.ModelMapper;
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

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public RatingDTO createRating(RatingDTO ratingDTO) {
		Rating rating = modelMapper.map(ratingDTO, Rating.class);

		Farmer farmer = farmerRepository.findById(ratingDTO.getFarmerId())
				.orElseThrow(() -> new RuntimeException("Farmer not found"));
		rating.setFarmer(farmer);

		Rating savedRating = ratingRepository.save(rating);
		return modelMapper.map(savedRating, RatingDTO.class);
	}

	@Override
	public RatingDTO updateRating(Integer id, RatingDTO ratingDTO) {
		Rating rating = ratingRepository.findById(id).orElseThrow(() -> new RuntimeException("Rating not found"));

		modelMapper.map(ratingDTO, rating);

		Farmer farmer = farmerRepository.findById(ratingDTO.getFarmerId())
				.orElseThrow(() -> new RuntimeException("Farmer not found"));
		rating.setFarmer(farmer);

		Rating updatedRating = ratingRepository.save(rating);
		return modelMapper.map(updatedRating, RatingDTO.class);
	}

	@Override
	public void deleteRating(Integer id) {
		Rating rating = ratingRepository.findById(id).orElseThrow(() -> new RuntimeException("Rating not found"));
		ratingRepository.delete(rating);
	}

	@Override
	public RatingDTO getRatingById(Integer id) {
		Rating rating = ratingRepository.findById(id).orElseThrow(() -> new RuntimeException("Rating not found"));
		return modelMapper.map(rating, RatingDTO.class);
	}

	@Override
	public List<RatingDTO> getAllRatings() {
		return ratingRepository.findAll().stream().map(rating -> modelMapper.map(rating, RatingDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public List<RatingDTO> getTopRatedFarmers(int topN) {
		Pageable pageable = PageRequest.of(0, topN);
		return ratingRepository.findTopRatedFarmers(pageable).stream()
				.map(rating -> modelMapper.map(rating, RatingDTO.class)).collect(Collectors.toList());
	}
}
