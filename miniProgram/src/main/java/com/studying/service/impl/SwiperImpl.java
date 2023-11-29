package com.studying.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.studying.dao.SwiperDao;
import com.studying.dao.daomain.Swiper;
import com.studying.service.SwiperService;
import org.springframework.stereotype.Service;

@Service
public class SwiperImpl extends ServiceImpl<SwiperDao, Swiper> implements SwiperService {
}
