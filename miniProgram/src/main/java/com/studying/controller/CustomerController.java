package com.studying.controller;

import com.studying.controller.utils.Result;
import com.studying.dao.daomain.Customer;
import com.studying.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customers")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @GetMapping//查询全部用户接口
    public Result getAll(){
       return new Result(true,customerService.list());
    }

    @PostMapping("/wxlogin")//登录接口
    public Result wxLogin(@RequestBody Customer customer){
        return new Result(true,customerService.wxLogin(customer));
    }

    @PutMapping("/punch")//打卡接口
    public Result punchCard(@RequestBody Customer customer){
        return new Result(true,customerService.punchCard(customer));
    }

    @PutMapping("/send/five/{openid}")//普通用户发布消息接口
    public Result sendMessageFive(@PathVariable String openid){
        return new Result(customerService.sendMessageFive(openid));
    }

    @PutMapping("/send/three/{openid}")//荣耀会员发布消息接口
    public Result sendMessageThree(@PathVariable String openid){
        return new Result(customerService.sendMessageThree(openid));
    }

    @GetMapping("/getGoldcoin/{openid}")//查询用户金币接口
    public Result getGoldcoinByOpenid(@PathVariable String openid){
        return  new Result(true,customerService.getGoldcoin(openid));
    }

    @PutMapping("/beVip/{openid}")//充值会员接口
    public Result beVipTrue(@PathVariable String openid){
        return new Result(customerService.beVipTrue(openid));
    }

    @GetMapping("/allInfo/{openid}")//查询单个用户全部信息接口
    public Result getAllByOpenid(@PathVariable String openid){
        return new Result(true,customerService.getAllByOpenid(openid));
    }

}
