package com.cropconnect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.dto.CategoryDTO;
import com.cropconnect.entities.Category;
import com.cropconnect.service.CategoryService;

@RestController
@RequestMapping("/api/categories") 
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping
    public ResponseEntity<ApiResponse> addCategory(@RequestBody CategoryDTO categoryDTO) {
    	
        
        return ResponseEntity.status(HttpStatus.CREATED).body(categoryService.addCategory(categoryDTO));
    }

    @GetMapping
    public ResponseEntity<List<CategoryDTO>> getAllCategories() {
    	
        List<CategoryDTO> categories = categoryService.getAllCategories();
        return ResponseEntity.status(HttpStatus.OK)
        		.body(categories);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoryDTO> getSingleCategory(@PathVariable Integer id) {
    	
        CategoryDTO categoryDTO = categoryService.getSingleCategory(id);
        return ResponseEntity.status(HttpStatus.OK)
        		.body(categoryDTO);
        
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updateCategory(@PathVariable Integer id, @RequestBody CategoryDTO updatedCategoryDTO) {
    	
        ApiResponse response = categoryService.updateCategory(id, updatedCategoryDTO);
        return ResponseEntity.status(HttpStatus.OK).body(response);
            
       
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteCategory(@PathVariable Integer id) {
    	
        ApiResponse response = categoryService.deleteCategory(id);
        return ResponseEntity.status(HttpStatus.OK).body(response);
            
    }
    
    @GetMapping("/sorted/asc")
    public ResponseEntity<List<CategoryDTO>> getAllCategoriesSortedAsc(@RequestParam String sortBy){
    	
    	return ResponseEntity.status(HttpStatus.OK)
    			.body(categoryService.getAllCategoriesSortedAsc(sortBy));
    }
    
    @GetMapping("/sorted/desc")
    public ResponseEntity<List<CategoryDTO>> getAllCategoriesSortedDesc(@RequestParam String sortBy){
    	
    	return ResponseEntity.status(HttpStatus.OK)
    			.body(categoryService.getAllCategoriesSortedDesc(sortBy));
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<CategoryDTO>> searchCategories(@RequestParam String keyword) {
    	
    	return ResponseEntity.status(HttpStatus.OK)
    			.body(categoryService.searchCategories(keyword));
    }
}
