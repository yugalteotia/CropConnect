package com.cropconnect.service;

import java.util.List;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.CategoryDTO;
import com.cropconnect.entities.Category;

public interface CategoryService {

	ApiResponse addCategory(CategoryDTO categoryDTO);
	List<Category> getAllCategories();
	Category getSingleCategory(Integer id);
	ApiResponse updateCategory(Integer id, CategoryDTO updatedCategoryDTO);
	ApiResponse deleteCategory(Integer id);
	List<Category> searchCategories(String keyword);
	List<Category> getAllCategoriesSortedAsc(String sortBy);
	List<Category> getAllCategoriesSortedDesc(String sortBy);
	
	
}
