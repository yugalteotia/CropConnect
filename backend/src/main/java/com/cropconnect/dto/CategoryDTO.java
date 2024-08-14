package com.cropconnect.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class CategoryDTO {
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Integer id;
	@Size(max = 50)
	@NotNull
	private String categoryName;
}
