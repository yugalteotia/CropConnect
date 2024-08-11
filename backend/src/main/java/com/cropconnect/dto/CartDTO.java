package com.cropconnect.dto;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CartDTO {

    @NotNull
    private Integer merchantId;

    private List<CartItemDTO> items;

}
