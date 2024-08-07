//package com.cropconnect.entities;
//
//import java.math.BigDecimal;
//import java.time.Instant;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.EnumType;
//import javax.persistence.Enumerated;
//import javax.persistence.FetchType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.Table;
//import javax.validation.constraints.NotNull;
//
//import lombok.Getter;
//import lombok.Setter;
//
//@Getter
//@Setter
//@Entity
//@Table(name = "orders")
//public class Order extends BaseEntity {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "order_id", nullable = false)
//    private Integer id;
//
//    @NotNull
//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name = "user_id", nullable = false)
//    private User user;
//
//    @Column(name = "order_date", nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
//    private Instant orderDate;
//
//    @Column(name = "total_amount", precision = 10, scale = 2)
//    private BigDecimal totalAmount;
//
//    @NotNull
//    @Enumerated(EnumType.STRING)
//    @Column(name = "order_status", nullable = false)
//    private OrderStatus orderStatus = OrderStatus.PENDING;
//}
