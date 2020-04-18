package com.registration.controller;

import com.registration.common.vo.RegisterVo;
import com.registration.common.vo.UserVo;
import com.registration.mode.KUser;
import com.registration.service.KUserService;
import com.registration.util.ResponseMode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
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
    public ResponseMode<Map<String,Object>> logIn(UserVo userVo) {
        try {
            return ResponseMode.buildSuccessResponse(kUserService.login(userVo));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseMode.buildErrorResponse(e.getMessage());
        }
    }

    /**
     *  家长登录
     */
    @RequestMapping("patriarchLogin.do")
    public ResponseMode<Map<String,Object>> patriarchLogin(@RequestBody UserVo userVo) {
        try {
            return ResponseMode.buildSuccessResponse(kUserService.login(userVo));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseMode.buildErrorResponse(e.getMessage());
        }
    }
    @RequestMapping("register.do")
    public ResponseMode<Boolean> register(@RequestBody RegisterVo registerVo){
        try {
            return ResponseMode.buildSuccessResponse(kUserService.register(registerVo));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseMode.buildErrorResponse(e.getMessage());
        }
    }

    @RequestMapping("updatePassWork.do")
    public ResponseMode<Boolean> updatePassWork(@RequestBody KUser kUser){
        try {
            return ResponseMode.buildSuccessResponse(kUserService.updatePassWork(kUser));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseMode.buildErrorResponse(e.getMessage());
        }
    }

}
