package com.cropconnect.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.cropconnect.entities.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MerchantDTO {
	
    @Size(max = 50)
    @NotNull
    private String firstName;
    
    @Size(max = 50)
    @NotNull
    private String lastName;
    
    
//    private Integer rating;
    private AddressDTO addressDTO;
    private UserDTO userDTO;
}

