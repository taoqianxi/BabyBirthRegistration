package com.registration.controller;

import com.registration.mode.KApply;
import com.registration.service.KApplyService;
import com.registration.util.PageMode;
import com.registration.util.ResponseMode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("apply")
@RestController
public class KApplyController {

    @Autowired
    private KApplyService kApplyService;

    @RequestMapping("list.do")
    ResponseMode<PageMode<List<KApply>>> list(){
        try {
            return ResponseMode.buildSuccessResponse(kApplyService.selectKapply());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseMode.buildErrorResponse(e.getMessage());
        }
    }
}
