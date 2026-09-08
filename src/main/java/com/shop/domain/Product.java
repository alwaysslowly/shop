package com.shop.domain;

import lombok.Data;

@Data
public class Product {
    private Long prdNo;
    private Long ctgryNo;
    private String prdNm;
    private Long orgnlPrc;
    private Long salePrc;
    private String thmbImgUrl;
    private String saleSttsCd;
}