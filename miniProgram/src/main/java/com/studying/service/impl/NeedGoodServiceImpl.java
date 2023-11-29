package com.studying.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.studying.dao.NeedGoodDao;
import com.studying.dao.daomain.NeedGood;
import com.studying.service.NeedGoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NeedGoodServiceImpl extends ServiceImpl<NeedGoodDao, NeedGood> implements NeedGoodService {

    @Autowired
    private NeedGoodDao needGoodDao;

    @Override
    public IPage<NeedGood> getNeedGoodsortPage(int currentPage, int pageSize, String needgoodsort) {
        IPage page=new Page(currentPage,pageSize);
        QueryWrapper qw= new QueryWrapper();
        qw.eq("needgoodsort",needgoodsort);
        needGoodDao.selectPage(page,qw);
        return page;
    }

    @Override
    public IPage<NeedGood> getAllNeedGoodPage(int currentPage, int pageSize) {
        IPage page=new Page(currentPage,pageSize);
        needGoodDao.selectPage(page,null);
        return page;
    }

    @Override
    public IPage<NeedGood> getSearchNeedGoodPage(int currentPage, int pageSize, String needgoodname) {
        IPage page=new Page(currentPage,pageSize);
        QueryWrapper qw= new QueryWrapper();
        qw.like("needgoodname",needgoodname);
        needGoodDao.selectPage(page,qw);
        return page;
    }

    @Override
    public IPage<NeedGood> getMyNeedGoodPage(int currentPage, int pageSize, String openid) {
        IPage page=new Page(currentPage,pageSize);
        QueryWrapper qw= new QueryWrapper();
        qw.eq("openid",openid);
        needGoodDao.selectPage(page,qw);
        return page;
    }
}
