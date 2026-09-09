package com.shop.service;

import com.shop.domain.Member;
import com.shop.mapper.MemberMapper;
import com.shop.util.AesUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {

    private final MemberMapper memberMapper;
    private final PasswordEncoder passwordEncoder;
    private final AesUtil aesUtil;

    @Transactional
    public Long signUp(Member member) {
        if (memberMapper.countByMbrId(member.getMbrId()) > 0) {
            throw new IllegalArgumentException("이미 사용 중인 아이디입니다.");
        }

        member.setMbrPwd(passwordEncoder.encode(member.getMbrPwd()));
        member.setMobileNo(aesUtil.encrypt(member.getMobileNo()));

        memberMapper.insertMember(member);
        return member.getMbrNo();
    }
}