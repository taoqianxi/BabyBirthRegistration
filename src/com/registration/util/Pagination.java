package com.registration.util;

public class Pagination {
    private Integer pageNum;
    private Integer pageSize;

    public Integer getPageNum() {
        return (pageNum -1) * pageSize;
    }

    public void setPageNum(Integer pageNum) {
        this.pageNum = pageNum;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }
}
