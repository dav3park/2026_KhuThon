package com.heritage.auction.domain.artisan;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.heritage.auction.domain.artisan.dto.ArtisanCreateRequest;
import com.heritage.auction.domain.artisan.dto.ArtisanDetailDto;
import com.heritage.auction.domain.artisan.dto.ArtisanSummaryDto;
import com.heritage.auction.domain.proposal.ProposalRepository;
import com.heritage.auction.domain.proposal.ProposalStatus;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ArtisanService {

    private final ArtisanRepository artisanRepository;
    private final ProposalRepository proposalRepository;

    public Page<ArtisanSummaryDto> findAll(String category, ArtisanStatus status, Pageable pageable) {
        return artisanRepository.findByFilters(category, status, pageable)
                .map(ArtisanSummaryDto::from);
    }

    public ArtisanDetailDto findById(Long id) {
        Artisan artisan = artisanRepository.findById(id)
                .orElseThrow(() -> new ArtisanNotFoundException(id));
        return ArtisanDetailDto.from(artisan, countPendingProposals(artisan.getId()));
    }

    @Transactional
    public ArtisanDetailDto create(ArtisanCreateRequest request) {
        Artisan saved = artisanRepository.save(request.toEntity());
        return ArtisanDetailDto.from(saved, 0L);
    }

    @Transactional
    public ArtisanDetailDto updateStatus(Long id, ArtisanStatus status) {
        Artisan artisan = artisanRepository.findById(id)
                .orElseThrow(() -> new ArtisanNotFoundException(id));
        artisan.changeStatus(status);
        return ArtisanDetailDto.from(artisan, countPendingProposals(artisan.getId()));
    }

    private long countPendingProposals(Long artisanId) {
        return proposalRepository.countByArtisanIdAndStatus(artisanId, ProposalStatus.PENDING);
    }
}
