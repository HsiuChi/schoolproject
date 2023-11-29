package com.studying.dao.daomain;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("advices")
@Data
public class Advice {
    private Integer id;
    private String openid;
    private String advicetext;
    private String adviceimg;
}
