package com.studying.controller;

import com.studying.controller.utils.Result;
import com.studying.dao.daomain.Swiper;
import com.studying.service.SwiperService;
import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("swipers")
public class SwiperController {
    @Autowired
    private SwiperService swiperService;

    @GetMapping   //查询所有轮播图情况
    public Result getAll(){
        return new Result(true,swiperService.list());
    }

    @DeleteMapping("/deleteSwiper/{swiperId}")  //根据id删除轮播图数据
    public Result deleteBySwiperId(@PathVariable int swiperId){
        return new Result(true,swiperService.removeById(swiperId));
    }

    @PostMapping
    public Result saveSwiper(@RequestBody Swiper swiper){
        return new Result(true,swiperService.save(swiper));
    }
}
