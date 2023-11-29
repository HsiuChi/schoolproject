package com.studying.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.studying.dao.GoodDao;
import com.studying.dao.daomain.Good;
import com.studying.service.GoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoodServiceImpl extends ServiceImpl<GoodDao, Good> implements GoodService {
    @Autowired
    private GoodDao goodDao;

//    分页查询
    @Override
    public IPage<Good> getGoodsortPage(int currentPage, int pageSize, String goodsort) {
        IPage page=new Page(currentPage,pageSize);
        QueryWrapper qw= new QueryWrapper();
        qw.eq("goodsort",goodsort);
        goodDao.selectPage(page,qw);
        return page;
    }

    @Override
    public IPage<Good> getAllGoodPage(int currentPage, int pageSize) {
        IPage page=new Page(currentPage,pageSize);
        goodDao.selectPage(page,null);
        return page;
    }

    @Override
    public IPage<Good> getSearchGoodPage(int currentPage, int pageSize, String goodname) {
        IPage page=new Page(currentPage,pageSize);
        QueryWrapper qw= new QueryWrapper();
        qw.like("goodname",goodname);
        goodDao.selectPage(page,qw);
        return page;
    }

    @Override
    public IPage<Good> getMyGoodPage(int currentPage, int pageSize, String openid) {
        IPage page=new Page(currentPage,pageSize);
        QueryWrapper qw= new QueryWrapper();
        qw.eq("openid",openid);
        goodDao.selectPage(page,qw);
        return page;
    }
}
