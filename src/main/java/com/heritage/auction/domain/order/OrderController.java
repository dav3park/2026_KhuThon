package com.heritage.auction.domain.order;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.heritage.auction.domain.order.dto.OrderDto;
import com.heritage.auction.global.security.AuthenticatedUser;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/api/products/{id}/purchase")
    @ResponseStatus(HttpStatus.CREATED)
    public OrderDto purchase(@PathVariable Long id,
                             @AuthenticationPrincipal AuthenticatedUser user) {
        return orderService.purchase(id, user.uid());
    }
}
