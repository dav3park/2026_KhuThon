package com.heritage.auction.domain.proposal;

import com.heritage.auction.global.common.BaseTimeEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
public class Proposal extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long artisanId;

    @Column(nullable = false)
    private String creatorId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ProposalCategory category;

    @Column(length = 2000)
    private String concept;

    private Long expectedPrice;

    private String portfolioUrl;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ProposalStatus status;

    public void changeStatus(ProposalStatus status) {
        this.status = status;
    }
}