package com.cropconnect.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;

@Getter
@Setter
@Entity
public class Tracking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tracking_id", nullable = false)
    private Integer id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "payment_id", nullable = false)
    private Payment payment;

    @Size(max = 50)
    @NotNull
    @Column(name = "tracking_number", nullable = false, length = 50)
    private String trackingNumber;

    @Size(max = 50)
    @NotNull
    @Column(name = "carrier", nullable = false, length = 50)
    private String carrier;

    @Size(max = 50)
    @NotNull
    @Column(name = "status", nullable = false, length = 50)
    private String status;

    @Column(name = "updated_timestamp")
    private Instant updatedTimestamp;

}