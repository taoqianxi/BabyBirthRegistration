package com.registration.service;

import com.registration.common.vo.RegisterVo;
import com.registration.common.vo.UserVo;
import com.registration.mode.KUser;
import com.registration.util.ResponseMode;

import java.util.Map;

public interface KUserService {
    Map<String,Object> login(UserVo userVo) throws Exception;

    Boolean register(RegisterVo registerVo) throws Exception;

    Boolean updatePassWork(KUser kUser) throws Exception;
}
