package com.cropconnect.dto;

import com.cropconnect.entities.Crop;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartItemDto {
	private int cartItemId;
	private Crop crop;
	private int quantity;
	private int totalPrice;
}
