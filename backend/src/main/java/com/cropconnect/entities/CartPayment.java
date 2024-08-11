//package com.cropconnect.entities;
//
//import lombok.Getter;
//import lombok.Setter;
//
//import javax.persistence.*;
//import javax.validation.constraints.NotNull;
//
//@Getter
//@Setter
//@Entity
//public class CartPayment {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "cart_payment_id", nullable = false)
//    private Integer id;
//
//    @NotNull
//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name = "cart_id", nullable = false)
//    private Cart cart;
//
//    @NotNull
//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name = "payment_id", nullable = false)
//    private Payment payment;
//
//}