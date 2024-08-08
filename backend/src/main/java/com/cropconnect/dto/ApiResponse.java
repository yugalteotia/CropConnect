package com.cropconnect.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@Builder

public class ApiResponse {
	
	private String message;
	private LocalDateTime timeStamp;
	public ApiResponse(String message) {
		
		super();
		this.message = message;
		this.timeStamp = LocalDateTime.now();
	}
	
}
