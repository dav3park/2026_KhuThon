package com.heritage.auction.infra.seed;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import com.heritage.auction.domain.artisan.Artisan;
import com.heritage.auction.domain.artisan.ArtisanRepository;
import com.heritage.auction.domain.artisan.ArtisanStatus;

import lombok.RequiredArgsConstructor;

@Profile("dev")
@Component
@RequiredArgsConstructor
public class ArtisanDevSeeder implements CommandLineRunner {

    private final ArtisanRepository artisanRepository;

    @Override
    public void run(String... args) {
        if (artisanRepository.count() > 0) {
            return;
        }
        artisanRepository.saveAll(List.of(
                Artisan.builder()
                        .name("김명자")
                        .age(68)
                        .region("전라북도 전주시")
                        .skillName("한지장")
                        .career(42)
                        .skillTags(List.of("한지", "전통공예", "닥나무"))
                        .interviewQuote("한 장의 한지에 백 번의 손길이 들어갑니다.")
                        .collaborationFields(List.of("FASHION", "INTERIOR"))
                        .status(ArtisanStatus.OPEN)
                        .isNationalHeritage(true)
                        .build(),
                Artisan.builder()
                        .name("박정훈")
                        .age(55)
                        .region("경기도 이천시")
                        .skillName("도자장")
                        .career(30)
                        .skillTags(List.of("청자", "백자", "물레"))
                        .interviewQuote("흙은 거짓말을 하지 않습니다.")
                        .collaborationFields(List.of("LIFESTYLE", "ART"))
                        .status(ArtisanStatus.OPEN)
                        .isNationalHeritage(false)
                        .build(),
                Artisan.builder()
                        .name("이순영")
                        .age(72)
                        .region("서울특별시 종로구")
                        .skillName("자수장")
                        .career(50)
                        .skillTags(List.of("자수", "비단", "전통문양"))
                        .interviewQuote("바늘 끝에 마음을 담아야 무늬가 살아납니다.")
                        .collaborationFields(List.of("FASHION", "ART"))
                        .status(ArtisanStatus.OPEN)
                        .isNationalHeritage(true)
                        .build(),
                Artisan.builder()
                        .name("최우진")
                        .age(48)
                        .region("경상북도 안동시")
                        .skillName("목공예장")
                        .career(25)
                        .skillTags(List.of("소목", "옻칠", "짜맞춤"))
                        .interviewQuote("나무의 결을 따라가면 답이 보입니다.")
                        .collaborationFields(List.of("INTERIOR", "LIFESTYLE"))
                        .status(ArtisanStatus.OPEN)
                        .isNationalHeritage(false)
                        .build()
        ));
    }
}