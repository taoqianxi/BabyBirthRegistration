package com.registration.common.vo;

import com.registration.util.PageBean;
import com.registration.util.Pagination;

import java.io.Serializable;

public class ApplyVo extends PageBean implements Serializable {
    private Integer bussId;
    private String studentName;
    private Integer auditStatus;
    private Integer userId;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getBussId() {
        return bussId;
    }

    public void setBussId(Integer bussId) {
        this.bussId = bussId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public Integer getAuditStatus() {
        return auditStatus;
    }

    public void setAuditStatus(Integer auditStatus) {
        this.auditStatus = auditStatus;
    }
}
