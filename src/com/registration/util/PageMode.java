package com.registration.util;


public class PageMode<T> {
    private T data;
    private Integer count = 0;

    public PageMode(T data, Integer count) {
        this.data = data;
        this.count = count;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }
}
