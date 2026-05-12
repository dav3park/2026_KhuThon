package com.heritage.auction.domain.proposal;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.heritage.auction.domain.artisan.Artisan;
import com.heritage.auction.domain.artisan.ArtisanNotFoundException;
import com.heritage.auction.domain.artisan.ArtisanNotOpenException;
import com.heritage.auction.domain.artisan.ArtisanRepository;
import com.heritage.auction.domain.artisan.ArtisanStatus;
import com.heritage.auction.domain.proposal.dto.ProposalCreateRequest;
import com.heritage.auction.domain.proposal.dto.ProposalDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProposalService {

    private final ProposalRepository proposalRepository;
    private final ArtisanRepository artisanRepository;

    @Transactional
    public ProposalDto create(String creatorId, ProposalCreateRequest request) {
        Artisan artisan = artisanRepository.findById(request.artisanId())
                .orElseThrow(() -> new ArtisanNotFoundException(request.artisanId()));
        if (artisan.getStatus() != ArtisanStatus.OPEN) {
            throw new ArtisanNotOpenException(artisan.getId(), artisan.getStatus());
        }
        Proposal proposal = Proposal.builder()
                .artisanId(artisan.getId())
                .creatorId(creatorId)
                .category(request.category())
                .concept(request.concept())
                .expectedPrice(request.expectedPrice())
                .portfolioUrl(request.portfolioUrl())
                .status(ProposalStatus.PENDING)
                .build();
        return ProposalDto.from(proposalRepository.save(proposal));
    }

    public List<ProposalDto> findAllByArtisanId(Long artisanId) {
        return proposalRepository.findAllByArtisanIdOrderByCreatedAtDesc(artisanId).stream()
                .map(ProposalDto::from)
                .toList();
    }
}
