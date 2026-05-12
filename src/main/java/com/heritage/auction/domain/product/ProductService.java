package com.heritage.auction.domain.product;

import java.time.LocalDateTime;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.heritage.auction.domain.match.Match;
import com.heritage.auction.domain.match.MatchNotActiveException;
import com.heritage.auction.domain.match.MatchNotFoundException;
import com.heritage.auction.domain.match.MatchRepository;
import com.heritage.auction.domain.match.MatchStatus;
import com.heritage.auction.domain.product.dto.ProductCreateRequest;
import com.heritage.auction.domain.product.dto.ProductDetailDto;
import com.heritage.auction.domain.product.dto.ProductDto;
import com.heritage.auction.domain.product.dto.ProductSummaryDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProductService {

    private final ProductRepository productRepository;
    private final MatchRepository matchRepository;

    @Transactional
    public ProductDto create(ProductCreateRequest request) {
        Match match = matchRepository.findById(request.matchId())
                .orElseThrow(() -> new MatchNotFoundException(request.matchId()));
        if (match.getStatus() != MatchStatus.ACTIVE) {
            throw new MatchNotActiveException(match.getId(), match.getStatus());
        }
        Product product = Product.builder()
                .matchId(request.matchId())
                .title(request.title())
                .description(request.description())
                .price(request.price())
                .totalStock(request.totalStock())
                .remainStock(request.totalStock())
                .saleStatus(initialSaleStatus(request.saleOpenAt()))
                .saleOpenAt(request.saleOpenAt())
                .build();
        return ProductDto.from(productRepository.save(product));
    }

    public Page<ProductSummaryDto> findAll(SaleStatus saleStatus, Pageable pageable) {
        return productRepository.findByFilter(saleStatus, pageable)
                .map(ProductSummaryDto::from);
    }

    public ProductDetailDto findById(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
        return ProductDetailDto.from(product);
    }

    private SaleStatus initialSaleStatus(LocalDateTime saleOpenAt) {
        if (saleOpenAt == null || !saleOpenAt.isAfter(LocalDateTime.now())) {
            return SaleStatus.ON_SALE;
        }
        return SaleStatus.PREPARING;
    }
}
