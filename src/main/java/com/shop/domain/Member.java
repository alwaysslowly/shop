package com.shop.domain;

import lombok.Data;

@Data
public class Member {
    private Long mbrNo;
    private String mbrId;
    private String mbrPwd;
    private String mbrNm;
    private String email;
    private String mobileNo;
}