package com.registration.mode;


import java.util.Date;

public class KUser {

  private Long id;
  private String account;
  private String password;
  private String phone;
  private Long sex;
  private Long type;
  private Date createTime;
  private Date updateTime;


  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getAccount() {
    return account;
  }

  public void setAccount(String account) {
    this.account = account;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
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

  public Long getType() {
    return type;
  }

  public void setType(Long type) {
    this.type = type;
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
