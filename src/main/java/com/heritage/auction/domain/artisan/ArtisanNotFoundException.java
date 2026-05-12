package com.heritage.auction.domain.artisan;

public class ArtisanNotFoundException extends RuntimeException {

    public ArtisanNotFoundException(Long id) {
        super("Artisan not found: id=" + id);
    }
}
