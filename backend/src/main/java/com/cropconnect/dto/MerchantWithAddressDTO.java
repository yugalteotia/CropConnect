package com.cropconnect.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MerchantWithAddressDTO {
    private String firstName;
    private String lastName;
    private Integer rating;
    private AddressDTO address;
}

