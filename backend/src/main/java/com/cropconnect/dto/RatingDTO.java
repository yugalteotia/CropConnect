package com.cropconnect.dto;

import java.math.BigDecimal;

import javax.validation.constraints.NotNull;

import com.cropconnect.entities.Crop;
import com.cropconnect.entities.Farmer;
import com.cropconnect.entities.Payment;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Getter
@Setter
public class RatingDTO {
	@NotNull
	 private Integer id;
	@NotNull
	private Integer paymentId;
	@NotNull
	 private Integer cropId;
	@NotNull
	private Integer farmerId;
	@NotNull
	private Integer rating;
	@NotNull
	private String commentId;
	@NotNull
	private String comment;
	
	private Farmer farmer;
	
}
