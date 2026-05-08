package com.heritage.auction.domain.match.dto;

import java.time.LocalDateTime;

import com.heritage.auction.domain.match.Match;
import com.heritage.auction.domain.match.MatchStatus;

public record MatchDto(
        Long id,
        Long artisanId,
        Long proposalId,
        String creatorId,
        MatchStatus status,
        LocalDateTime createdAt
) {

    public static MatchDto from(Match match) {
        return new MatchDto(
                match.getId(),
                match.getArtisanId(),
                match.getProposalId(),
                match.getCreatorId(),
                match.getStatus(),
                match.getCreatedAt()
        );
    }
}
