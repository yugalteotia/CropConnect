package com.cropconnect.dto;

import java.time.Instant;

import javax.persistence.AccessType;

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
    private String firstName;
    private String lastName;
    private Integer rating;
    private Instant createdTimestamp;
    private Instant updatedTimestamp;
    private AddressDTO addressDTO;
    private UserDTO userDto;
    

}
