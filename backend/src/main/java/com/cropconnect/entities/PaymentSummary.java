package com.cropconnect.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.Instant;

@Getter
@Setter
@Entity
public class PaymentSummary {
    @Id
    @Column(name = "summary_id", nullable = false)
    private Integer id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "payment_id", nullable = false)
    private Payment payment;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "merchant_id", nullable = false)
    private Merchant merchant;

    @NotNull
    @Column(name = "payment_date", nullable = false)
    private Instant paymentDate;

    @NotNull
    @Column(name = "total_amount", nullable = false, precision = 14, scale = 2)
    private BigDecimal totalAmount;

    @Lob
    @Column(name = "items")
    private String items;

    @Column(name = "created_timestamp")
    private Instant createdTimestamp;

    @Column(name = "updated_timestamp")
    private Instant updatedTimestamp;

}