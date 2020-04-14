package com.registration.dao;

import com.registration.common.vo.ApplyVo;
import com.registration.mode.KApply;

import java.util.List;

public interface KApplyDao {

    List<KApply> listKapply(ApplyVo applyVo);

    int listKapplyCount(ApplyVo applyVo);
}
