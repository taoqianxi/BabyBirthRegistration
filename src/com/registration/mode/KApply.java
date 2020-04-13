package com.registration.mode;

import java.io.Serializable;
import java.util.Date;

public class KApply implements Serializable {

  private Long id;
  private Long userId;
  private String studentName;
  private Date dateOfBirth;
  private String patriarch;
  private String relation;
  private String phone;
  private Long sex;
  private Long auditStatus;
  private Date createTime;
  private Date updateTime;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getUserId() {
    return userId;
  }

  public void setUserId(Long userId) {
    this.userId = userId;
  }

  public String getStudentName() {
    return studentName;
  }

  public void setStudentName(String studentName) {
    this.studentName = studentName;
  }

  public Date getDateOfBirth() {
    return dateOfBirth;
  }

  public void setDateOfBirth(Date dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  public String getPatriarch() {
    return patriarch;
  }

  public void setPatriarch(String patriarch) {
    this.patriarch = patriarch;
  }

  public String getRelation() {
    return relation;
  }

  public void setRelation(String relation) {
    this.relation = relation;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public Long getSex() {
    return sex;
  }

  public void setSex(Long sex) {
    this.sex = sex;
  }

  public Long getAuditStatus() {
    return auditStatus;
  }

  public void setAuditStatus(Long auditStatus) {
    this.auditStatus = auditStatus;
  }

  public Date getCreateTime() {
    return createTime;
  }

  public void setCreateTime(Date createTime) {
    this.createTime = createTime;
  }

  public Date getUpdateTime() {
    return updateTime;
  }

  public void setUpdateTime(Date updateTime) {
    this.updateTime = updateTime;
  }
}
