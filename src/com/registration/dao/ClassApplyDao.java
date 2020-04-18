package com.registration.dao;

import com.registration.common.dto.ApplyBean;
import com.registration.common.dto.DivideIntoClassesDto;
import com.registration.common.dto.InTheClassDto;
import com.registration.common.vo.ApplyVo;
import com.registration.mode.KApply;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ClassApplyDao {

    List<KApply> listKApplyAll(ApplyVo applyVo);

    List<KApply> listKApplyByClassId(Integer id);

    Boolean insertClassApply(@Param("list") List<ApplyBean> inTheClassDtoList, @Param("classId")Integer classId);

    Boolean deleteClassApply(Integer classId);

    List<DivideIntoClassesDto> listDivideIntoClasses(Integer userId);
}
