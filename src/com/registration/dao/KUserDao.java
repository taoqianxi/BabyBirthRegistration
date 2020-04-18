package com.registration.dao;

import com.registration.mode.KUser;
import org.apache.ibatis.annotations.Param;

public interface KUserDao {

    KUser login(@Param("type") int type,@Param("account") String account,@Param("password") String password);

    Boolean register(@Param("user")KUser kUser);

    KUser oneUser(String account);

    Boolean updatePassWork(KUser kUser);
}
