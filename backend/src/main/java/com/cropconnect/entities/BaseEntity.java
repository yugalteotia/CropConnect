package com.cropconnect.entities;

import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

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
    
    @PrePersist
    protected void onCreate() {
        createdTimestamp = Instant.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedTimestamp = Instant.now();
    }
}
