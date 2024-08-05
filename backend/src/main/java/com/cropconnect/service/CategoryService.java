package com.cropconnect.service;

import java.util.List;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.entities.Category;

public interface CategoryService {

	ApiResponse addCategory(Category category);
	List<Category> getAllCategories();
	Category getSingleCategory(Integer id);
	ApiResponse updateCategory(Integer id, Category category);
	ApiResponse deleteCategory(Integer id);
	
	
}
