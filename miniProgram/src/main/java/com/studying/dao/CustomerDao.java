package com.studying.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.studying.dao.daomain.Customer;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface CustomerDao extends BaseMapper<Customer> {

    @Update("update customers set goldcoin=goldcoin+2 where openid=#{openid}")
    public Boolean updateByGoldcoinOpenid( String openid);  //用户打卡后更新金币数,每次加2

    @Select("select goldcoin from customers where openid = #{openid} ")
    public Integer getGoldcoinByOpenid(String openid);  //查询用户金币数

    @Update("update customers set nickname=#{nickname} where openid=#{openid}") //更新用户昵称
    public  Boolean updateNicknameByOpenid(String openid, String nickname);

    @Update("update customers set lastpunchdate=#{todaydate} where openid=#{openid}" )  //更新用户打卡时间
    public  Boolean updateLastPunchDateByOpenid(String openid, int todaydate);

    @Select("select * from customers where openid = #{openid} ")
    public Customer getAllByOpenid(String openid);  //openid = oQqOm5UyqmyryBqO50pVg3804tIc  //查询用户全部个人信息


    @Update("update customers set goldcoin=goldcoin-60,vip=1 where openid=#{openid}")
    public Boolean updateVipTrueByOpenid( String openid);  //用户充值会员，金币减去60

    @Update("update customers set vip=0 where openid=#{openid}")
    public Boolean updateVipFalseByOpenid( String openid);  //用户会员到期

    @Update("update customers set goldcoin=goldcoin-5 where openid=#{openid}")
    public Boolean updateGoldcoinDecreaseFiveByOpenid( String openid);  //非vip用户发布消息减去5金币

    @Update("update customers set goldcoin=goldcoin-3 where openid=#{openid}")
    public Boolean updateGoldcoinDecreaseThreeByOpenid( String openid);  //vip用户发布消息减去3金币
}
