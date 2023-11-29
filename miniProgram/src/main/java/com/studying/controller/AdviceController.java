package com.studying.controller;

import com.studying.controller.utils.Result;
import com.studying.dao.daomain.Advice;
import com.studying.service.AdviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/advices")
public class AdviceController {
    @Autowired
    private AdviceService adviceService;

    @PostMapping //存储用户反馈意见接口
    public Result saveAdvice(@RequestBody Advice advice){
        return new Result(true,adviceService.save(advice));
    }

    @GetMapping("/myadvice/{currentPage}/{pageSize}/{openid}")  //分页查询用户反馈意见接口
    public Result getMyAdvice(@PathVariable int currentPage,@PathVariable int pageSize,@PathVariable String openid){
        return new Result(true,adviceService.getMyAdvicePage(currentPage,pageSize,openid));
    }

    @DeleteMapping("/deleteMyAdvice/{adviceid}")//撤销单条反馈意见接口
    public Result deleteMyGood(@PathVariable int adviceid){
        return new Result(true,adviceService.removeById(adviceid));
    }
}
