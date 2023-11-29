package com.studying.dao.daomain;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.math.BigInteger;

@TableName("needgoods")
@Data
public class NeedGood {
    private BigInteger id;
    private String needgoodname;
    private String needgoodsort;
    private BigInteger needgoodphone;
    private String needgoodwechat;
    private String needgoodaddress;
    private String needgoodimage;
    private String openid;  //用户唯一标识
}
