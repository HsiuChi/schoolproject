package com.studying.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.studying.dao.daomain.Good;

import java.util.List;

public interface GoodService extends IService<Good> {
    IPage<Good> getGoodsortPage(int currentPage, int pageSize ,String goodsort);
    IPage<Good> getAllGoodPage(int currentPage, int pageSize);
    IPage<Good> getSearchGoodPage(int currentPage, int pageSize ,String goodname);
    IPage<Good> getMyGoodPage(int currentPage, int pageSize, String openid);
}
