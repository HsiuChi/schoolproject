package com.studying.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.studying.dao.daomain.Good;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface GoodDao extends BaseMapper<Good> {


}
