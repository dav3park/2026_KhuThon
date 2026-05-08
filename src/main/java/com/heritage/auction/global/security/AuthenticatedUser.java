package com.heritage.auction.global.security;

public record AuthenticatedUser(String uid, String email, UserRole role) {
}