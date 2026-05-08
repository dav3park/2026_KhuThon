package com.heritage.auction.domain.product;

public class ProductNotOnSaleException extends RuntimeException {

    public ProductNotOnSaleException(Long productId, SaleStatus currentStatus) {
        super("Product is not on sale: id=" + productId + ", saleStatus=" + currentStatus);
    }
}
