package com.cropconnect.dto;

import java.time.Instant;

import javax.persistence.AccessType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FarmerDTO {
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Integer id;
    private Integer userId;
    //private Integer addressId;
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
