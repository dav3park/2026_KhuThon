package com.heritage.auction;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class HeritageAuctionApplication {

    public static void main(String[] args) {
        SpringApplication.run(HeritageAuctionApplication.class, args);
    }
}