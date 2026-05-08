package com.heritage.auction.domain.artisan.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.heritage.auction.domain.artisan.Artisan;
import com.heritage.auction.domain.artisan.ArtisanStatus;

public record ArtisanDetailDto(
        Long id,
        String name,
        Integer age,
        String region,
        String skillName,
        Integer career,
        List<String> skillTags,
        String interviewQuote,
        List<String> collaborationFields,
        ArtisanStatus status,
        boolean isNationalHeritage,
        long pendingProposalCount,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {

    public static ArtisanDetailDto from(Artisan artisan, long pendingProposalCount) {
        return new ArtisanDetailDto(
                artisan.getId(),
                artisan.getName(),
                artisan.getAge(),
                artisan.getRegion(),
                artisan.getSkillName(),
                artisan.getCareer(),
                List.copyOf(artisan.getSkillTags()),
                artisan.getInterviewQuote(),
                List.copyOf(artisan.getCollaborationFields()),
                artisan.getStatus(),
                artisan.isNationalHeritage(),
                pendingProposalCount,
                artisan.getCreatedAt(),
                artisan.getUpdatedAt()
        );
    }
}
