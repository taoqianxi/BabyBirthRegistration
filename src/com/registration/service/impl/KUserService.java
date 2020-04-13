package com.registration.service.impl;

import com.registration.common.vo.UserVo;
import com.registration.util.ResponseMode;

import java.util.Map;

public interface KUserService {
    Map<String,Object> login(UserVo userVo) throws Exception;
}
