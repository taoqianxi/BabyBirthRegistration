package com.registration.controller;

import com.registration.common.vo.ApplyVo;
import com.registration.mode.KApply;
import com.registration.service.KApplyService;
import com.registration.util.PageMode;
import com.registration.util.Pagination;
import com.registration.util.ResponseMode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("apply")
public class KApplyController {

    @Autowired
    private KApplyService kApplyService;

    @RequestMapping("list.do")
    public ResponseMode<PageMode<List<KApply>>> list(@RequestBody ApplyVo applyVo){
        try {
            return ResponseMode.buildSuccessResponse(kApplyService.selectKapply(applyVo));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseMode.buildErrorResponse(e.getMessage());
        }
    }

    @RequestMapping("auditStatus.do")
    public ResponseMode<Boolean> auditStatus(ApplyVo applyVo){
        try {
            return ResponseMode.buildSuccessResponse(kApplyService.auditStatus(applyVo));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseMode.buildErrorResponse(e.getMessage());
        }
    }

    @RequestMapping("insertApply.do")
    public ResponseMode<Boolean> insertApply(@RequestBody KApply kApply) {
        try {
            return ResponseMode.buildSuccessResponse(kApplyService.insertApply(kApply));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseMode.buildErrorResponse(e.getMessage());
        }
    }
 }
