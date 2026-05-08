package com.heritage.auction.global.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.heritage.auction.domain.artisan.ArtisanNotFoundException;
import com.heritage.auction.domain.artisan.ArtisanNotOpenException;
import com.heritage.auction.domain.match.MatchNotActiveException;
import com.heritage.auction.domain.match.MatchNotFoundException;
import com.heritage.auction.domain.product.OutOfStockException;
import com.heritage.auction.domain.product.ProductNotFoundException;
import com.heritage.auction.domain.product.ProductNotOnSaleException;
import com.heritage.auction.domain.proposal.ProposalNotFoundException;
import com.heritage.auction.global.response.ApiResponse;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({
            ArtisanNotFoundException.class,
            ProposalNotFoundException.class,
            ProductNotFoundException.class,
            MatchNotFoundException.class
    })
    public ResponseEntity<ApiResponse<Void>> handleNotFound(RuntimeException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ApiResponse.error(e.getMessage()));
    }

    @ExceptionHandler({
            ArtisanNotOpenException.class,
            MatchNotActiveException.class,
            ProductNotOnSaleException.class
    })
    public ResponseEntity<ApiResponse<Void>> handleBadRequest(RuntimeException e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ApiResponse.error(e.getMessage()));
    }

    @ExceptionHandler(OutOfStockException.class)
    public ResponseEntity<ApiResponse<Void>> handleOutOfStock(OutOfStockException e) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(ApiResponse.error(e.getMessage()));
    }
}
