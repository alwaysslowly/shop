package com.shop.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.shop.domain.Category;

@Mapper
public interface CategoryMapper {
	List<Category> selectCategoryList();

	Category selectCategory(Long ctgryNo);
}
