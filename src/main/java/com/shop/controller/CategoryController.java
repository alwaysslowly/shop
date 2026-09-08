package com.shop.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shop.domain.Category;
import com.shop.service.CategoryService;
import com.shop.util.ExcelUtil;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping
    public List<Category> list() {
        return categoryService.getCategoryList();
    }
    
    
    @GetMapping("/{ctgryNo}")
    public Category detail(@PathVariable Long ctgryNo) {
    	return categoryService.getCategory(ctgryNo);
    }
}