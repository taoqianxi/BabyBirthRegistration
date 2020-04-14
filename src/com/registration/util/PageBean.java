package com.registration.util;

import java.io.Serializable;

public class PageBean implements Serializable {
    private Pagination pagination;

    public Pagination getPagination() {
        return pagination;
    }

    public void setPagination(Pagination pagination) {
        this.pagination = pagination;
    }
}
