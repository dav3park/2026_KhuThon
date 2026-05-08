package com.heritage.auction.config;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.firebase.auth.FirebaseAuth;
import com.heritage.auction.global.response.ApiResponse;
import com.heritage.auction.global.security.JwtFilter;

import jakarta.servlet.http.HttpServletResponse;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http,
                                           ObjectProvider<FirebaseAuth> firebaseAuthProvider,
                                           ObjectMapper objectMapper) throws Exception {
        http
            .cors(Customizer.withDefaults())
            .csrf(csrf -> csrf.disable())
            .httpBasic(httpBasic -> httpBasic.disable())
            .formLogin(formLogin -> formLogin.disable())
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .headers(headers -> headers.frameOptions(frame -> frame.sameOrigin()))
            .exceptionHandling(ex -> ex
                .authenticationEntryPoint(jsonAuthenticationEntryPoint(objectMapper))
                .accessDeniedHandler(jsonAccessDeniedHandler(objectMapper)))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(HttpMethod.GET,
                        "/", "/index.html", "/*.html",
                        "/styles.css", "/script.js",
                        "/assets/**", "/favicon.ico").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/artisans/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/products/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("OPERATOR")
                .requestMatchers("/h2-console/**").permitAll()
                .anyRequest().authenticated());

        FirebaseAuth firebaseAuth = firebaseAuthProvider.getIfAvailable();
        if (firebaseAuth != null) {
            http.addFilterBefore(new JwtFilter(firebaseAuth), UsernamePasswordAuthenticationFilter.class);
        }
        return http.build();
    }

    private static AuthenticationEntryPoint jsonAuthenticationEntryPoint(ObjectMapper objectMapper) {
        return (request, response, ex) ->
                writeError(response, objectMapper, HttpStatus.UNAUTHORIZED, "인증이 필요합니다");
    }

    private static AccessDeniedHandler jsonAccessDeniedHandler(ObjectMapper objectMapper) {
        return (request, response, ex) ->
                writeError(response, objectMapper, HttpStatus.FORBIDDEN, "접근 권한이 없습니다");
    }

    private static void writeError(HttpServletResponse response,
                                   ObjectMapper objectMapper,
                                   HttpStatus status,
                                   String message) throws IOException {
        response.setStatus(status.value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setCharacterEncoding(StandardCharsets.UTF_8.name());
        objectMapper.writeValue(response.getWriter(), ApiResponse.error(message));
    }
}
