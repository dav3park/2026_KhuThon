package com.heritage.auction.domain.artisan;

public class ArtisanNotOpenException extends RuntimeException {

    public ArtisanNotOpenException(Long artisanId, ArtisanStatus currentStatus) {
        super("Artisan is not open for proposals: id=" + artisanId + ", status=" + currentStatus);
    }
}
