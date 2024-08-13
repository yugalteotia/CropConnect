package com.cropconnect.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Merchant extends Person{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "merchant_id", nullable = false)
    private Integer id;
    
    @OneToMany(mappedBy = "merchant" , fetch= FetchType.LAZY, cascade = CascadeType.REMOVE )
    private List<Order> orders = new ArrayList<>();

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



}