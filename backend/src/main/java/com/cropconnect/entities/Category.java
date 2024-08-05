package com.cropconnect.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;

@Getter
@Setter
@Entity
public class Category extends BaseEntity {
    @Id
    @Column(name = "category_id", nullable = false)
    private Integer id;

    @Size(max = 50)
    @NotNull
    @Column(name = "category_name", nullable = false, length = 50)
    private String categoryName;

//    @Column(name = "created_timestamp")
//    private Instant createdTimestamp;
//
//    @Column(name = "updated_timestamp")
//    private Instant updatedTimestamp;

}