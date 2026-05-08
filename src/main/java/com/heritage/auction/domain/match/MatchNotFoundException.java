package com.heritage.auction.domain.match;

public class MatchNotFoundException extends RuntimeException {

    public MatchNotFoundException(Long matchId) {
        super("Match not found: id=" + matchId);
    }
}
