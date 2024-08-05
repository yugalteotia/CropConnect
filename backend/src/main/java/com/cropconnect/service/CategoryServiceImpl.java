package com.cropconnect.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.entities.Category;
import com.cropconnect.repository.CategoryRepository;

@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public ApiResponse addCategory(Category category) {
    	
        try {
            categoryRepository.save(category);
            return new ApiResponse("Category added successfully");
            
        } catch (Exception e) {
            return new ApiResponse("Error while adding category: " );
            
        }
    }

    @Override
    public List<Category> getAllCategories() {
    	
        try {
            return categoryRepository.findAll();
            
        } catch (Exception e) {
            throw new RuntimeException("Error while fetching categories: " + e.getMessage());
        }
    }

    @Override
    public Category getSingleCategory(Integer id) {
    	
        try {
            return categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found with id: " + id));
            
        } catch (Exception e) {
            throw new RuntimeException("Error while fetching category: " + e.getMessage());
        }
    }

    @Override
    public ApiResponse updateCategory(Integer id, Category updatedCategory) {
    	
        try {
            Optional<Category> optionalCategory = categoryRepository.findById(id);
            
            if (optionalCategory.isPresent()) {
                Category category = optionalCategory.get();
                category.setCategoryName(updatedCategory.getCategoryName());
                categoryRepository.save(category);
                return new ApiResponse("Category updated successfully");
                
            } else {
                return new ApiResponse("Category not found with id: " + id);
            }
            
        } catch (Exception e) {
            return new ApiResponse("Error while updating category: " + e.getMessage());
        }
    }

    @Override
    public ApiResponse deleteCategory(Integer id) {
    	
        try {
            Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found with id: " + id));
            
            categoryRepository.delete(category);
            return new ApiResponse("Category deleted successfully");
            
        } catch (Exception e) {
            return new ApiResponse("Error while deleting category: " + e.getMessage());
        }
    }
}
