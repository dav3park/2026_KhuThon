# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Spring Boot 3.5.14 web application on Java 17, built with Gradle. Base package: `com.example.khuthon`. The project is a fresh scaffold — only `KhuthonApplication` (the `@SpringBootApplication` entry point) and a `contextLoads` smoke test exist so far.

## Commands

Use the Gradle wrapper (`./gradlew`) — do not assume a system Gradle install.

- Run the app: `./gradlew bootRun`
- Build a jar: `./gradlew build` (output: `build/libs/Khuthon-0.0.1-SNAPSHOT.jar`)
- Run all tests: `./gradlew test`
- Run a single test class: `./gradlew test --tests com.example.khuthon.KhuthonApplicationTests`
- Run a single test method: `./gradlew test --tests com.example.khuthon.KhuthonApplicationTests.contextLoads`
- Continuous build during dev: `./gradlew build --continuous` (pairs well with spring-boot-devtools, which is already on the `developmentOnly` classpath and triggers automatic restart)

Test reports land in `build/reports/tests/test/index.html`.

## Stack notes

Dependencies already wired in `build.gradle` that affect how new code should be written:

- **spring-boot-starter-web** — build REST controllers with `@RestController`; embedded Tomcat on default port 8080.
- **spring-boot-starter-validation** — Jakarta Bean Validation (`@Valid`, `@NotNull`, etc.) is available; use it on controller request bodies and `@ConfigurationProperties`.
- **springdoc-openapi-starter-webmvc-ui (2.8.16)** — OpenAPI/Swagger UI is auto-served at `/swagger-ui.html` and the spec at `/v3/api-docs` once controllers exist. No extra config needed.
- **Lombok** — annotation processor is configured for both `main` and `test`. Prefer `@Getter`/`@RequiredArgsConstructor`/`@Slf4j` over hand-written boilerplate.
- **spring-boot-configuration-processor** — when adding `@ConfigurationProperties` classes, IDE metadata is generated automatically.

`application.properties` only sets `spring.application.name=Khuthon` — add new config there (or a profile-specific `application-<profile>.properties`).