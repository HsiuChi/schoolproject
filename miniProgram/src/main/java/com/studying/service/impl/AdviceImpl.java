package com.studying.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.studying.dao.AdviceDao;
import com.studying.dao.daomain.Advice;
import com.studying.service.AdviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdviceImpl extends ServiceImpl<AdviceDao, Advice> implements AdviceService {
    @Autowired
    private AdviceDao adviceDao;

    @Override
    public IPage<Advice> getMyAdvicePage(int currentPage, int pageSize, String openid) {
        IPage page=new Page(currentPage,pageSize);
        QueryWrapper qw= new QueryWrapper();
        qw.eq("openid",openid);
        adviceDao.selectPage(page,qw);
        return page;
    }
}
