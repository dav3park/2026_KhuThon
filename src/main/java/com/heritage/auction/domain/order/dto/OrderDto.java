package com.heritage.auction.domain.order.dto;

import java.time.LocalDateTime;

import com.heritage.auction.domain.order.Order;
import com.heritage.auction.domain.order.OrderStatus;

public record OrderDto(
        Long id,
        Long productId,
        String buyerId,
        Long price,
        OrderStatus status,
        Long artisanRevenue,
        Long creatorRevenue,
        Long platformRevenue,
        LocalDateTime createdAt
) {

    public static OrderDto from(Order order) {
        return new OrderDto(
                order.getId(),
                order.getProductId(),
                order.getBuyerId(),
                order.getPrice(),
                order.getStatus(),
                order.getArtisanRevenue(),
                order.getCreatorRevenue(),
                order.getPlatformRevenue(),
                order.getCreatedAt()
        );
    }
}
