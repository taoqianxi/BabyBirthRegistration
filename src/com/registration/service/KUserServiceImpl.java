package com.registration.service;


import com.registration.common.vo.UserVo;
import com.registration.dao.KUserDao;
import com.registration.mode.KUser;
import com.registration.util.MD5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class KUserServiceImpl implements KUserService{
    @Autowired
    private KUserDao kUserDao;

    /**
     * 后台登录
     * @param userVo
     * @return
     * @throws Exception
     */
    @Override
    public Map<String, Object> login(UserVo userVo) throws Exception {
        Map<String,Object> result = new HashMap<>();

        KUser user = kUserDao.login(1, userVo.getAccount(), MD5Util.md5Encrypt32Lower(userVo.getPassword()));
        if (user == null) {
            result.put("success",false);
            result.put("message","用户名或者密码错误");
            return result;
        } else {
            result.put("data",user);
            result.put("success",true);
        }
        return result;
    }

}
