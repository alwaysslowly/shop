package com.shop.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.shop.domain.Product;

@Mapper
public interface ProductMapper {
	List<Product> selectProductList();

}
