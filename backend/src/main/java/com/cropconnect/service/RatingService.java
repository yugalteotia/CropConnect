package com.cropconnect.service;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.RatingDTO;
import java.util.List;

public interface RatingService {
	ApiResponse createRating(RatingDTO ratingDTO);

	ApiResponse updateRating(Integer id, RatingDTO ratingDTO);

	ApiResponse deleteRating(Integer id);

	RatingDTO getRatingById(Integer id);

	List<RatingDTO> getAllRatings();

	List<RatingDTO> getTopRatedFarmers(int topN);
}
