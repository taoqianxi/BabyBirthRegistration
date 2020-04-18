package com.registration.common.vo;

import com.registration.util.Pagination;

import java.io.Serializable;

public class ClassVo implements Serializable {
    private String className;
    private String grade;

    private Pagination pagination;

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public Pagination getPagination() {
        return pagination;
    }

    public void setPagination(Pagination pagination) {
        this.pagination = pagination;
    }
}
