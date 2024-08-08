package com.cropconnect.dto;

import java.math.BigDecimal;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartItemDTO {

    @NotNull
    private Integer cropId;
    @NotNull
    private String cropName;
    @NotNull
    private Integer quantity;
    @NotNull
    private BigDecimal price;
}
