package com.cropconnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cropconnect.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
