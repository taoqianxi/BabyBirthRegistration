package com.registration.service;

import com.registration.common.vo.ApplyVo;
import com.registration.dao.KApplyDao;
import com.registration.mode.KApply;
import com.registration.util.PageMode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KApplyServiceImpl implements KApplyService{
    @Autowired
    private KApplyDao kApplyDao;

    @Override
    public PageMode<List<KApply>> selectKapply(ApplyVo applyVo) throws Exception {
        return new PageMode<>(kApplyDao.listKapply(applyVo),kApplyDao.listKapplyCount(applyVo));
    }
}
