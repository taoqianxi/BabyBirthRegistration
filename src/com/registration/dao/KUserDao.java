package com.registration.dao;

import com.registration.mode.KUser;
import org.apache.ibatis.annotations.Param;

public interface KUserDao {

    KUser login(@Param("type") int type,@Param("account") String account,@Param("password") String password);

}
