package com.heritage.auction.domain.product.dto;

import java.time.LocalDateTime;

import com.heritage.auction.domain.product.Product;
import com.heritage.auction.domain.product.SaleStatus;

public record ProductSummaryDto(
        Long id,
        String title,
        Long price,
        Integer totalStock,
        Integer remainStock,
        SaleStatus saleStatus,
        LocalDateTime saleOpenAt
) {

    public static ProductSummaryDto from(Product product) {
        return new ProductSummaryDto(
                product.getId(),
                product.getTitle(),
                product.getPrice(),
                product.getTotalStock(),
                product.getRemainStock(),
                product.getSaleStatus(),
                product.getSaleOpenAt()
        );
    }
}
