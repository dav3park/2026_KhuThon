package com.heritage.auction.domain.product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.heritage.auction.domain.product.dto.ProductCreateRequest;
import com.heritage.auction.domain.product.dto.ProductDetailDto;
import com.heritage.auction.domain.product.dto.ProductDto;
import com.heritage.auction.domain.product.dto.ProductSummaryDto;
import com.heritage.auction.global.response.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @PostMapping("/api/admin/products")
    public ResponseEntity<ApiResponse<ProductDto>> create(@RequestBody ProductCreateRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.success(productService.create(request)));
    }

    @GetMapping("/api/products")
    public ResponseEntity<ApiResponse<Page<ProductSummaryDto>>> list(
            @RequestParam(required = false) SaleStatus saleStatus,
            @PageableDefault(size = 20) Pageable pageable) {
        return ResponseEntity.ok(ApiResponse.success(productService.findAll(saleStatus, pageable)));
    }

    @GetMapping("/api/products/{id}")
    public ResponseEntity<ApiResponse<ProductDetailDto>> detail(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.success(productService.findById(id)));
    }
}
