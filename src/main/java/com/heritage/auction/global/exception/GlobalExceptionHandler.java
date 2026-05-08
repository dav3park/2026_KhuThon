package com.heritage.auction.global.exception;

import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
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

    @ExceptionHandler(ArtisanNotFoundException.class)
    public ResponseEntity<ApiResponse<Void>> handleArtisanNotFound(ArtisanNotFoundException e) {
        log.debug("Artisan not found: {}", e.getMessage());
        return error(HttpStatus.NOT_FOUND, "장인을 찾을 수 없습니다");
    }

    @ExceptionHandler(ArtisanNotOpenException.class)
    public ResponseEntity<ApiResponse<Void>> handleArtisanNotOpen(ArtisanNotOpenException e) {
        log.debug("Artisan not open: {}", e.getMessage());
        return error(HttpStatus.BAD_REQUEST, "협업 모집 중인 장인이 아닙니다");
    }

    @ExceptionHandler(ProposalNotFoundException.class)
    public ResponseEntity<ApiResponse<Void>> handleProposalNotFound(ProposalNotFoundException e) {
        log.debug("Proposal not found: {}", e.getMessage());
        return error(HttpStatus.NOT_FOUND, "제안을 찾을 수 없습니다");
    }

    @ExceptionHandler(MatchNotFoundException.class)
    public ResponseEntity<ApiResponse<Void>> handleMatchNotFound(MatchNotFoundException e) {
        log.debug("Match not found: {}", e.getMessage());
        return error(HttpStatus.NOT_FOUND, "매칭을 찾을 수 없습니다");
    }

    @ExceptionHandler(MatchNotActiveException.class)
    public ResponseEntity<ApiResponse<Void>> handleMatchNotActive(MatchNotActiveException e) {
        log.debug("Match not active: {}", e.getMessage());
        return error(HttpStatus.BAD_REQUEST, "활성 상태의 매칭이 아닙니다");
    }

    @ExceptionHandler(ProductNotFoundException.class)
    public ResponseEntity<ApiResponse<Void>> handleProductNotFound(ProductNotFoundException e) {
        log.debug("Product not found: {}", e.getMessage());
        return error(HttpStatus.NOT_FOUND, "작품을 찾을 수 없습니다");
    }

    @ExceptionHandler(ProductNotOnSaleException.class)
    public ResponseEntity<ApiResponse<Void>> handleProductNotOnSale(ProductNotOnSaleException e) {
        log.debug("Product not on sale: {}", e.getMessage());
        return error(HttpStatus.BAD_REQUEST, "판매 중인 작품이 아닙니다");
    }

    @ExceptionHandler(OutOfStockException.class)
    public ResponseEntity<ApiResponse<Void>> handleOutOfStock(OutOfStockException e) {
        log.debug("Out of stock: {}", e.getMessage());
        return error(HttpStatus.CONFLICT, "재고가 소진되었습니다");
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ApiResponse<Void>> handleAccessDenied(AccessDeniedException e) {
        log.debug("Access denied: {}", e.getMessage());
        return error(HttpStatus.FORBIDDEN, "접근 권한이 없습니다");
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<Void>> handleValidation(MethodArgumentNotValidException e) {
        String message = e.getBindingResult().getFieldErrors().stream()
                .map(err -> err.getField() + ": " + err.getDefaultMessage())
                .collect(Collectors.joining(", "));
        return error(HttpStatus.BAD_REQUEST, message.isEmpty() ? "잘못된 요청입니다" : message);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse<Void>> handleUnexpected(Exception e) {
        log.error("Unhandled exception", e);
        return error(HttpStatus.INTERNAL_SERVER_ERROR, "서버 오류가 발생했습니다");
    }

    private static ResponseEntity<ApiResponse<Void>> error(HttpStatus status, String message) {
        return ResponseEntity.status(status).body(ApiResponse.error(message));
    }
}
