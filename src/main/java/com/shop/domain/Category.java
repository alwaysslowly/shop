package com.shop.domain;

import lombok.Data;

@Data
public class Category {
	 	private Long ctgryNo;
	    private Long upCtgryNo;
	    private String ctgryNm;
	    private Long ctgryLvl;
	    private Long sortOrd;
	    private String useYn;
}
