package com.cropconnect.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.time.Instant;

@Getter
@Setter
@Entity
public class User extends BaseEntity{
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Size(max = 60)
    @NotNull
    @Column(name = "email", nullable = false, length = 60)
    @Email
    private String email;

    @Size(max = 40)
    @NotNull
    @Column(name = "password", nullable = false, length = 40)
//    @Pattern(regexp = "")
    private String password;

    @Size(max = 20)
    @NotNull
    @Column(name = "role", nullable = false, length = 20)
    private String role;

//    @Column(name = "created_timestamp")
//    private Instant createdTimestamp;
//
//    @Column(name = "updated_timestamp")
//    private Instant updatedTimestamp;

}