package com.heritage.auction.global.security;

import java.io.IOException;
import java.util.List;

import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

    private static final String AUTHORIZATION_HEADER = "Authorization";
    private static final String BEARER_PREFIX = "Bearer ";
    private static final String ROLE_CLAIM = "role";
    private static final String AUTHORITY_PREFIX = "ROLE_";

    private final FirebaseAuth firebaseAuth;

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain filterChain) throws ServletException, IOException {
        String token = resolveBearerToken(request);
        if (token != null) {
            try {
                FirebaseToken decoded = firebaseAuth.verifyIdToken(token);
                SecurityContextHolder.getContext().setAuthentication(toAuthentication(decoded));
            } catch (FirebaseAuthException e) {
                SecurityContextHolder.clearContext();
                log.debug("Firebase token verification failed: {}", e.getMessage());
            }
        }
        filterChain.doFilter(request, response);
    }

    private String resolveBearerToken(HttpServletRequest request) {
        String header = request.getHeader(AUTHORIZATION_HEADER);
        if (header == null || !header.startsWith(BEARER_PREFIX)) {
            return null;
        }
        String token = header.substring(BEARER_PREFIX.length()).trim();
        return token.isEmpty() ? null : token;
    }

    private Authentication toAuthentication(FirebaseToken token) {
        UserRole role = extractRole(token);
        AuthenticatedUser principal = new AuthenticatedUser(token.getUid(), token.getEmail(), role);
        List<SimpleGrantedAuthority> authorities = List.of(new SimpleGrantedAuthority(AUTHORITY_PREFIX + role.name()));
        return new UsernamePasswordAuthenticationToken(principal, null, authorities);
    }

    private UserRole extractRole(FirebaseToken token) {
        Object claim = token.getClaims().get(ROLE_CLAIM);
        if (claim instanceof String value) {
            try {
                return UserRole.valueOf(value.toUpperCase());
            } catch (IllegalArgumentException ignored) {
                log.debug("Unknown role claim '{}', falling back to BUYER", value);
            }
        }
        return UserRole.BUYER;
    }
}