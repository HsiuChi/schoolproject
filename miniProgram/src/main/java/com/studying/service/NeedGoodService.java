package com.studying.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.studying.dao.daomain.Good;
import com.studying.dao.daomain.NeedGood;

public interface NeedGoodService extends IService<NeedGood> {
    IPage<NeedGood> getNeedGoodsortPage(int currentPage, int pageSize , String needgoodsort);
    IPage<NeedGood> getAllNeedGoodPage(int currentPage, int pageSize);
    IPage<NeedGood> getSearchNeedGoodPage(int currentPage, int pageSize ,String needgoodname);
    IPage<NeedGood> getMyNeedGoodPage(int currentPage, int pageSize ,String openid);
}
