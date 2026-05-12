package com.heritage.auction.domain.match;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.heritage.auction.domain.artisan.Artisan;
import com.heritage.auction.domain.artisan.ArtisanNotFoundException;
import com.heritage.auction.domain.artisan.ArtisanRepository;
import com.heritage.auction.domain.artisan.ArtisanStatus;
import com.heritage.auction.domain.match.dto.MatchDto;
import com.heritage.auction.domain.proposal.Proposal;
import com.heritage.auction.domain.proposal.ProposalNotFoundException;
import com.heritage.auction.domain.proposal.ProposalRepository;
import com.heritage.auction.domain.proposal.ProposalStatus;
import com.heritage.auction.domain.proposal.dto.ProposalDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MatchService {

    private final ProposalRepository proposalRepository;
    private final ArtisanRepository artisanRepository;
    private final MatchRepository matchRepository;

    @Transactional
    public MatchDto accept(Long proposalId) {
        Proposal proposal = proposalRepository.findById(proposalId)
                .orElseThrow(() -> new ProposalNotFoundException(proposalId));
        Artisan artisan = artisanRepository.findById(proposal.getArtisanId())
                .orElseThrow(() -> new ArtisanNotFoundException(proposal.getArtisanId()));

        proposal.changeStatus(ProposalStatus.ACCEPTED);
        artisan.changeStatus(ArtisanStatus.MATCHED);

        List<Proposal> others = proposalRepository.findAllByArtisanIdAndStatusAndIdNot(
                artisan.getId(), ProposalStatus.PENDING, proposal.getId());
        others.forEach(p -> p.changeStatus(ProposalStatus.REJECTED));

        Match match = Match.builder()
                .artisanId(artisan.getId())
                .proposalId(proposal.getId())
                .creatorId(proposal.getCreatorId())
                .status(MatchStatus.ACTIVE)
                .build();
        return MatchDto.from(matchRepository.save(match));
    }

    @Transactional
    public ProposalDto reject(Long proposalId) {
        Proposal proposal = proposalRepository.findById(proposalId)
                .orElseThrow(() -> new ProposalNotFoundException(proposalId));
        proposal.changeStatus(ProposalStatus.REJECTED);
        return ProposalDto.from(proposal);
    }
}
