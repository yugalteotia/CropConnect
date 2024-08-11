package com.cropconnect.service;

import com.cropconnect.dto.RatingDTO;
import java.util.List;

public interface RatingService {
    RatingDTO createRating(RatingDTO ratingDTO);
    RatingDTO updateRating(Integer id, RatingDTO ratingDTO);
    void deleteRating(Integer id);
    RatingDTO getRatingById(Integer id);
    List<RatingDTO> getAllRatings();
    List<RatingDTO> getTopRatedFarmers(int topN);
}
