package com.heritage.auction.domain.product;

import java.time.LocalDateTime;

import com.heritage.auction.global.common.BaseTimeEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Product extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long matchId;

    @Column(nullable = false)
    private String title;

    @Column(length = 4000)
    private String description;

    @Column(nullable = false)
    private Long price;

    @Column(nullable = false)
    private Integer totalStock;

    @Column(nullable = false)
    private Integer remainStock;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SaleStatus saleStatus;

    private LocalDateTime saleOpenAt;

    public void decreaseStock() {
        if (this.remainStock == null || this.remainStock <= 0) {
            throw new OutOfStockException(this.id);
        }
        this.remainStock -= 1;
        if (this.remainStock == 0) {
            this.saleStatus = SaleStatus.SOLD_OUT;
        }
    }
}