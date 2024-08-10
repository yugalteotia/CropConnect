package com.cropconnect.dto;

import java.time.Instant;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FarmerDto {
    private Integer id;
    private Integer userId;
    //private Integer addressId;
    private String firstName;
    private String lastName;
    private Integer rating;
    private Instant createdTimestamp;
    private Instant updatedTimestamp;

}
