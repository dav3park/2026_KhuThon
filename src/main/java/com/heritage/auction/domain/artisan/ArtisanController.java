package com.heritage.auction.domain.artisan;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.heritage.auction.domain.artisan.dto.ArtisanCreateRequest;
import com.heritage.auction.domain.artisan.dto.ArtisanDetailDto;
import com.heritage.auction.domain.artisan.dto.ArtisanStatusUpdateRequest;
import com.heritage.auction.domain.artisan.dto.ArtisanSummaryDto;
import com.heritage.auction.global.response.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ArtisanController {

    private final ArtisanService artisanService;

    @GetMapping("/api/artisans")
    public ResponseEntity<ApiResponse<Page<ArtisanSummaryDto>>> list(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) ArtisanStatus status,
            @PageableDefault(size = 20) Pageable pageable) {
        return ResponseEntity.ok(ApiResponse.success(artisanService.findAll(category, status, pageable)));
    }

    @GetMapping("/api/artisans/{id}")
    public ResponseEntity<ApiResponse<ArtisanDetailDto>> detail(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.success(artisanService.findById(id)));
    }

    @PostMapping("/api/admin/artisans")
    public ResponseEntity<ApiResponse<ArtisanDetailDto>> create(@RequestBody ArtisanCreateRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.success(artisanService.create(request)));
    }

    @PatchMapping("/api/admin/artisans/{id}/status")
    public ResponseEntity<ApiResponse<ArtisanDetailDto>> updateStatus(@PathVariable Long id,
                                                                       @RequestBody ArtisanStatusUpdateRequest request) {
        return ResponseEntity.ok(ApiResponse.success(artisanService.updateStatus(id, request.status())));
    }
}
