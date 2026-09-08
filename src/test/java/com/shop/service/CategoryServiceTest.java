package com.shop.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CategoryServiceTest {

    @Autowired
    CategoryService categoryService;


	@Test
	void 카테고리_단건_조회() {
	    var category = categoryService.getCategory(1L);
	    System.out.println(category);
	}
    
    
}