package com.registration.controller;

import com.registration.service.impl.KUserService;
import com.registration.util.ResponseMode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("user")
public class KUserController {

    @Autowired
    private KUserService kUserService;
    /**
    * Description: 家长用户登录
    */
    @RequestMapping("patriarchUserLogIn")
    public ResponseMode<Map<String,Object>> patriarchUserLogIn() {
        try {
            return ResponseMode.buildSuccessResponse(new HashMap<>());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseMode.buildErrorResponse(e.getMessage());
        }
    }
    /**
    * Description: 后台用户登录
    */
    @RequestMapping("login")
    public ResponseMode<Map<String,Object>> logIn() {
        try {
            return ResponseMode.buildSuccessResponse(new HashMap<>());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseMode.buildErrorResponse(e.getMessage());
        }
    }

    @RequestMapping("loginTest")
    public String loginTest() {

        return "{}";
    }
}
