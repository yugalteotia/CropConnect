package com.cropconnect.service;

import java.util.List;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.CategoryDTO;
import com.cropconnect.entities.Category;

public interface CategoryService {

	ApiResponse addCategory(CategoryDTO categoryDTO);
	List<CategoryDTO> getAllCategories();
	CategoryDTO getSingleCategory(Integer id);
	ApiResponse updateCategory(Integer id, CategoryDTO updatedCategoryDTO);
	ApiResponse deleteCategory(Integer id);
	List<CategoryDTO> searchCategories(String keyword);
	List<CategoryDTO> getAllCategoriesSortedAsc(String sortBy);
	List<CategoryDTO> getAllCategoriesSortedDesc(String sortBy);
}
