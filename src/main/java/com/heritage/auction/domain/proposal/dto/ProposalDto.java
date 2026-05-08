package com.heritage.auction.domain.proposal.dto;

import java.time.LocalDateTime;

import com.heritage.auction.domain.proposal.Proposal;
import com.heritage.auction.domain.proposal.ProposalCategory;
import com.heritage.auction.domain.proposal.ProposalStatus;

public record ProposalDto(
        Long id,
        Long artisanId,
        String creatorId,
        ProposalCategory category,
        String concept,
        Long expectedPrice,
        String portfolioUrl,
        ProposalStatus status,
        LocalDateTime createdAt
) {

    public static ProposalDto from(Proposal proposal) {
        return new ProposalDto(
                proposal.getId(),
                proposal.getArtisanId(),
                proposal.getCreatorId(),
                proposal.getCategory(),
                proposal.getConcept(),
                proposal.getExpectedPrice(),
                proposal.getPortfolioUrl(),
                proposal.getStatus(),
                proposal.getCreatedAt()
        );
    }
}
