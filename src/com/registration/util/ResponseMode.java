package com.registration.util;

import java.io.Serializable;
/**
* Description: 返回实体类
* @author: 陶千禧
* @date: 2020/4/11 0:05
*/
public class ResponseMode<T> implements Serializable {
    private T data;
    private Boolean success = true;
    private Integer code = 0;
    private String message = "";


    public static <T> ResponseMode<T> buildErrorResponse(String message) {
        ResponseMode<T> responseMode = new ResponseMode<>();
        responseMode.setCode(500);
        responseMode.setSuccess(false);
        responseMode.setMessage(message);
        return responseMode;
    }

    public static <T> ResponseMode<T> buildErrorResponse(String message,Integer code) {
        ResponseMode<T> responseMode = new ResponseMode<>();
        responseMode.setCode(code);
        responseMode.setSuccess(false);
        responseMode.setMessage(message);
        return responseMode;
    }

    public static <T> ResponseMode<T> buildSuccessResponse(T data) {
        ResponseMode<T> responseMode = new ResponseMode<>();
        responseMode.setCode(0);
        responseMode.setSuccess(true);
        responseMode.setData(data);
        return responseMode;
    }

    public static <T> ResponseMode<T> buildSuccessResponse(T data,Boolean success) {
        ResponseMode<T> responseMode = new ResponseMode<>();
        responseMode.setCode(200);
        responseMode.setSuccess(success);
        responseMode.setData(data);
        return responseMode;
    }
    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
