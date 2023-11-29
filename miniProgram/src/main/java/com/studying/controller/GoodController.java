package com.studying.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.studying.controller.utils.Result;
import com.studying.dao.daomain.Good;
import com.studying.service.GoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/goods")
public class GoodController {

    @Autowired
    private GoodService goodService;

    @GetMapping//查询全部闲置商品接口
    public Result getAll(){
        return new Result(true,goodService.list());
    }

    @PostMapping()//发布闲置商品接口
    public Result save(@RequestBody Good good){
        return new Result(goodService.save(good));
    }

    @GetMapping("{currentPage}/{pageSize}/{goodsort}")//根据商品类别进行分页查询闲置商品接口
    public Result getGoodsortPage(@PathVariable int currentPage, @PathVariable int pageSize, @PathVariable String goodsort){
        return new Result(true,goodService.getGoodsortPage(currentPage,pageSize,goodsort));
    }

    @GetMapping("{currentPage}/{pageSize}")// 分页查询全部闲置商品接口
    public Result getAllGoodPage(@PathVariable int currentPage, @PathVariable int pageSize){
        return new Result(true,goodService.getAllGoodPage(currentPage,pageSize));
    }

    @GetMapping("/searchgood/{currentPage}/{pageSize}/{searchgoodname}")//搜索闲置商品接口
    public Result getSearchGood(@PathVariable int currentPage,@PathVariable int pageSize,@PathVariable String searchgoodname){
        return new Result(true,goodService.getSearchGoodPage(currentPage,pageSize,searchgoodname));
    }

    @GetMapping("/mygood/{currentPage}/{pageSize}/{openid}")//获取我的闲置商品接口
    public Result getMyGood(@PathVariable int currentPage,@PathVariable int pageSize,@PathVariable String openid){
        return new Result(true,goodService.getMyGoodPage(currentPage,pageSize,openid));
    }

    @DeleteMapping("/mygooddelete/{goodid}")//撤销单个闲置商品接口
    public Result deleteMyGood(@PathVariable int goodid){
        return new Result(true,goodService.removeById(goodid));
    }
}

