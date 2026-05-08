# 이음

장인(匠人)과 크리에이터를 연결해 협업 작품을 선착순으로 판매하는 Service.

## 스택

- Java 17, Spring Boot 3.5.14, Gradle
- Spring Data JPA, Spring Security
- Firebase Admin SDK (Authentication)
- H2 (dev) / MySQL (prod)

## 실행 방법

기본 프로파일은 `dev`(H2 인메모리)입니다.

```bash
./gradlew bootRun --args='--spring.profiles.active=dev'
```

`dev` 프로파일에서는 서버 기동 시 더미 장인 4명이 자동 시드됩니다 (`infra/seed/ArtisanDevSeeder`).
H2 콘솔: <http://localhost:8080/h2-console> (JDBC URL: `jdbc:h2:mem:heritage`)

운영 프로파일(MySQL)로 실행:

```bash
SPRING_PROFILES_ACTIVE=prod \
DB_HOST=... DB_PORT=3306 DB_NAME=heritage \
DB_USERNAME=... DB_PASSWORD=... \
./gradlew bootRun
```

테스트:

```bash
./gradlew test
```

## Firebase 설정

Firebase Authentication ID 토큰 검증을 위해 서비스 계정 JSON이 필요합니다.

1. Firebase 콘솔 → 프로젝트 설정 → 서비스 계정 → "새 비공개 키 생성"으로 JSON을 내려받습니다.
2. 파일을 다음 경로에 저장합니다:

   ```
   src/main/resources/firebase-service-account.json
   ```

3. 해당 파일은 `.gitignore`에 등록되어 있어 커밋되지 않습니다. 절대 저장소에 올리지 마세요.
4. 파일이 없으면 `FirebaseConfig`가 활성화되지 않아 Firebase 의존 엔드포인트(`@AuthenticationPrincipal` 사용)는 401을 반환합니다. 공개 GET 엔드포인트는 그대로 동작합니다.

요청 시에는 `Authorization: Bearer <Firebase ID Token>` 헤더를 사용합니다.
관리자 엔드포인트(`/api/admin/**`)는 토큰의 `role` 커스텀 클레임이 `OPERATOR`여야 합니다. 그 외는 `BUYER`로 처리됩니다.

## 주요 API 엔드포인트

| Method | Path | 설명 | 인증 |
| --- | --- | --- | --- |
| GET | `/api/artisans` | 장인 목록 (페이지, `category`/`status` 필터) | 공개 |
| GET | `/api/artisans/{id}` | 장인 상세 | 공개 |
| POST | `/api/admin/artisans` | 장인 등록 | OPERATOR |
| PATCH | `/api/admin/artisans/{id}/status` | 장인 상태 변경 | OPERATOR |
| POST | `/api/proposals` | 크리에이터 기획안 제출 | 인증 필요 |
| GET | `/api/admin/proposals?artisanId=` | 장인별 기획안 조회 | OPERATOR |
| POST | `/api/admin/proposals/{proposalId}/accept` | 기획안 수락 + 매칭 생성 (다른 PENDING은 자동 REJECTED) | OPERATOR |
| POST | `/api/admin/proposals/{proposalId}/reject` | 기획안 거절 | OPERATOR |
| POST | `/api/admin/products` | 작품 등록 (활성 매칭 기준) | OPERATOR |
| GET | `/api/products` | 작품 목록 (`saleStatus` 필터) | 공개 |
| GET | `/api/products/{id}` | 작품 상세 | 공개 |
| POST | `/api/products/{id}/purchase` | 선착순 구매 + 정산 (장인 40% / 크리에이터 40% / 플랫폼 20%) | 인증 필요 |

응답은 모두 `ApiResponse<T>` 래퍼(`success`, `message`, `data`)로 감쌉니다. 에러는 `GlobalExceptionHandler`가 표준화합니다.

## 프로젝트 구조

```
src/main/java/com/heritage/auction/
├── HeritageAuctionApplication.java
├── config/                # SecurityConfig, CorsConfig
├── domain/
│   ├── artisan/           # 장인
│   ├── proposal/          # 기획안
│   ├── match/             # 수락된 매칭
│   ├── product/           # 작품 (선착순 재고)
│   └── order/             # 구매/정산
├── global/
│   ├── common/            # BaseTimeEntity
│   ├── exception/         # GlobalExceptionHandler
│   ├── response/          # ApiResponse<T>
│   └── security/          # JwtFilter, AuthenticatedUser, UserRole
└── infra/
    ├── firebase/          # FirebaseConfig
    └── seed/              # 개발 프로파일용 더미 데이터
```

## 동시성

`POST /api/products/{id}/purchase`는 `ProductRepository.findByIdForUpdate`로 PESSIMISTIC_WRITE 락을 잡아 재고가 음수가 되지 않도록 보장합니다.
