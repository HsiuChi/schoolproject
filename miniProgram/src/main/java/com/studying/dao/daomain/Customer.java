package com.studying.dao.daomain;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;
import org.joda.time.DateTime;

import java.math.BigInteger;

@TableName("customers")
@Data
public class Customer {
    private String openid;  //用户唯一标识
    private String nickname;  //用户昵称
    private String avatarurl;  //用户头像路径
    private String registerdate;  //用户注册时间
    private Integer goldcoin;  //用户金币个数
    private Integer lastpunchdate;  //用户上次打卡时间
    private Integer vip; //1为会员，0不是会员
    private Integer administrator; //1为管理员，0为普通用户

    @TableField(select = false, exist = false)
    private String code;  //用户code，不用于插入数据库
}
