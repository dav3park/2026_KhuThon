package com.heritage.auction.domain.proposal;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProposalRepository extends JpaRepository<Proposal, Long> {

    long countByArtisanIdAndStatus(Long artisanId, ProposalStatus status);
}
