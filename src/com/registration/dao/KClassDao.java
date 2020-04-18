package com.registration.dao;

import com.registration.common.vo.ClassVo;
import com.registration.mode.KClass;
import com.registration.util.PageMode;

import java.util.List;

public interface KClassDao {

    List<KClass> listClass(ClassVo classVo);

    KClass oneClass(Integer id);

    int listClassCount(ClassVo classVo);

    Boolean insertClass(KClass kClass);

    Boolean deleteClass(Integer id);

    Boolean updateClass(KClass kClass);
}
