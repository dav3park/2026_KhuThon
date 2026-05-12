package com.heritage.auction.domain.order;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.heritage.auction.domain.order.dto.OrderDto;
import com.heritage.auction.domain.product.Product;
import com.heritage.auction.domain.product.ProductNotFoundException;
import com.heritage.auction.domain.product.ProductNotOnSaleException;
import com.heritage.auction.domain.product.ProductRepository;
import com.heritage.auction.domain.product.SaleStatus;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class OrderService {

    private static final long ARTISAN_REVENUE_NUMERATOR = 4;
    private static final long CREATOR_REVENUE_NUMERATOR = 4;
    private static final long REVENUE_DENOMINATOR = 10;

    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;

    @Transactional
    public OrderDto purchase(Long productId, String buyerId) {
        Product product = productRepository.findByIdForUpdate(productId)
                .orElseThrow(() -> new ProductNotFoundException(productId));

        if (product.getSaleStatus() != SaleStatus.ON_SALE) {
            throw new ProductNotOnSaleException(productId, product.getSaleStatus());
        }

        product.decreaseStock();

        long price = product.getPrice();
        long artisanRevenue = price * ARTISAN_REVENUE_NUMERATOR / REVENUE_DENOMINATOR;
        long creatorRevenue = price * CREATOR_REVENUE_NUMERATOR / REVENUE_DENOMINATOR;
        long platformRevenue = price - artisanRevenue - creatorRevenue;

        Order order = Order.builder()
                .productId(productId)
                .buyerId(buyerId)
                .price(price)
                .status(OrderStatus.SUCCESS)
                .artisanRevenue(artisanRevenue)
                .creatorRevenue(creatorRevenue)
                .platformRevenue(platformRevenue)
                .build();

        return OrderDto.from(orderRepository.save(order));
    }
}
