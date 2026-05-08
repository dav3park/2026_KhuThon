package com.heritage.auction.domain.match;

public class MatchNotActiveException extends RuntimeException {

    public MatchNotActiveException(Long matchId, MatchStatus currentStatus) {
        super("Match is not active: id=" + matchId + ", status=" + currentStatus);
    }
}
