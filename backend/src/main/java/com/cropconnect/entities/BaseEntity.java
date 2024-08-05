package com.cropconnect.entities;

import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

import lombok.Getter;
import lombok.Setter;

@MappedSuperclass
@Getter
@Setter
public class BaseEntity {

	@Column(name = "created_timestamp")
    private Instant createdTimestamp;

    @Column(name = "updated_timestamp")
    private Instant updatedTimestamp;
}
