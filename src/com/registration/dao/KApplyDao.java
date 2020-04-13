package com.registration.dao;

import com.registration.mode.KApply;

import java.util.List;

public interface KApplyDao {

    List<KApply> listKapply();

    int listKapplyCount();
}
