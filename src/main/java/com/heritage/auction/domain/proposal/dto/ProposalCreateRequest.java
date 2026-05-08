package com.heritage.auction.domain.proposal.dto;

import com.heritage.auction.domain.proposal.ProposalCategory;

public record ProposalCreateRequest(
        Long artisanId,
        ProposalCategory category,
        String concept,
        Long expectedPrice,
        String portfolioUrl
) {
}
