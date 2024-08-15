package com.cropconnect.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cropconnect.dto.CategoryDTO;
import com.cropconnect.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

	 List<CategoryDTO> findByCategoryNameContaining(String categoryName);


    @Query("SELECT c FROM Category c WHERE c.categoryName LIKE %:keyword%")
    List<Category> searchByCategoryName(@Param("keyword") String keyword);

}
