package com.cropconnect.entities;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@MappedSuperclass
@Getter
@Setter
public class Person extends BaseEntity{
	
	 @ManyToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name = "user_id")
	    private User user;

	    @OneToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name = "address_id")
	    private Address address;

	    @Size(max = 50)
	    @NotNull
	    @Column(name = "first_name", nullable = false, length = 50)
	    private String firstName;

	    @Size(max = 50)
	    @NotNull
	    @Column(name = "last_name", nullable = false, length = 50)
	    private String lastName;

	    @Column(name = "rating")
	    private Integer rating;

}
