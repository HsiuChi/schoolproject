package com.studying.dao.daomain;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("swipers")
@Data
public class Swiper {
    private Integer id;
    private String image;
    private String name;
}
