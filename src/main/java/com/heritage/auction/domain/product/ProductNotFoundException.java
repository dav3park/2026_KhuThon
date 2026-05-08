package com.heritage.auction.domain.product;

public class ProductNotFoundException extends RuntimeException {

    public ProductNotFoundException(Long productId) {
        super("Product not found: id=" + productId);
    }
}
