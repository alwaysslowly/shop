package com.shop.controller;

import com.shop.domain.Product;
import com.shop.service.ProductService;
import com.shop.util.ExcelUtil;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public List<Product> list() {
        return productService.getProductList();
    }
    

    @GetMapping("/excel")
    public void downloadExcel(HttpServletResponse response) throws IOException {
        List<Product> products = productService.getProductList();
        String[] headers = {"상품번호", "상품명", "정가", "판매가", "판매상태"};
        ExcelUtil.download(response, "상품목록", headers, products, p -> new Object[]{
                p.getPrdNo(),
                p.getPrdNm(),
                p.getOrgnlPrc(),
                p.getSalePrc(),
                p.getSaleSttsCd()
        });
    }
    
    
    @GetMapping("/{prdNo}")
    public Product detail(@PathVariable Long prdNo) {
    	return productService.getProduct(prdNo);
    }
}