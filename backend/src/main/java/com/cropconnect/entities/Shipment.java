package com.cropconnect.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.Instant;

@Getter
@Setter
@Entity
public class Shipment {
    @Id
    @Column(name = "shipment_id", nullable = false)
    private Integer id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "payment_id", nullable = false)
    private Payment payment;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "address_id", nullable = false)
    private Address address;

    @Column(name = "shipment_date")
    private Instant shipmentDate;

    @Column(name = "delivery_date")
    private Instant deliveryDate;

}