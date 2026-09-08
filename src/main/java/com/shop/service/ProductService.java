package com.shop.service;

import com.shop.domain.Product;
import com.shop.mapper.ProductMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProductService {

    private final ProductMapper productMapper;

    public List<Product> getProductList() {
        return productMapper.selectProductList();
    }
    
    public Product getProduct(Long prdNo) {
        Product product = productMapper.selectProduct(prdNo);
        if (product == null) {
            throw new IllegalArgumentException("상품을 찾을 수 없습니다. prdNo=" + prdNo);
        }
        return product;
    }
    
    
}