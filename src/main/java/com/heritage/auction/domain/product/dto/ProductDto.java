package com.heritage.auction.domain.product.dto;

import java.time.LocalDateTime;

import com.heritage.auction.domain.product.Product;
import com.heritage.auction.domain.product.SaleStatus;

public record ProductDto(
        Long id,
        Long matchId,
        String title,
        String description,
        Long price,
        Integer totalStock,
        Integer remainStock,
        SaleStatus saleStatus,
        LocalDateTime saleOpenAt,
        LocalDateTime createdAt
) {

    public static ProductDto from(Product product) {
        return new ProductDto(
                product.getId(),
                product.getMatchId(),
                product.getTitle(),
                product.getDescription(),
                product.getPrice(),
                product.getTotalStock(),
                product.getRemainStock(),
                product.getSaleStatus(),
                product.getSaleOpenAt(),
                product.getCreatedAt()
        );
    }
}
