package com.cropconnect.dto;

import java.math.BigDecimal;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class CropDTO {
    
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Integer id;
	
    @Size(max = 50)
    @NotNull
    private String cropName;
    
    @NotNull
    private Integer quantity;
     
    @NotNull
    private BigDecimal price;
    
    @Size(max = 255)
    private String imageUrl;
    
    @NotNull
    private Integer categoryId; // Use categoryId instead of Category
    
    @NotNull
    private Integer farmerId; // Use farmerId instead of Farmer
    
}

