package com.heritage.auction.domain.match;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.heritage.auction.domain.match.dto.MatchDto;
import com.heritage.auction.domain.proposal.dto.ProposalDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MatchController {

    private final MatchService matchService;

    @PostMapping("/api/admin/proposals/{proposalId}/accept")
    public MatchDto accept(@PathVariable Long proposalId) {
        return matchService.accept(proposalId);
    }

    @PostMapping("/api/admin/proposals/{proposalId}/reject")
    public ProposalDto reject(@PathVariable Long proposalId) {
        return matchService.reject(proposalId);
    }
}
