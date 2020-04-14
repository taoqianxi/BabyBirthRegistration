package com.registration.service;

import com.registration.common.vo.ApplyVo;
import com.registration.mode.KApply;
import com.registration.util.PageMode;

import java.util.List;

public interface KApplyService {

    PageMode<List<KApply>> selectKapply(ApplyVo applyVo) throws Exception;
}
