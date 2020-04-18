package com.registration.service;

import com.registration.common.dto.ApplyBean;
import com.registration.common.dto.DivideIntoClassesDto;
import com.registration.common.dto.InTheClassDto;
import com.registration.common.vo.ClassVo;
import com.registration.mode.KClass;
import com.registration.util.PageMode;

import java.util.List;

public interface KClassService {

    PageMode<List<KClass>> selectClass(ClassVo classVo) throws Exception;

    Boolean insertClass(KClass kClass) throws Exception;

    Boolean deleteClass(Integer id) throws Exception;

    KClass oneClass(Integer id) throws Exception;

    InTheClassDto inTheClass(Integer id) throws Exception;

    Boolean insertClassApply(List<ApplyBean> applyBeanList, Integer classId) throws Exception;

    List<DivideIntoClassesDto> listDivideIntoClasses(Integer userId) throws Exception;
}
