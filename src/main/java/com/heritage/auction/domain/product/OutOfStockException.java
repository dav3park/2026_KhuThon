package com.heritage.auction.domain.product;

public class OutOfStockException extends RuntimeException {

    public OutOfStockException(Long productId) {
        super("Product is out of stock: id=" + productId);
    }
}
