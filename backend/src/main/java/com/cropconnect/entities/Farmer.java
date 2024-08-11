package com.cropconnect.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Farmer extends Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "farmer_id", nullable = false)
    private Integer id;
    
 // Default constructor
    public Farmer() {
    }

    // Constructor to create Farmer with only ID
    public Farmer(Integer id) {
        this.id = id;
    }

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "user_id")
//    private User user;
//
//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "address_id")
//    private Address address;
//
//    @Size(max = 50)
//    @NotNull
//    @Column(name = "first_name", nullable = false, length = 50)
//    private String firstName;
//
//    @Size(max = 50)
//    @NotNull
//    @Column(name = "last_name", nullable = false, length = 50)
//    private String lastName;
//
//    @Column(name = "rating")
//    private Integer rating;

//    @Column(name = "created_timestamp")
//    private Instant createdTimestamp;
//
//    @Column(name = "updated_timestamp")
//    private Instant updatedTimestamp;

}