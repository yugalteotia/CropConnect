package com.cropconnect.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.CategoryDTO;
import com.cropconnect.entities.Category;
import com.cropconnect.repository.CategoryRepository;

@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;
    
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ApiResponse addCategory(CategoryDTO categoryDTO) {
    	
        try {
        	
            categoryRepository.save(modelMapper.map(categoryDTO,Category.class));
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
    public ApiResponse updateCategory(Integer id, CategoryDTO updatedCategoryDTO) {
    	
        try {
            Optional<Category> optionalCategory = categoryRepository.findById(id);
            
            if (optionalCategory.isPresent()) {
                Category category = optionalCategory.get();
                category.setCategoryName(updatedCategoryDTO.getCategoryName());
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
    
    @Override
    public List<Category> searchCategories(String keyword){
    	try {
    		return categoryRepository.searchByCategoryName(keyword);
    		
    	}catch (Exception e) {
			throw new RuntimeException("Error while searching categories: "+e.getMessage());
		}
    }
    
    
    
    @Override
    public List<Category> getAllCategoriesSortedAsc(String sortBy){
    	
    	try {
    		return categoryRepository.findAll(Sort.by(Sort.Direction.ASC, sortBy));
    		
    	}catch (Exception e) {
			
    		throw new RuntimeException("Error while fetching sorted categories in ascending order: "+e.getMessage());
		}
    }

	@Override
	public List<Category> getAllCategoriesSortedDesc(String sortBy) {
		
		try {
			return categoryRepository.findAll(Sort.by(Sort.Direction.DESC, sortBy));
			
		}catch (Exception e) {
			
			throw new RuntimeException("Error while fetching sorted categories in descending order: "+e.getMessage());
		}
		
	}
    
    
}
