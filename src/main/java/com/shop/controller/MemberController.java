package com.shop.controller;

import com.shop.domain.Member;
import com.shop.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping
    public Long signUp(@RequestBody Member member) {
        return memberService.signUp(member);
    }
}