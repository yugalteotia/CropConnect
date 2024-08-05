package com.cropconnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cropconnect.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {



}
