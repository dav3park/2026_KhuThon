package com.heritage.auction.domain.artisan.dto;

import java.util.List;

import com.heritage.auction.domain.artisan.Artisan;
import com.heritage.auction.domain.artisan.ArtisanStatus;

public record ArtisanSummaryDto(
        Long id,
        String name,
        Integer age,
        String skillName,
        String region,
        Integer career,
        boolean isNationalHeritage,
        ArtisanStatus status,
        List<String> tags
) {

    public static ArtisanSummaryDto from(Artisan artisan) {
        return new ArtisanSummaryDto(
                artisan.getId(),
                artisan.getName(),
                artisan.getAge(),
                artisan.getSkillName(),
                artisan.getRegion(),
                artisan.getCareer(),
                artisan.isNationalHeritage(),
                artisan.getStatus(),
                List.copyOf(artisan.getSkillTags())
        );
    }
}
