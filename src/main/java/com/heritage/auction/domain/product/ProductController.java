package com.heritage.auction.domain.product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.heritage.auction.domain.product.dto.ProductCreateRequest;
import com.heritage.auction.domain.product.dto.ProductDetailDto;
import com.heritage.auction.domain.product.dto.ProductDto;
import com.heritage.auction.domain.product.dto.ProductSummaryDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @PostMapping("/api/admin/products")
    @ResponseStatus(HttpStatus.CREATED)
    public ProductDto create(@RequestBody ProductCreateRequest request) {
        return productService.create(request);
    }

    @GetMapping("/api/products")
    public Page<ProductSummaryDto> list(
            @RequestParam(required = false) SaleStatus saleStatus,
            @PageableDefault(size = 20) Pageable pageable) {
        return productService.findAll(saleStatus, pageable);
    }

    @GetMapping("/api/products/{id}")
    public ProductDetailDto detail(@PathVariable Long id) {
        return productService.findById(id);
    }
}
