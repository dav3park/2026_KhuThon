package com.heritage.auction.domain.proposal;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProposalRepository extends JpaRepository<Proposal, Long> {

    long countByArtisanIdAndStatus(Long artisanId, ProposalStatus status);

    List<Proposal> findAllByArtisanIdOrderByCreatedAtDesc(Long artisanId);

    List<Proposal> findAllByArtisanIdAndStatusAndIdNot(Long artisanId, ProposalStatus status, Long id);
}
