package com.cropconnect.dto;

import java.util.ArrayList;
import java.util.List;

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
public class CartDTO {
	
	 	private Integer id;
 	    private MerchantDTO merchant;
	    private List<CartItemDTO> items = new ArrayList<>();
}
