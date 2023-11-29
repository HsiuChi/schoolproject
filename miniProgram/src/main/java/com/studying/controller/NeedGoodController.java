package com.studying.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.studying.controller.utils.Result;
import com.studying.dao.daomain.Good;
import com.studying.dao.daomain.NeedGood;
import com.studying.service.GoodService;
import com.studying.service.NeedGoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/needgoods")
public class NeedGoodController {

    @Autowired
    private NeedGoodService needGoodService;

    @GetMapping//查询全部求购商品接口
    public Result getAll(){
        return new Result(true,needGoodService.list());
    }

    @PostMapping()//发布求购商品接口
    public Result save(@RequestBody NeedGood needGood){
        return new Result(needGoodService.save(needGood));
    }

    @GetMapping("{currentPage}/{pageSize}/{needgoodsort}")//根据商品类别进行分页查询求购商品接口
    public Result getGoodsortPage(@PathVariable int currentPage, @PathVariable int pageSize, @PathVariable String needgoodsort){
        return new Result(true,needGoodService.getNeedGoodsortPage(currentPage,pageSize,needgoodsort));
    }

    @GetMapping("{currentPage}/{pageSize}")// 分页查询全部求购商品接口
    public Result getAllGoodPage(@PathVariable int currentPage, @PathVariable int pageSize){
        return new Result(true,needGoodService.getAllNeedGoodPage(currentPage,pageSize));
    }

    @GetMapping("/searchneedgood/{currentPage}/{pageSize}/{searchneedgoodname}")//搜索求购商品接口
    public Result getSearchNeedGood(@PathVariable int currentPage,@PathVariable int pageSize,@PathVariable String searchneedgoodname){
        return new Result(true,needGoodService.getSearchNeedGoodPage(currentPage,pageSize,searchneedgoodname));
    }

    @GetMapping("/myneedgood/{currentPage}/{pageSize}/{openid}")//获取我的闲置商品接口
    public Result getMyNeedGood(@PathVariable int currentPage,@PathVariable int pageSize,@PathVariable String openid){
        return new Result(true,needGoodService.getMyNeedGoodPage(currentPage,pageSize,openid));
    }

    @DeleteMapping("/myneedgooddelete/{needgoodid}")//撤销单个求购商品接口
    public Result deleteMyNeedGood(@PathVariable int needgoodid){
        return new Result(true,needGoodService.removeById(needgoodid));
    }
}
