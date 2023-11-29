package com.studying.dataSource;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Data
@Component
@ConfigurationProperties("miniprogram")
public class MiniProgramData {
    private String appid;
    private String secret;
}
