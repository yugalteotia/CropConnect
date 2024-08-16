package com.cropconnect.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {

//    private String createdTimestamp;
//    private String updatedTimestamp;
//    private Integer id;
	
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	private Integer id;
    private String email;
    private String password;
    private String role;
}
