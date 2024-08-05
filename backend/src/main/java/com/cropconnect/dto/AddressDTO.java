package com.cropconnect.dto;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class AddressDTO {
    private String street;
    private String addressLine2;
    private String city;
    private String state;
    private String postalCode;
    private String country;
    private String mobileNumber;
}
