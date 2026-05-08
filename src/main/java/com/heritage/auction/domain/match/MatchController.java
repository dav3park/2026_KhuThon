package com.heritage.auction.domain.match;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.heritage.auction.domain.match.dto.MatchDto;
import com.heritage.auction.domain.proposal.dto.ProposalDto;
import com.heritage.auction.global.response.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MatchController {

    private final MatchService matchService;

    @PostMapping("/api/admin/proposals/{proposalId}/accept")
    public ResponseEntity<ApiResponse<MatchDto>> accept(@PathVariable Long proposalId) {
        return ResponseEntity.ok(ApiResponse.success(matchService.accept(proposalId)));
    }

    @PostMapping("/api/admin/proposals/{proposalId}/reject")
    public ResponseEntity<ApiResponse<ProposalDto>> reject(@PathVariable Long proposalId) {
        return ResponseEntity.ok(ApiResponse.success(matchService.reject(proposalId)));
    }
}
