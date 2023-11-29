package com.studying.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.studying.dao.daomain.Advice;
import com.studying.dao.daomain.Good;

public interface AdviceService extends IService<Advice> {
    IPage<Advice> getMyAdvicePage(int currentPage, int pageSize, String openid);
}
