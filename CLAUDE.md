# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Spring Boot 3.5.14 web application on Java 17, built with Gradle. Base package: `com.heritage.auction`. Entry point: `HeritageAuctionApplication`.

Layout (domain-oriented):
- `domain/{artisan,proposal,match,product,order}/` — feature modules; each owns its own controllers/services/repositories/entities.
- `config/` — Spring `@Configuration` (CORS, Security).
- `global/{exception,response}/` — cross-cutting concerns (the `ApiResponse<T>` envelope lives here).
- `infra/` — third-party integrations (Firebase, etc.).

Empty packages are kept alive with `package-info.java` files so the layout survives in git.

## Commands

Use the Gradle wrapper.

- Run (dev profile, H2 in-memory): `./gradlew bootRun`
- Run with prod profile (MySQL — requires DB env vars): `SPRING_PROFILES_ACTIVE=prod ./gradlew bootRun`
- Build a jar: `./gradlew build`
- Run all tests: `./gradlew test`
- Single test class: `./gradlew test --tests com.heritage.auction.HeritageAuctionApplicationTests`

## Profiles & datasources

`application.yml` is split into three documents via `spring.config.activate.on-profile`:
- **dev** (default) — H2 in-memory at `jdbc:h2:mem:heritage` (MySQL compat mode), `ddl-auto: create-drop`, H2 console at `/h2-console`.
- **prod** — MySQL via env vars: `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USERNAME`, `DB_PASSWORD`. `ddl-auto: validate` — schema must already exist.

## Stack notes

- **Spring Security** is on the classpath. `config/SecurityConfig` currently permits all requests (stateless, CSRF/formLogin/httpBasic disabled, frame-options sameOrigin for the H2 console). Auth will land via Firebase — when adding protected endpoints, edit the filter chain there rather than scattering `@PreAuthorize` annotations until the global model is settled.
- **CORS** is exposed as a `CorsConfigurationSource` bean in `config/CorsConfig` and picked up by Spring Security via `http.cors()`. Allowed origin is `http://localhost:3000` only. Edit that one bean to extend — don't fork CORS into `WebMvcConfigurer.addCorsMappings`.
- **Firebase Admin SDK** (`com.google.firebase:firebase-admin:9.4.3`) is on the classpath but not initialized. When wiring auth, do `FirebaseApp.initializeApp(...)` from `infra/`, loading the service account JSON path from an env var — never check the JSON in.
- **ApiResponse<T>** in `global/response/` is the standard controller envelope: `success`, `message`, `data`. Constructor is private — use `ApiResponse.success(...)` / `ApiResponse.error(...)`.
- **Lombok** annotation processor is configured for both `main` and `test`.