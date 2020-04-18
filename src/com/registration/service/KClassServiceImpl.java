package com.registration.service;

import com.registration.common.dto.ApplyBean;
import com.registration.common.dto.DivideIntoClassesDto;
import com.registration.common.dto.InTheClassDto;
import com.registration.common.vo.ClassVo;
import com.registration.dao.ClassApplyDao;
import com.registration.dao.KClassDao;
import com.registration.mode.KApply;
import com.registration.mode.KClass;
import com.registration.util.PageMode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class KClassServiceImpl implements KClassService {
    @Autowired
    private KClassDao kClassDao;
    @Autowired
    private ClassApplyDao classApplyDao;
    @Override
    public PageMode<List<KClass>> selectClass(ClassVo classVo) throws Exception {
        return new PageMode<>(kClassDao.listClass(classVo),kClassDao.listClassCount(classVo));
    }

    @Override
    public Boolean insertClass(KClass kClass) throws Exception {
        if (kClass.getId() == null) {
            return kClassDao.insertClass(kClass);
        } else {
            return kClassDao.updateClass(kClass);
        }

    }

    @Override
    public Boolean deleteClass(Integer id) throws Exception {
        return kClassDao.deleteClass(id);
    }

    @Override
    public KClass oneClass(Integer id) throws Exception {
        return kClassDao.oneClass(id);
    }

    @Override
    public InTheClassDto inTheClass(Integer id) throws Exception {
        InTheClassDto inTheClassDto = new InTheClassDto();
        List<KApply> listKApplyAll = classApplyDao.listKApplyAll(null);
        List<KApply> applyByClassId = classApplyDao.listKApplyByClassId(id);
        listKApplyAll.addAll(applyByClassId);
        List<Long> idList = applyByClassId.stream().map(KApply::getId).collect(Collectors.toList());

        List<ApplyBean> applyBeanList = new ArrayList<>();
        for (KApply kApply : listKApplyAll) {
            ApplyBean applyBean = new ApplyBean();
            applyBean.setValue(kApply.getId().toString());
            applyBean.setTitle(kApply.getStudentName());
            applyBeanList.add(applyBean);
        }

        inTheClassDto.setIdList(idList);
        inTheClassDto.setApplyList(applyBeanList);
        return inTheClassDto;
    }

    @Override
    public Boolean insertClassApply(List<ApplyBean> inTheClassDtoList, Integer classId) throws Exception {
        classApplyDao.deleteClassApply(classId);
        if (inTheClassDtoList != null && inTheClassDtoList.size() != 0) {
            classApplyDao.insertClassApply(inTheClassDtoList, classId);
        }
        return true;
    }

    @Override
    public List<DivideIntoClassesDto> listDivideIntoClasses(Integer userId) throws Exception {
        return classApplyDao.listDivideIntoClasses(userId);
    }
}
