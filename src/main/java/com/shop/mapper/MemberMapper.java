package com.shop.mapper;

import com.shop.domain.Member;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {

    int countByMbrId(String mbrId);

    int insertMember(Member member);
}