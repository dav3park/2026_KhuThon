# 이음 — 장인과 창작자를 잇다 / 맥도날드 좋아해요 팀 (박찬종, 김병규, 황진용, 이승준)

> **🏆 2026 쿠톤(Khuthon) 대상 수상작**

전통 장인(匠人)과 현대 창작자가 함께 협업 작품을 기획하고, 완성된 결과물을 대중에게 선보이는 플랫폼입니다.

![Java](https://img.shields.io/badge/Java-17-007396?style=flat-square&logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.14-6DB33F?style=flat-square&logo=springboot)
![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?style=flat-square&logo=firebase)
![H2](https://img.shields.io/badge/H2-In--Memory-1565C0?style=flat-square)
![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?style=flat-square&logo=mysql)

---

## 서비스 개요

이음(匠)은 세 가지 흐름으로 동작합니다.

```
장인 탐색 → 기획안 제출 → 운영자 수락·매칭 → 작품 등록 → 선착순 판매
```

| 역할 | 설명 |
|------|------|
| **장인** | 전통 기술 보유자. 창작자의 기획안을 수락하고 제작에 참여합니다. |
| **창작자** | 상품 기획·판매를 담당. 장인의 기술을 바탕으로 프로젝트를 제안합니다. |
| **운영자** | 기획안 심사·수락, 작품 등록을 관리합니다. |

---

## 화면 구성

| 메인 갤러리 | 작품 상세 | 기획안 작성 |
|-------------|-----------|------------|
| 협업 작품 카드 캐러셀 + 카테고리 필터 | 장인·창작자 프로필 + 선착순 구매 | 콘셉트·제작 방식·일정·판매 계획 입력 |

---

## 기술 스택

| 구분 | 사용 기술 |
|------|----------|
| Language | Java 17 |
| Framework | Spring Boot 3.5.14, Spring Data JPA, Spring Security |
| Auth | Firebase Admin SDK 9.4.3 (ID Token 검증) |
| DB (dev) | H2 In-Memory (MySQL compat mode) |
| DB (prod) | MySQL 8 |
| Build | Gradle Wrapper |
| Frontend | Vanilla JS, CSS Custom Properties |

---

## 프로젝트 구조

```
src/main/java/com/heritage/auction/
├── HeritageAuctionApplication.java
├── config/
│   ├── SecurityConfig.java      # 필터 체인, Firebase 조건부 등록
│   └── CorsConfig.java
├── domain/
│   ├── artisan/                 # 장인 CRUD
│   ├── proposal/                # 기획안 제출·조회
│   ├── match/                   # 수락된 매칭
│   ├── product/                 # 작품 재고 (비관적 락)
│   └── order/                   # 구매·정산
├── global/
│   ├── exception/               # GlobalExceptionHandler
│   ├── response/                # ApiResponse<T> 래퍼
│   └── security/                # JwtFilter, UserRole
└── infra/
    ├── firebase/                # FirebaseConfig (조건부 빈)
    └── seed/                    # ArtisanDevSeeder (dev 프로파일)
```

---

## 로컬 실행

### 1. 기본 (H2 인메모리, Firebase 없이도 동작)

```bash
./gradlew bootRun
```

- 서버: `http://localhost:8080`
- H2 콘솔: `http://localhost:8080/h2-console`  
  (JDBC URL: `jdbc:h2:mem:heritage`, 계정 정보 불필요)
- `dev` 프로파일에서 서버 기동 시 더미 장인 4명이 자동 시드됩니다.

### 2. 운영 (MySQL)

```bash
SPRING_PROFILES_ACTIVE=prod \
  DB_HOST=localhost \
  DB_PORT=3306 \
  DB_NAME=heritage \
  DB_USERNAME=root \
  DB_PASSWORD=secret \
  ./gradlew bootRun
```

### 3. 테스트

```bash
./gradlew test
```

---

## Firebase 인증 설정

Firebase Authentication은 선택 사항입니다. 서비스 계정 JSON이 없으면 공개 엔드포인트는 그대로 동작하고, 인증 필요 엔드포인트만 401을 반환합니다.

1. [Firebase 콘솔](https://console.firebase.google.com) → 프로젝트 설정 → 서비스 계정 → **새 비공개 키 생성**
2. 다운로드한 파일을 아래 경로에 저장합니다.

   ```
   src/main/resources/firebase-service-account.json
   ```

   > 이 파일은 `.gitignore`에 등록되어 있습니다. **절대 커밋하지 마세요.**

3. 요청 헤더:

   ```
   Authorization: Bearer <Firebase ID Token>
   ```

4. 관리자 엔드포인트(`/api/admin/**`)는 토큰의 `role` 커스텀 클레임이 `OPERATOR`여야 합니다.

---

## API 엔드포인트

### 공개 (인증 불필요)

| Method | Path | 설명 |
|--------|------|------|
| `GET` | `/api/artisans` | 장인 목록 (`category`, `status` 필터, 페이지) |
| `GET` | `/api/artisans/{id}` | 장인 상세 |
| `GET` | `/api/products` | 작품 목록 (`saleStatus` 필터) |
| `GET` | `/api/products/{id}` | 작품 상세 |

### 인증 필요 (Firebase ID Token)

| Method | Path | 설명 |
|--------|------|------|
| `POST` | `/api/proposals` | 창작자 기획안 제출 |
| `POST` | `/api/products/{id}/purchase` | 선착순 구매 + 정산 |

### 운영자 전용 (`role: OPERATOR`)

| Method | Path | 설명 |
|--------|------|------|
| `POST` | `/api/admin/artisans` | 장인 등록 |
| `PATCH` | `/api/admin/artisans/{id}/status` | 장인 상태 변경 |
| `GET` | `/api/admin/proposals?artisanId=` | 기획안 목록 조회 |
| `POST` | `/api/admin/proposals/{id}/accept` | 기획안 수락 + 매칭 생성 |
| `POST` | `/api/admin/proposals/{id}/reject` | 기획안 거절 |
| `POST` | `/api/admin/products` | 작품 등록 |

모든 응답은 `ApiResponse<T>` 래퍼(`success`, `message`, `data`)로 반환되며, 에러는 `GlobalExceptionHandler`가 일관된 형식으로 처리합니다.

---

## 동시성 처리

`POST /api/products/{id}/purchase`는 `PESSIMISTIC_WRITE` 락(`SELECT ... FOR UPDATE`)으로 재고를 보호합니다. 동시에 여러 요청이 들어와도 재고가 음수가 되지 않습니다.

```java
@Lock(LockModeType.PESSIMISTIC_WRITE)
Optional<Product> findByIdForUpdate(Long id);
```

---

## 팀

**2026 쿠톤(Khuthon)** — 맥도날드 좋아해요 팀  
전통과 현대를 연결하는 협업 플랫폼 프로젝트
