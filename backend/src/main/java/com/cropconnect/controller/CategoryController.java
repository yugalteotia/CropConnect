package com.cropconnect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cropconnect.dto.ApiResponse;
import com.cropconnect.entities.Category;
import com.cropconnect.service.CategoryService;

@RestController
@RequestMapping("/api/categories") // Adjusted to be more RESTful
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping
    public ResponseEntity<ApiResponse> addCategory(@RequestBody Category category) {
    	
        
        return ResponseEntity.status(HttpStatus.CREATED).body(categoryService.addCategory(category));
    }

    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
    	
        List<Category> categories = categoryService.getAllCategories();
        return ResponseEntity.ok(categories);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getSingleCategory(@PathVariable Integer id) {
    	
        Category category = categoryService.getSingleCategory(id);
        
        if (category != null) {
            return ResponseEntity.ok(category);
            
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("Category not found"));
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updateCategory(@PathVariable Integer id, @RequestBody Category category) {
    	
        ApiResponse response = categoryService.updateCategory(id, category);
        
        if (response.getMessage().contains("not found")) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            
        } else {
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteCategory(@PathVariable Integer id) {
    	
        ApiResponse response = categoryService.deleteCategory(id);
        
        if (response.getMessage().contains("not found")) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            
        } else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
    }
}
