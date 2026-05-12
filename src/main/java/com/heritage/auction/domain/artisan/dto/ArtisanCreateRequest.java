package com.heritage.auction.domain.artisan.dto;

import java.util.ArrayList;
import java.util.List;

import com.heritage.auction.domain.artisan.Artisan;
import com.heritage.auction.domain.artisan.ArtisanStatus;

public record ArtisanCreateRequest(
        String name,
        Integer age,
        String region,
        String skillName,
        Integer career,
        List<String> skillTags,
        String interviewQuote,
        List<String> collaborationFields,
        ArtisanStatus status,
        Boolean isNationalHeritage
) {

    public Artisan toEntity() {
        return Artisan.builder()
                .name(name)
                .age(age)
                .region(region)
                .skillName(skillName)
                .career(career)
                .skillTags(skillTags != null ? new ArrayList<>(skillTags) : new ArrayList<>())
                .interviewQuote(interviewQuote)
                .collaborationFields(collaborationFields != null ? new ArrayList<>(collaborationFields) : new ArrayList<>())
                .status(status != null ? status : ArtisanStatus.OPEN)
                .isNationalHeritage(Boolean.TRUE.equals(isNationalHeritage))
                .build();
    }
}
