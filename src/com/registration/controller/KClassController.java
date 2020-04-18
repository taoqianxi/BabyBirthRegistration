package com.registration.controller;

import com.alibaba.fastjson.JSON;
import com.registration.common.dto.ApplyBean;
import com.registration.common.dto.DivideIntoClassesDto;
import com.registration.common.dto.InTheClassDto;
import com.registration.common.vo.ApplyVo;
import com.registration.common.vo.ClassVo;
import com.registration.mode.KClass;
import com.registration.service.KClassService;
import com.registration.util.PageMode;
import com.registration.util.ResponseMode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("class")
@RestController
public class KClassController {
    @Autowired
    private KClassService kClassService;

    @RequestMapping("selectClass.do")
    public ResponseMode<PageMode<List<KClass>>> selectClass(@RequestBody ClassVo classVo){
        try {
            return ResponseMode.buildSuccessResponse(kClassService.selectClass(classVo));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseMode.buildErrorResponse(e.getMessage());
        }
    }

    @RequestMapping("insertClass.do")
    public ResponseMode<Boolean> insertClass(KClass kClass){
        try {
            return ResponseMode.buildSuccessResponse(kClassService.insertClass(kClass));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseMode.buildErrorResponse(e.getMessage());
        }
    }

    @RequestMapping("deleteClass.do")
    public ResponseMode<Boolean> deleteClass(Integer id){
        try {
            return ResponseMode.buildSuccessResponse(kClassService.deleteClass(id));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseMode.buildErrorResponse(e.getMessage());
        }
    }

    @RequestMapping("oneClass.do")
    public ResponseMode<KClass> oneClass(Integer id){
        try {
            return ResponseMode.buildSuccessResponse(kClassService.oneClass(id));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseMode.buildErrorResponse(e.getMessage());
        }
    }

    @RequestMapping("inTheClass.do")
    public ResponseMode<InTheClassDto> inTheClass(Integer id){
        try {
            return ResponseMode.buildSuccessResponse(kClassService.inTheClass(id));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseMode.buildErrorResponse(e.getMessage());
        }
    }

    @RequestMapping("insertClassApply.do")
    public ResponseMode<Boolean> insertClassApply(String inTheClassDtoList,Integer classId){
        try {
            return ResponseMode.buildSuccessResponse(kClassService.insertClassApply(JSON.parseArray(inTheClassDtoList, ApplyBean.class), classId));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseMode.buildErrorResponse(e.getMessage());
        }
    }

    @RequestMapping("listDivideIntoClasses.do")
    public ResponseMode<List<DivideIntoClassesDto>> listDivideIntoClasses(@RequestBody ApplyVo applyVo){
        try {
            return ResponseMode.buildSuccessResponse(kClassService.listDivideIntoClasses(applyVo.getUserId()));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseMode.buildErrorResponse(e.getMessage());
        }
    }
}
