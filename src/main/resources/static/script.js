const products = {
  "tiger-jacket": {
    title: "민화 수호 재킷",
    category: "패션",
    image: "/assets/tiger-painting.png",
    price: "248,000원",
    artisan: "한도윤 민화 장인",
    creator: "이로운 그래픽 디자이너",
    stock: 23,
    total: 80,
    description:
      "민화의 수호 이미지를 현대적인 스트리트웨어 그래픽으로 재해석한 리버서블 재킷입니다. 장인은 원본 선과 색의 기준을 잡고, 창작자는 착용 가능한 패턴과 패키지 그래픽으로 확장했습니다.",
  },
  "line-case": {
    title: "선묘 패턴 케이스",
    category: "패션",
    image: "/assets/tiger-line.png",
    price: "39,000원",
    artisan: "한도윤 민화 장인",
    creator: "서민재 제품 디자이너",
    stock: 64,
    total: 120,
    description:
      "전통 선묘 이미지를 얇은 흑백 패턴으로 다듬어 제작한 모바일 케이스입니다. 손그림의 밀도를 유지하면서 일상 제품에 부담 없이 사용할 수 있도록 구성했습니다.",
  },
  "beauty-overcoat": {
    title: "전통의 미 현대의 선 오버코트",
    category: "패션",
    image: "/assets/collab-overcoat.png",
    price: "1,090,000원",
    artisan: "김기호 금박장",
    creator: "현대 테일러링 디자이너",
    stock: 6,
    total: 24,
    description:
      "금박 문양을 현대적인 코트 실루엣에 적용한 고가 한정 컬렉션입니다. 국보급 문양에서 영감을 받은 선과 별자리 그래픽을 원단 위에 재해석했습니다.",
  },
  "valuables-storage": {
    title: "전통의 미 귀중품 보관함",
    category: "리빙",
    image: "/assets/collab-storage.png",
    price: "1,090,000원",
    artisan: "김기호 금박장",
    creator: "임사랑 입사 장인",
    stock: 8,
    total: 30,
    description:
      "금박과 입사 장식을 결합한 귀중품 보관함입니다. 전통 장식의 밀도를 유지하면서 현대 생활 공간에서 사용할 수 있는 보관 오브젝트로 완성했습니다.",
  },
  "bow-lamp": {
    title: "활 곡선 테이블 램프",
    category: "리빙",
    image: "/assets/artisan-bow.png",
    price: "212,000원",
    artisan: "강태오 궁시장",
    creator: "문지후 리빙 디자이너",
    stock: 9,
    total: 35,
    description:
      "전통 활의 탄성과 곡선을 조명 프레임으로 옮긴 테이블 램프입니다. 장인의 휨 구조 이해와 창작자의 실내 조명 설계가 결합된 소량 제작 오브젝트입니다.",
  },
  "hat-shade": {
    title: "갓 그림자 스탠드",
    category: "리빙",
    image: "/assets/artisan-hat.png",
    price: "168,000원",
    artisan: "박소연 갓 장인",
    creator: "윤하늘 조명 디자이너",
    stock: 18,
    total: 50,
    description:
      "갓의 직조 결이 빛을 통과하며 생기는 그림자를 중심 경험으로 설계한 조명입니다. 전통 갓의 구조를 보존하면서 현대 공간에 어울리는 크기와 밝기로 조정했습니다.",
  },
  "tiger-print": {
    title: "수호의 선 프린트",
    category: "아트",
    image: "/assets/artisan-painting.png",
    price: "74,000원",
    artisan: "한도윤 민화 장인",
    creator: "고유진 일러스트레이터",
    stock: 31,
    total: 70,
    description:
      "장인의 원화 작업 과정을 바탕으로 제작한 넘버링 아트 프린트입니다. 종이 질감과 먹선의 흔적을 살려 공간에 걸 수 있는 포스터형 작품으로 완성했습니다.",
  },
  "wood-speaker": {
    title: "결 소리 블루투스 스피커",
    category: "리빙",
    image: "/assets/artisan-wood.png",
    price: "186,000원",
    artisan: "오명환 목공 장인",
    creator: "정라온 사운드 프로덕트 디자이너",
    stock: 12,
    total: 40,
    description:
      "목공 장인의 조각 질감을 스피커 그릴과 바디에 반영한 데스크 오브젝트입니다. 나무결의 촉감과 작은 방에 어울리는 소리를 함께 고려했습니다.",
  },
  "string-kit": {
    title: "현의 숨 샘플 키트",
    category: "사운드",
    image: "/assets/artisan-gayageum.png",
    price: "58,000원",
    artisan: "이건우 악기장",
    creator: "최해솔 음악 프로듀서",
    stock: 46,
    total: 100,
    description:
      "전통 현악기의 울림을 창작자용 음원 샘플과 짧은 제작 노트로 구성한 디지털 패키지입니다. 실제 연주 질감과 악기 제작자의 해설을 함께 담았습니다.",
  },
};

const artisans = {
  bow: {
    name: "강태오",
    field: "궁시장 · 전통 활 제작",
    region: "전북 전주",
    image: "/assets/artisan-bow.png",
    summary: "나무와 뿔의 탄성을 다루는 활 제작 장인입니다. 곡선 구조, 리빙 오브젝트, 스포츠 굿즈 협업에 적합합니다.",
    original: "물소뿔, 대나무, 힘줄을 겹겹이 붙여 활의 탄성과 균형을 맞추는 작업을 이어왔습니다.",
  },
  hat: {
    name: "박소연",
    field: "갓 장인 · 직조와 형태",
    region: "서울",
    image: "/assets/artisan-hat.png",
    summary: "갓의 얇은 결, 빛 투과, 원형 구조를 현대 제품으로 확장하는 협업을 선호합니다.",
    original: "대나무와 말총을 얇게 엮어 빛이 통과하는 갓의 결, 형태, 마감 균형을 만드는 작업을 해왔습니다.",
  },
  painting: {
    name: "한도윤",
    field: "민화 장인 · 전통 회화",
    region: "경기 수원",
    image: "/assets/artisan-painting.png",
    summary: "민화의 선, 색, 상징을 기반으로 패션 그래픽과 아트 프린트 프로젝트를 함께할 수 있습니다.",
    original: "벽사, 길상, 풍요를 상징하는 민화 이미지를 손으로 그리고 채색하는 전통 회화 작업을 지속합니다.",
  },
  wood: {
    name: "오명환",
    field: "목공 장인 · 조각과 결",
    region: "강원 원주",
    image: "/assets/artisan-wood.png",
    summary: "손 조각 질감과 목재 구조를 살린 소형 가구, 오브젝트, 스피커 협업에 강점이 있습니다.",
    original: "목재의 결을 읽고 손조각으로 형태를 덜어내는 방식으로 생활 목물과 장식 오브젝트를 만듭니다.",
  },
  gayageum: {
    name: "이건우",
    field: "악기장 · 전통 현악기",
    region: "경남 진주",
    image: "/assets/artisan-gayageum.png",
    summary: "현의 울림과 악기 구조를 다루며 사운드 키트, 전시 설치, 음악 굿즈 협업이 가능합니다.",
    original: "오동나무 울림통과 현의 장력을 조율해 전통 현악기의 소리와 구조를 만드는 작업을 이어갑니다.",
  },
  goldfoil: {
    name: "김기호",
    field: "금박장 · 금박 문양",
    region: "서울",
    image: "/assets/artisan-goldfoil.png",
    summary: "금박 문양을 직물과 제품 표면에 정교하게 올리는 작업을 기반으로 패션 협업에 적합합니다.",
    original: "풀과 금박을 이용해 문양을 옷감 위에 입히며, 전통 의복과 장식천의 화려한 표면을 만들어왔습니다.",
  },
  embroidery: {
    name: "임사랑",
    field: "자수장 · 전통 자수",
    region: "충북 청주",
    image: "/assets/artisan-embroidery.png",
    summary: "실의 두께, 방향, 색감을 조절해 문양을 쌓는 장인으로 패브릭과 보관함 협업이 가능합니다.",
    original: "비단 위에 길상 문양과 장식선을 수놓으며, 오래 쓰는 물건에 상징과 질감을 더하는 작업을 해왔습니다.",
  },
};

const stateKey = "heritageAuthState";
const defaultPurchases = ["hat-shade", "valuables-storage"];
const defaultProposals = [
  { title: "갓 그림자 무드등 컬렉션", status: "검토 중", artisan: "박소연" },
  { title: "금박 패턴 스카프", status: "초안 보완 요청", artisan: "김기호" },
];

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function getAuth() {
  try {
    return JSON.parse(localStorage.getItem(stateKey)) || null;
  } catch {
    return null;
  }
}

function setAuth(auth) {
  localStorage.setItem(stateKey, JSON.stringify(auth));
  renderAuthActions();
}

function clearAuth() {
  localStorage.removeItem(stateKey);
  renderAuthActions();
}

function openAuthModal(mode = "login", message = "") {
  const existing = document.querySelector(".auth-modal-backdrop");
  existing?.remove();
  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div class="auth-modal-backdrop" role="presentation">
        <section class="auth-modal" role="dialog" aria-modal="true" aria-labelledby="authTitle">
          <button class="modal-close" type="button" data-auth-close aria-label="닫기">×</button>
          <p class="eyebrow">${mode === "signup" ? "Create Account" : "Login"}</p>
          <h2 id="authTitle">${mode === "signup" ? "어떤 계정으로 시작할까요?" : "로그인이 필요합니다"}</h2>
          <p class="auth-message">${message || "구매와 협업 제안은 로그인 후 이용할 수 있습니다."}</p>
          <div class="auth-choice-grid">
            <button type="button" data-login-consumer>
              <strong>소비자로 로그인</strong>
              <span>한정 상품 구매와 마이페이지 이용</span>
            </button>
            <button type="button" data-signup-creator>
              <strong>창작자로 회원가입 신청</strong>
              <span>운영자 승인 전까지 협업 제안 제한</span>
            </button>
            <button type="button" data-login-approved>
              <strong>승인된 창작자로 데모 로그인</strong>
              <span>협업 제안 작성 가능</span>
            </button>
          </div>
        </section>
      </div>
    `
  );

  document.querySelector("[data-auth-close]")?.addEventListener("click", closeAuthModal);
  document.querySelector(".auth-modal-backdrop")?.addEventListener("click", (event) => {
    if (event.target.classList.contains("auth-modal-backdrop")) closeAuthModal();
  });
  document.querySelector("[data-login-consumer]")?.addEventListener("click", () => {
    setAuth({ name: "소비자 회원", role: "consumer", creatorStatus: "none" });
    closeAuthModal();
  });
  document.querySelector("[data-signup-creator]")?.addEventListener("click", () => {
    setAuth({ name: "창작자 신청자", role: "creator", creatorStatus: "pending" });
    closeAuthModal();
    showNotice("창작자 계정 신청이 접수되었습니다. 운영자 승인 전까지 협업 제안 기능은 사용할 수 없습니다.");
  });
  document.querySelector("[data-login-approved]")?.addEventListener("click", () => {
    setAuth({ name: "승인된 창작자", role: "creator", creatorStatus: "approved" });
    closeAuthModal();
  });
}

function closeAuthModal() {
  document.querySelector(".auth-modal-backdrop")?.remove();
}

function showNotice(message) {
  const old = document.querySelector(".toast");
  old?.remove();
  document.body.insertAdjacentHTML("beforeend", `<div class="toast" role="status">${message}</div>`);
  window.setTimeout(() => document.querySelector(".toast")?.remove(), 3600);
}

function requireLogin(message) {
  const auth = getAuth();
  if (auth) return true;
  openAuthModal("login", message);
  return false;
}

function requireApprovedCreator() {
  const auth = getAuth();
  if (!auth) {
    openAuthModal("login", "협업 제안은 로그인 후 이용할 수 있습니다. 창작자로 가입하거나 승인된 창작자 계정으로 로그인해주세요.");
    return false;
  }
  if (auth.role !== "creator") {
    showNotice("소비자 계정은 구매만 가능합니다. 협업 제안은 창작자 계정 신청 후 운영자 승인이 필요합니다.");
    openAuthModal("signup", "협업 제안 기능을 사용하려면 창작자로 계정 신청을 해야 합니다.");
    return false;
  }
  if (auth.creatorStatus !== "approved") {
    showNotice("창작자 신청이 운영자 승인 대기 중입니다. 승인 이후부터 협업 제안 기능을 사용할 수 있습니다.");
    return false;
  }
  return true;
}

function renderAuthActions() {
  const auth = getAuth();
  document.querySelectorAll("[data-auth-actions]").forEach((target) => {
    target.innerHTML = auth
      ? `
        <a class="secondary-button slim" href="/mypage.html">마이페이지</a>
        <button class="header-cta slim" type="button" data-logout>로그아웃</button>
      `
      : `
        <button class="secondary-button slim" type="button" data-open-login>로그인</button>
        <button class="header-cta slim" type="button" data-open-signup>회원가입</button>
      `;
  });
  document.querySelectorAll("[data-open-login]").forEach((button) => {
    button.addEventListener("click", () => openAuthModal("login"));
  });
  document.querySelectorAll("[data-open-signup]").forEach((button) => {
    button.addEventListener("click", () => openAuthModal("signup"));
  });
  document.querySelectorAll("[data-logout]").forEach((button) => {
    button.addEventListener("click", () => {
      clearAuth();
      showNotice("로그아웃되었습니다.");
    });
  });
}

function setupGallery() {
  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".asset-card");
  const carousel = document.querySelector("#projectCarousel");

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const selected = filter.dataset.filter;
      filters.forEach((item) => item.classList.remove("active"));
      filter.classList.add("active");
      cards.forEach((card) => {
        const isVisible = selected === "all" || card.dataset.category === selected;
        card.classList.toggle("is-hidden", !isVisible);
      });
      carousel?.scrollTo({ left: 0, behavior: "smooth" });
    });
  });

  document.querySelector("[data-carousel-prev]")?.addEventListener("click", () => {
    carousel?.scrollBy({ left: -380, behavior: "smooth" });
  });
  document.querySelector("[data-carousel-next]")?.addEventListener("click", () => {
    carousel?.scrollBy({ left: 380, behavior: "smooth" });
  });
}

function renderProductPage() {
  const detail = document.querySelector("#productDetail");
  if (!detail) return;

  const id = getParam("id") || "tiger-jacket";
  const product = products[id] || products["tiger-jacket"];
  const sold = product.total - product.stock;
  const stockPercent = Math.max(4, Math.round((product.stock / product.total) * 100));

  document.title = `${product.title} | Heritage Collaboration Lab`;
  detail.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.title}">
    </div>
    <article class="product-copy">
      <p class="eyebrow">${product.category} · ${product.total}개 한정 판매</p>
      <h1>${product.title}</h1>
      <p>${product.description}</p>
      <dl class="product-facts">
        <div><dt>판매가</dt><dd>${product.price}</dd></div>
        <div><dt>협업 장인</dt><dd>${product.artisan}</dd></div>
        <div><dt>협업 창작자</dt><dd>${product.creator}</dd></div>
        <div><dt>판매 현황</dt><dd>${sold}개 판매 · ${product.stock}개 남음</dd></div>
      </dl>
      <div class="stock-meter">
        <label><span>남은 재고</span><span>${product.stock} / ${product.total}</span></label>
        <div class="meter-track"><div class="meter-fill" style="width: ${stockPercent}%"></div></div>
      </div>
      <p class="stock-note">한정 수량이 모두 판매되면 같은 구성으로는 다시 제작하지 않습니다.</p>
      <div class="product-actions">
        <button class="primary-button" type="button" data-buy="${id}">구매하기</button>
        <a class="secondary-button" href="/#gallery">다른 프로젝트 보기</a>
      </div>
    </article>
  `;

  document.querySelector("[data-buy]")?.addEventListener("click", () => {
    if (!requireLogin("구매하기는 로그인 후 이용할 수 있습니다.")) return;
    showNotice(`${product.title} 구매가 접수되었습니다. 마이페이지의 구매 품목에 반영됩니다.`);
  });
}

function renderArtisansPage() {
  const grid = document.querySelector("#artisanGrid");
  if (!grid) return;

  grid.innerHTML = Object.entries(artisans)
    .map(
      ([id, artisan]) => `
        <article class="artisan-card">
          <img src="${artisan.image}" alt="${artisan.name} ${artisan.field}">
          <div>
            <p>${artisan.region}</p>
            <h3>${artisan.name} · ${artisan.field}</h3>
            <span>${artisan.summary}</span>
            <div class="card-actions">
              <button class="primary-button" type="button" data-propose="${id}">이 장인에게 제안</button>
              <a class="secondary-button" href="/artisan-works.html#${id}">작업 이력 보기</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-propose]").forEach((button) => {
    button.addEventListener("click", () => {
      if (requireApprovedCreator()) {
        window.location.href = `/proposal.html?artisan=${button.dataset.propose}`;
      }
    });
  });
}

function renderWorksPage() {
  const grid = document.querySelector("#workGrid");
  if (!grid) return;

  grid.innerHTML = Object.entries(artisans)
    .map(
      ([id, artisan]) => `
        <article class="work-card" id="${id}">
          <img src="${artisan.image}" alt="${artisan.name} 작업 모습">
          <div>
            <p>${artisan.region}</p>
            <h3>${artisan.name} · ${artisan.field}</h3>
            <strong>원래 해오던 작업</strong>
            <span>${artisan.original}</span>
            <strong>협업 가능성</strong>
            <span>${artisan.summary}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderProposalPage() {
  const selected = document.querySelector("#selectedArtisan");
  const form = document.querySelector("#deepProposalForm");
  const result = document.querySelector("#proposalResult");
  if (!selected || !form) return;

  if (!requireApprovedCreator()) {
    form.classList.add("is-locked");
  }

  const artisan = artisans[getParam("artisan")] || artisans.hat;
  selected.innerHTML = `
    <img src="${artisan.image}" alt="${artisan.name} ${artisan.field}">
    <div>
      <p>선택한 장인</p>
      <h2>${artisan.name}</h2>
      <strong>${artisan.field}</strong>
      <span>${artisan.region}</span>
      <p>${artisan.summary}</p>
    </div>
  `;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!requireApprovedCreator()) return;
    result.textContent = `${artisan.name} 장인에게 기획안이 전달되었습니다. 검토 후 프로젝트 대화방이 열립니다.`;
    form.querySelector("button").textContent = "제출 완료";
  });
}

function renderMyPage() {
  const content = document.querySelector("#mypageContent");
  if (!content) return;

  const auth = getAuth();
  if (!auth) {
    content.innerHTML = `
      <article class="mypage-card wide">
        <h2>로그인이 필요합니다</h2>
        <p>마이페이지는 로그인 후 확인할 수 있습니다.</p>
        <button class="primary-button" type="button" data-open-login>로그인하기</button>
      </article>
    `;
    content.querySelector("[data-open-login]")?.addEventListener("click", () => openAuthModal("login"));
    return;
  }

  const purchaseItems = defaultPurchases
    .map((id) => products[id])
    .map((product) => `<li><strong>${product.title}</strong><span>${product.price} · 배송 준비 중</span></li>`)
    .join("");
  const proposalItems = defaultProposals
    .map((proposal) => `<li><strong>${proposal.title}</strong><span>${proposal.artisan} 장인 · ${proposal.status}</span></li>`)
    .join("");

  const creatorLabel =
    auth.role !== "creator"
      ? "소비자 계정"
      : auth.creatorStatus === "approved"
        ? "승인된 창작자"
        : "창작자 승인 대기";

  content.innerHTML = `
    <article class="mypage-card">
      <p class="eyebrow">Account</p>
      <h2>${auth.name}</h2>
      <span>${creatorLabel}</span>
      <p>${auth.creatorStatus === "pending" ? "운영자 승인 전까지 협업 제안 기능은 제한됩니다." : "한정 상품 구매와 활동 관리를 이용할 수 있습니다."}</p>
    </article>
    <article class="mypage-card">
      <p class="eyebrow">Purchases</p>
      <h2>구매 품목</h2>
      <ul class="activity-list">${purchaseItems}</ul>
    </article>
    ${
      auth.role === "creator"
        ? `<article class="mypage-card">
            <p class="eyebrow">Proposals</p>
            <h2>기획안 제안 목록</h2>
            <ul class="activity-list">${proposalItems}</ul>
          </article>`
        : ""
    }
    <article class="mypage-card">
      <p class="eyebrow">Saved</p>
      <h2>관심 프로젝트</h2>
      <ul class="activity-list">
        <li><strong>전통의 미 현대의 선 오버코트</strong><span>재입고 알림 설정됨</span></li>
        <li><strong>현의 숨 샘플 키트</strong><span>관심 상품</span></li>
      </ul>
    </article>
    <article class="mypage-card">
      <p class="eyebrow">Support</p>
      <h2>배송과 문의</h2>
      <p>배송지 관리, 환불 문의, 프로젝트 문의 내역을 이곳에서 확인할 수 있습니다.</p>
    </article>
  `;
}

renderAuthActions();
setupGallery();
renderProductPage();
renderArtisansPage();
renderWorksPage();
renderProposalPage();
renderMyPage();
