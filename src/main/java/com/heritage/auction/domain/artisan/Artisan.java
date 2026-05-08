package com.heritage.auction.domain.artisan;

import java.util.ArrayList;
import java.util.List;

import com.heritage.auction.global.common.BaseTimeEntity;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Artisan extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private Integer age;

    private String region;

    private String skillName;

    private Integer career;

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "artisan_skill_tags", joinColumns = @JoinColumn(name = "artisan_id"))
    @Column(name = "skill_tag")
    @Builder.Default
    private List<String> skillTags = new ArrayList<>();

    @Column(length = 1000)
    private String interviewQuote;

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "artisan_collaboration_fields", joinColumns = @JoinColumn(name = "artisan_id"))
    @Column(name = "collaboration_field")
    @Builder.Default
    private List<String> collaborationFields = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ArtisanStatus status;

    @Column(nullable = false)
    private boolean isNationalHeritage;
}