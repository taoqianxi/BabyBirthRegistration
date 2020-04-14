package com.registration.common.vo;

import com.registration.util.PageBean;
import com.registration.util.Pagination;

import java.io.Serializable;

public class ApplyVo extends PageBean implements Serializable {

    private String studentName;
    private Integer auditStatus;

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
