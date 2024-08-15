package com.cropconnect.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.CategoryDTO;
import com.cropconnect.entities.Category;
import com.cropconnect.exception.ResourceNotFoundException;
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
    	
            categoryRepository.save(modelMapper.map(categoryDTO,Category.class));
            return new ApiResponse("Category added successfully");
    }

    @Override
    public List<CategoryDTO> getAllCategories() {

        	List<Category> categories = categoryRepository.findAll();
            return categories.stream()
            						.map(category -> modelMapper.map(category, CategoryDTO.class))
            						.toList();
    }

    @Override
    public CategoryDTO getSingleCategory(Integer id) {

            Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found with id: " + id));
            return modelMapper.map(category, CategoryDTO.class);
    }

    @Override
    public ApiResponse updateCategory(Integer id, CategoryDTO updatedCategoryDTO) {
    	
            Category category = categoryRepository.findById(id)
            	.orElseThrow(() -> new ResourceNotFoundException("Category not found with id: " + id));
            
            modelMapper.map(updatedCategoryDTO, category);
            categoryRepository.save(category);
            return new ApiResponse("Category updated successfully");         
    }

    @Override
    public ApiResponse deleteCategory(Integer id) {
    	
            Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found with id: " + id));
            
            categoryRepository.delete(category);
            return new ApiResponse("Category deleted successfully");
    }
    
    @Override
    public List<CategoryDTO> searchCategories(String keyword){
    
    		List<Category> categories = categoryRepository.searchByCategoryName(keyword);
    	    return categories.stream()
	                .map(category -> {
	                    CategoryDTO categoryDTO = modelMapper.map(category, CategoryDTO.class);
	                    return categoryDTO;
	                })
	                .toList();
    }   
    
    
    @Override
    public List<CategoryDTO> getAllCategoriesSortedAsc(String sortBy){
    	
    		List<Category> categories =  categoryRepository.findAll(Sort.by(Sort.Direction.ASC, sortBy));
    		return categories.stream()
    								.map(category -> modelMapper.map(category, CategoryDTO.class))
    								.toList();
    }

	@Override
	public List<CategoryDTO> getAllCategoriesSortedDesc(String sortBy) {

    		List<Category> categories =  categoryRepository.findAll(Sort.by(Sort.Direction.DESC, sortBy));
    		return categories.stream()
    								.map(category -> modelMapper.map(category, CategoryDTO.class))
    								.toList();
    }
    
    
}
