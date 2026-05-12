package com.heritage.auction.domain.proposal;

public class ProposalNotFoundException extends RuntimeException {

    public ProposalNotFoundException(Long id) {
        super("Proposal not found: id=" + id);
    }
}
