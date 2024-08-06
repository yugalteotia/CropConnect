package com.cropconnect.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class AddressDTO {
	@Size(max = 100)
	@NotNull
    private String addressLine1;
	
	@Size(max = 100)
	@NotNull
    private String addressLine2;
	
	@Size(max = 100)
    private String city;
	
	@Size(max = 50)
    @NotNull
    private String state;
	
	@Size(max = 20)
    @NotNull
    private String postalCode;
	
	@Size(max = 50)
    @NotNull
    private String country;
	
	@Size(max = 13)
    @NotNull
    private String mobileNumber;
}
