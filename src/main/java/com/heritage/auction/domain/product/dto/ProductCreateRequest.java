package com.heritage.auction.domain.product.dto;

import java.time.LocalDateTime;

public record ProductCreateRequest(
        Long matchId,
        String title,
        String description,
        Long price,
        Integer totalStock,
        LocalDateTime saleOpenAt
) {
}
