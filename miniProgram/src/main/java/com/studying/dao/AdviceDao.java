package com.studying.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.studying.dao.daomain.Advice;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AdviceDao extends BaseMapper<Advice> {
}
