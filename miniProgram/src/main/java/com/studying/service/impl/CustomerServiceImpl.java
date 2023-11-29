package com.studying.service.impl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.studying.dao.CustomerDao;
import com.studying.dao.daomain.Customer;
import com.studying.dataSource.MiniProgramData;
import com.studying.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.xml.crypto.Data;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class CustomerServiceImpl extends ServiceImpl<CustomerDao, Customer> implements CustomerService {
    @Autowired
    private CustomerDao customerDao;

    @Autowired
    private MiniProgramData miniProgramData;

    @Override
    public Customer wxLogin(Customer customer) {

        String openIdUrl="https://api.weixin.qq.com/sns/jscode2session?appid="+miniProgramData.getAppid()+
                "&secret="+miniProgramData.getSecret()+"&js_code="+customer.getCode()+"&grant_type=authorization_code";
        RestTemplate restTemplate=new RestTemplate();
        String res=restTemplate.getForObject(openIdUrl,String.class);
        JSONObject jsonObject=JSON.parseObject(res);
        String openID= jsonObject.get("openid").toString();
        customer.setOpenid(openID);
        Date date=new Date();
        QueryWrapper qw=new QueryWrapper<Customer>().eq("openid",openID);
        Customer resultCustomer=getOne(qw);
        if(resultCustomer==null){
            SimpleDateFormat simp=new SimpleDateFormat("yyyy-MM-dd");  //获取用户注册时间
            String registertime=simp.format(date);
            customer.setRegisterdate(registertime);
            customer.setGoldcoin(10);  //新注册用户获得10金币
            customer.setLastpunchdate(0);
            customer.setVip(0);  //新注册用户不是vip
            customer.setAdministrator(0); //新注册用户均不是管理员
            customerDao.insert(customer);
            System.out.println("该用户不存在，插入数据库");
        }
        else {
            customerDao.updateNicknameByOpenid(openID, customer.getNickname());  //每次登录更新用户昵称
            customer.setGoldcoin(resultCustomer.getGoldcoin());
            customer.setLastpunchdate(resultCustomer.getLastpunchdate());
            customer.setRegisterdate(resultCustomer.getRegisterdate());
            customer.setVip(resultCustomer.getVip());
            customer.setAdministrator(resultCustomer.getAdministrator());
            System.out.println("该用户已存在");
        }
        return customer;
    }

    @Override
    public Customer punchCard(Customer customer) {
        Date date=new Date();
        SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyyMMdd");
        Integer todaydate=Integer.parseInt(simpleDateFormat.format(date));
        if(todaydate>customer.getLastpunchdate()) {
            customerDao.updateLastPunchDateByOpenid(customer.getOpenid(), todaydate);  //更新用户打卡时间
            customerDao.updateByGoldcoinOpenid(customer.getOpenid());  //用户金币数加2
            return customerDao.getAllByOpenid(customer.getOpenid());
        }
        else{
            return customerDao.getAllByOpenid(customer.getOpenid());
        }

    }

    @Override
    public Boolean sendMessageFive(String openid) {
        return customerDao.updateGoldcoinDecreaseFiveByOpenid(openid);
    }

    @Override
    public Boolean sendMessageThree(String openid) {
        return customerDao.updateGoldcoinDecreaseThreeByOpenid(openid);
    }

    @Override
    public Integer getGoldcoin(String openid) {
        return customerDao.getGoldcoinByOpenid(openid);
    }

    @Override
    public Boolean beVipTrue(String openid) {
        return customerDao.updateVipTrueByOpenid(openid);
    }

    @Override
    public Customer getAllByOpenid(String openid) {
        return customerDao.getAllByOpenid(openid);
    }
}
