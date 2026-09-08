package com.shop.service;

import com.shop.domain.Category;
import com.shop.mapper.CategoryMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CategoryService {

    private final CategoryMapper categoryMapper;

    public List<Category> getCategoryList() {
        return categoryMapper.selectCategoryList();
    }
    
    public Category getCategory(Long ctgryNo) {
    	Category category = categoryMapper.selectCategory(ctgryNo);
    	if(category == null) {
    	    throw new IllegalArgumentException("상품을 찾을 수 없습니다. ctgryNo=" + ctgryNo);
    	}
    	
        return category;
    }
    
    
}