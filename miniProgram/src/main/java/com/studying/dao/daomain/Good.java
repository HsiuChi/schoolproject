package com.studying.dao.daomain;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.math.BigInteger;

@TableName("goods")
@Data
public class Good {
    private BigInteger id;
    private String goodname;
    private String goodsort;
    private Integer goodnew;
    private BigInteger goodprice;
    private BigInteger goodphone;
    private String goodwechat;
    private String goodaddress;
    private String goodimage;
    private String openid;  //用户唯一标识

}
