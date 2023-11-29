package com.studying.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.studying.dao.daomain.Customer;

public interface CustomerService extends IService<Customer> {
    Customer wxLogin(Customer customer);  //用户登录
    Customer punchCard(Customer customer);  //每日签到
    Boolean sendMessageFive(String openid);  //非vip发布消息
    Boolean sendMessageThree(String openid);  //vip发布消息
    Integer getGoldcoin(String openid);  //查询金币
    Boolean beVipTrue(String openid);
    Customer getAllByOpenid(String openid);  //查询用户全部信息
}
