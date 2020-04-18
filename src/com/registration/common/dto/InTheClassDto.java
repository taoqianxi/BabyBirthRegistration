package com.registration.common.dto;

import com.registration.mode.KApply;

import java.util.List;

public class InTheClassDto {
    private List<ApplyBean> applyList;
    private List<Long> idList;

    public List<ApplyBean> getApplyList() {
        return applyList;
    }

    public void setApplyList(List<ApplyBean> applyList) {
        this.applyList = applyList;
    }

    public List<Long> getIdList() {
        return idList;
    }

    public void setIdList(List<Long> idList) {
        this.idList = idList;
    }

}
