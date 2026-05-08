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
const usersKey = "heritageUsers";
const stockKey = "heritageProductStocks";
const defaultPurchases = ["hat-shade", "valuables-storage"];
const defaultProposals = [
  {
    id: "demo-proposal-hat",
    title: "갓 그림자 무드등 컬렉션",
    concept: "갓의 직조 그림자를 실내 조명 경험으로 확장",
    product: "소형 스탠드 조명 50개와 제작 기록 카드 구성",
    craft: "박소연 장인의 말총 직조 밀도와 빛 투과 균형이 핵심입니다.",
    quantity: "50",
    price: "168,000원",
    schedule: "6주",
    portfolio: "",
    sales: "한정 판매 페이지와 제작 과정 콘텐츠로 선주문을 받습니다.",
    status: "검토 중",
    artisan: "박소연",
    artisanId: "hat",
    productId: "hat-shade",
  },
  {
    id: "demo-proposal-goldfoil",
    title: "금박 패턴 스카프",
    concept: "전통 금박 문양을 일상 패션 액세서리로 전환",
    product: "실크 혼방 스카프 80장과 금박 문양 보증 카드",
    craft: "김기호 장인의 금박 문양 배치와 표면 마감 기술이 필요합니다.",
    quantity: "80",
    price: "128,000원",
    schedule: "5주",
    portfolio: "",
    sales: "시즌 룩북 촬영과 프로젝트 갤러리 연동 판매를 진행합니다.",
    status: "초안 보완 요청",
    artisan: "김기호",
    artisanId: "goldfoil",
    productId: "beauty-overcoat",
  },
];
const defaultSavedProjects = ["beauty-overcoat", "string-kit"];

const artisanWorkLists = {
  bow: [
    { title: "전통 각궁 제작", period: "2018-2026", description: "물소뿔, 대나무, 힘줄을 겹쳐 활의 복원력과 균형을 맞춘 대표 작업입니다." },
    { title: "활 곡선 연구 샘플", period: "2024", description: "활의 휨 구조를 조명과 가구 프레임에 적용하기 위한 소재 테스트입니다." },
    { title: "궁시 체험 교구", period: "2023", description: "전통 활의 구조를 교육용 키트로 풀어낸 소량 제작 작업입니다." },
  ],
  hat: [
    { title: "말총 갓 복원", period: "2021-2026", description: "말총의 밀도와 대나무 골격을 맞춰 전통 갓 형태를 복원한 작업입니다." },
    { title: "빛 투과 직조 샘플", period: "2025", description: "조명 협업을 위해 직조 간격과 그림자 패턴을 실험한 샘플입니다." },
    { title: "소형 갓 오브제", period: "2024", description: "전시 공간에 맞춰 갓의 원형 구조를 축소한 장식 오브제입니다." },
  ],
  painting: [
    { title: "호작도 민화 연작", period: "2020-2026", description: "벽사와 길상 상징을 중심으로 호랑이와 까치 이미지를 그린 연작입니다." },
    { title: "흑백 선묘 원화", period: "2025", description: "모바일 케이스와 패턴 상품화를 위해 먹선 밀도를 정리한 원화 작업입니다." },
    { title: "민화 색채 팔레트", period: "2024", description: "전통 채색을 현대 인쇄물에 적용하기 위한 색상 기준표입니다." },
  ],
  wood: [
    { title: "생활 목물 제작", period: "2017-2026", description: "나무결을 살린 소반, 함, 작은 수납 오브젝트 제작 작업입니다." },
    { title: "손조각 스피커 그릴", period: "2025", description: "소리 통과와 촉감을 함께 고려한 스피커 전면 조각 샘플입니다." },
    { title: "목재 마감 실험", period: "2024", description: "오일, 왁스, 천연 안료를 활용한 표면 마감 연구입니다." },
  ],
  gayageum: [
    { title: "전통 현악기 제작", period: "2016-2026", description: "오동나무 울림통과 현 장력을 조율해 악기의 소리를 완성합니다." },
    { title: "현 울림 샘플링", period: "2025", description: "창작자용 사운드 키트 제작을 위한 주법별 음원 기록 작업입니다." },
    { title: "전시용 공명 구조", period: "2024", description: "악기의 울림 구조를 설치 작품으로 확장한 실험 작업입니다." },
  ],
  goldfoil: [
    { title: "전통 의복 금박", period: "2018-2026", description: "풀과 금박을 활용해 직물 위에 문양을 올리는 대표 작업입니다." },
    { title: "금박 패턴 원단", period: "2025", description: "현대 코트와 스카프에 적용할 반복 문양 원단 테스트입니다." },
    { title: "별자리 문양 재해석", period: "2024", description: "전통 장식 문양을 현대 그래픽으로 재구성한 협업 샘플입니다." },
  ],
  embroidery: [
    { title: "길상 문양 자수", period: "2019-2026", description: "비단 위에 장수와 복을 상징하는 문양을 쌓아 올리는 작업입니다." },
    { title: "보관함 패브릭 장식", period: "2025", description: "금박 보관함 내부 패브릭과 장식선을 구성한 협업 작업입니다." },
    { title: "색실 방향 연구", period: "2024", description: "빛의 방향에 따라 달라지는 자수 표면감을 정리한 샘플입니다." },
  ],
};

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

function getStoredJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function getUsers() {
  return getStoredJson(usersKey, {});
}

function saveUsers(users) {
  localStorage.setItem(usersKey, JSON.stringify(users));
}

function getStockMap() {
  return getStoredJson(stockKey, {});
}

function saveStockMap(stocks) {
  localStorage.setItem(stockKey, JSON.stringify(stocks));
}

function getProductStock(id) {
  const product = products[id];
  if (!product) return 0;
  const stocks = getStockMap();
  return Number.isInteger(stocks[id]) ? stocks[id] : product.stock;
}

function setProductStock(id, stock) {
  const stocks = getStockMap();
  stocks[id] = Math.max(0, stock);
  saveStockMap(stocks);
}

function getProductView(id) {
  const product = products[id] || products["tiger-jacket"];
  return { ...product, stock: getProductStock(id) };
}

function ensureDemoUsers() {
  const users = getUsers();
  let changed = false;
  if (!users.consumer) {
    users.consumer = {
      id: "consumer",
      password: "1234",
      name: "소비자 회원",
      role: "consumer",
      creatorStatus: "none",
      purchases: [...defaultPurchases],
      savedProjects: [],
      proposals: [],
    };
    changed = true;
  }
  if (!users.creator) {
    users.creator = {
      id: "creator",
      password: "1234",
      name: "승인된 창작자",
      role: "creator",
      creatorStatus: "approved",
      purchases: [],
      savedProjects: [...defaultSavedProjects],
      proposals: [...defaultProposals],
    };
    changed = true;
  }
  Object.values(users).forEach((user) => {
    if (!Array.isArray(user.purchases)) {
      user.purchases = [];
      changed = true;
    }
    if (!Array.isArray(user.savedProjects)) {
      user.savedProjects = [];
      changed = true;
    }
    if (!Array.isArray(user.proposals)) {
      user.proposals = [];
      changed = true;
    }
    user.proposals = user.proposals.map((proposal, index) => {
      if (proposal.id && proposal.concept !== undefined) return proposal;
      changed = true;
      const artisanEntry = Object.entries(artisans).find(([, artisan]) => artisan.name === proposal.artisan);
      const artisanId = artisanEntry?.[0] || "hat";
      return {
        id: proposal.id || `${user.id || "user"}-proposal-${index + 1}`,
        title: proposal.title || "협업 기획안",
        concept: proposal.concept || "기존 제안 내용을 바탕으로 콘셉트를 보완합니다.",
        product: proposal.product || "상품 형태와 구성품을 구체화합니다.",
        craft: proposal.craft || "선택한 장인의 기술이 프로젝트의 핵심 품질을 결정합니다.",
        quantity: proposal.quantity || "50",
        price: proposal.price || "168,000원",
        schedule: proposal.schedule || "6주",
        portfolio: proposal.portfolio || "",
        sales: proposal.sales || "프로젝트 갤러리와 한정 판매 흐름으로 소개합니다.",
        status: proposal.status || "검토 중",
        artisan: proposal.artisan || artisans[artisanId].name,
        artisanId,
        productId: proposal.productId || getRelatedProductId(proposal.artisan || artisans[artisanId].name),
      };
    });
  });
  if (changed) saveUsers(users);
  return users;
}

function getCurrentAccount() {
  const auth = getAuth();
  if (!auth) return null;
  const users = ensureDemoUsers();
  return auth.id && users[auth.id] ? users[auth.id] : auth;
}

function setAuth(auth) {
  localStorage.setItem(stateKey, JSON.stringify(auth));
  renderAuthActions();
}

function clearAuth() {
  localStorage.removeItem(stateKey);
  renderAuthActions();
  if (document.querySelector("[data-page='mypage']")) {
    window.location.href = "/";
  }
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
          <p class="eyebrow">Login</p>
          <h2 id="authTitle">아이디로 로그인</h2>
          <p class="auth-message">${message || "구매와 협업 제안은 로그인 후 이용할 수 있습니다."}</p>
          <form class="auth-form" id="authLoginForm">
            <label>
              아이디
              <input required type="text" name="id" autocomplete="username" placeholder="consumer 또는 가입한 아이디">
            </label>
            <label>
              패스워드
              <input required type="password" name="password" autocomplete="current-password" placeholder="데모 계정은 1234">
            </label>
            <button class="primary-button" type="submit">로그인</button>
            <p class="auth-error" id="authError" aria-live="polite"></p>
          </form>
          <div class="auth-switch">
            <a href="/signup.html">회원가입 페이지로 이동</a>
            <button type="button" data-login-approved>승인된 창작자 데모 로그인</button>
          </div>
        </section>
      </div>
    `
  );

  ensureDemoUsers();
  document.querySelector("[data-auth-close]")?.addEventListener("click", closeAuthModal);
  document.querySelector(".auth-modal-backdrop")?.addEventListener("click", (event) => {
    if (event.target.classList.contains("auth-modal-backdrop")) closeAuthModal();
  });
  document.querySelector("#authLoginForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const id = String(formData.get("id") || "").trim();
    const password = String(formData.get("password") || "");
    const user = ensureDemoUsers()[id];
    const error = document.querySelector("#authError");
    if (!user || user.password !== password) {
      if (error) error.textContent = "아이디 또는 패스워드가 올바르지 않습니다.";
      return;
    }
    setAuth({ id: user.id, name: user.name, role: user.role, creatorStatus: user.creatorStatus });
    closeAuthModal();
    showNotice(`${user.name}님, 로그인되었습니다.`);
  });
  document.querySelector("[data-login-approved]")?.addEventListener("click", () => {
    const user = ensureDemoUsers().creator;
    setAuth({ id: user.id, name: user.name, role: user.role, creatorStatus: user.creatorStatus });
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
  const auth = getCurrentAccount();
  if (auth) return true;
  openAuthModal("login", message);
  return false;
}

function requireApprovedCreator() {
  const auth = getCurrentAccount();
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
  const auth = getCurrentAccount();
  document.querySelectorAll("[data-auth-actions]").forEach((target) => {
    target.innerHTML = auth
      ? `
        <a class="secondary-button slim" href="/mypage.html">마이페이지</a>
        <button class="header-cta slim" type="button" data-logout>로그아웃</button>
      `
      : `
        <button class="secondary-button slim" type="button" data-open-login>로그인</button>
        <a class="header-cta slim" href="/signup.html">회원가입</a>
      `;
  });
  document.querySelectorAll("[data-open-login]").forEach((button) => {
    button.addEventListener("click", () => openAuthModal("login"));
  });
  document.querySelectorAll("[data-open-signup]").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = "/signup.html";
    });
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

  const requestedId = getParam("id") || "tiger-jacket";
  const id = products[requestedId] ? requestedId : "tiger-jacket";
  const product = getProductView(id);
  const auth = getCurrentAccount();
  const savedProjects = auth?.savedProjects || [];
  const isSaved = savedProjects.includes(id);
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
        <button class="primary-button" type="button" data-buy="${id}" ${product.stock < 1 ? "disabled" : ""}>${product.stock < 1 ? "품절" : "구매하기"}</button>
        <a class="secondary-button" href="/#gallery">다른 프로젝트 보기</a>
        <button class="heart-button ${isSaved ? "is-saved" : ""}" type="button" data-save-project="${id}" aria-label="관심 프로젝트 ${isSaved ? "해제" : "추가"}">${isSaved ? "♥" : "♡"}</button>
      </div>
    </article>
  `;

  document.querySelector("[data-buy]")?.addEventListener("click", () => {
    if (!requireLogin("구매하기는 로그인 후 이용할 수 있습니다.")) return;
    const currentStock = getProductStock(id);
    if (currentStock < 1) {
      showNotice("현재 재고가 모두 소진되었습니다.");
      renderProductPage();
      return;
    }
    const auth = getCurrentAccount();
    const users = ensureDemoUsers();
    if (auth?.id && users[auth.id]) {
      const purchases = users[auth.id].purchases || [];
      purchases.unshift(id);
      users[auth.id].purchases = purchases;
      saveUsers(users);
    }
    setProductStock(id, currentStock - 1);
    showNotice(`${product.title} 구매가 접수되었습니다. 마이페이지의 구매 품목에 반영됩니다.`);
    renderProductPage();
  });

  document.querySelector("[data-save-project]")?.addEventListener("click", () => {
    if (!requireLogin("관심 프로젝트는 로그인 후 추가할 수 있습니다.")) return;
    const auth = getCurrentAccount();
    const users = ensureDemoUsers();
    if (!auth?.id || !users[auth.id]) return;
    const saved = users[auth.id].savedProjects || [];
    if (saved.includes(id)) {
      users[auth.id].savedProjects = saved.filter((item) => item !== id);
      showNotice("관심 프로젝트에서 삭제되었습니다.");
    } else {
      users[auth.id].savedProjects = [id, ...saved];
      showNotice("관심 프로젝트에 추가되었습니다.");
    }
    saveUsers(users);
    renderProductPage();
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
              <a class="secondary-button" href="/artisan-works.html?artisan=${id}">능력 보기</a>
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

  const id = getParam("artisan") || "hat";
  const artisan = artisans[id] || artisans.hat;
  const works = artisanWorkLists[id] || artisanWorkLists.hat;
  document.title = `${artisan.name} 작업 목록 | Heritage Collaboration Lab`;
  grid.innerHTML = `
    <article class="work-profile">
      <img src="${artisan.image}" alt="${artisan.name} 작업 모습">
      <div>
        <p class="eyebrow">${artisan.region}</p>
        <h2>${artisan.name} · ${artisan.field}</h2>
        <p>${artisan.original}</p>
        <a class="primary-button compact" href="/proposal.html?artisan=${id}">이 장인에게 제안</a>
      </div>
    </article>
    <div class="work-list">
      ${works
        .map(
          (work) => `
            <article class="work-item">
              <p>${work.period}</p>
              <h3>${work.title}</h3>
              <span>${work.description}</span>
            </article>
          `
        )
        .join("")}
    </div>
  `;
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
    const auth = getCurrentAccount();
    const users = ensureDemoUsers();
    const formData = new FormData(form);
    if (auth?.id && users[auth.id]) {
      users[auth.id].proposals = users[auth.id].proposals || [];
      users[auth.id].proposals.unshift({
        id: `proposal-${Date.now()}`,
        title: String(formData.get("title") || "새 협업 기획안"),
        concept: String(formData.get("concept") || ""),
        product: String(formData.get("product") || ""),
        craft: String(formData.get("craft") || ""),
        quantity: String(formData.get("quantity") || ""),
        price: String(formData.get("price") || ""),
        schedule: String(formData.get("schedule") || ""),
        portfolio: String(formData.get("portfolio") || ""),
        sales: String(formData.get("sales") || ""),
        status: "검토 중",
        artisan: artisan.name,
        artisanId: getParam("artisan") || "hat",
        productId: getRelatedProductId(artisan.name),
      });
      saveUsers(users);
    }
    result.textContent = `${artisan.name} 장인에게 기획안이 전달되었습니다. 검토 후 프로젝트 대화방이 열립니다.`;
    form.querySelector("button").textContent = "제출 완료";
  });
}

function getRelatedProductId(artisanName) {
  const found = Object.entries(products).find(([, product]) => product.artisan.includes(artisanName));
  return found?.[0] || "hat-shade";
}

function renderSignupPage() {
  const form = document.querySelector("#signupForm");
  if (!form) return;

  ensureDemoUsers();
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const id = String(formData.get("id") || "").trim();
    const password = String(formData.get("password") || "");
    const passwordConfirm = String(formData.get("passwordConfirm") || "");
    const name = String(formData.get("name") || "").trim();
    const role = String(formData.get("role") || "consumer");
    const result = document.querySelector("#signupResult");
    const users = ensureDemoUsers();

    if (users[id]) {
      if (result) result.textContent = "이미 사용 중인 아이디입니다.";
      return;
    }
    if (password !== passwordConfirm) {
      if (result) result.textContent = "패스워드 확인이 일치하지 않습니다.";
      return;
    }

    users[id] = {
      id,
      password,
      name,
      role,
      creatorStatus: role === "creator" ? "pending" : "none",
      purchases: [],
      savedProjects: [],
      proposals: [],
    };
    saveUsers(users);
    window.alert("가입이 완료되었습니다. 아이디와 패스워드로 로그인해주세요.");
    window.location.href = "/";
  });
}

function findCurrentProposal(proposalId) {
  const auth = getCurrentAccount();
  if (!auth?.id) return null;
  const users = ensureDemoUsers();
  const proposals = users[auth.id]?.proposals || [];
  const index = proposals.findIndex((proposal) => proposal.id === proposalId);
  if (index < 0) return null;
  return { auth, users, proposals, index, proposal: proposals[index] };
}

function renderProposalEditPage() {
  const form = document.querySelector("#proposalEditForm");
  const selected = document.querySelector("#editProposalSummary");
  const result = document.querySelector("#proposalEditResult");
  if (!form || !selected) return;

  const auth = getCurrentAccount();
  if (!auth) {
    window.location.href = "/";
    return;
  }

  const found = findCurrentProposal(getParam("id"));
  if (!found) {
    selected.innerHTML = `
      <div>
        <p class="eyebrow">Not Found</p>
        <h2>기획안을 찾을 수 없습니다</h2>
        <p>이미 취소되었거나 현재 계정에 저장된 기획안이 아닙니다.</p>
        <a class="primary-button compact" href="/mypage.html">마이페이지로 돌아가기</a>
      </div>
    `;
    form.remove();
    return;
  }

  const { proposal } = found;
  const artisan = artisans[proposal.artisanId] || Object.values(artisans).find((item) => item.name === proposal.artisan) || artisans.hat;
  selected.innerHTML = `
    <img src="${artisan.image}" alt="${artisan.name} ${artisan.field}">
    <div>
      <p>수정 중인 기획안</p>
      <h2>${proposal.title}</h2>
      <strong>${artisan.name} · ${artisan.field}</strong>
      <span>${proposal.status}</span>
      <p>${artisan.summary}</p>
    </div>
  `;

  form.elements.title.value = proposal.title || "";
  form.elements.concept.value = proposal.concept || "";
  form.elements.product.value = proposal.product || "";
  form.elements.craft.value = proposal.craft || "";
  form.elements.quantity.value = proposal.quantity || "";
  form.elements.price.value = proposal.price || "";
  form.elements.schedule.value = proposal.schedule || "";
  form.elements.portfolio.value = proposal.portfolio || "";
  form.elements.sales.value = proposal.sales || "";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const current = findCurrentProposal(getParam("id"));
    if (!current) return;
    const formData = new FormData(form);
    current.proposals[current.index] = {
      ...current.proposal,
      title: String(formData.get("title") || ""),
      concept: String(formData.get("concept") || ""),
      product: String(formData.get("product") || ""),
      craft: String(formData.get("craft") || ""),
      quantity: String(formData.get("quantity") || ""),
      price: String(formData.get("price") || ""),
      schedule: String(formData.get("schedule") || ""),
      portfolio: String(formData.get("portfolio") || ""),
      sales: String(formData.get("sales") || ""),
      status: "수정됨",
    };
    current.users[current.auth.id].proposals = current.proposals;
    saveUsers(current.users);
    if (result) result.textContent = "수정된 기획안이 저장되었습니다.";
    showNotice("기획안이 수정되었습니다.");
  });

  document.querySelector("[data-delete-proposal]")?.addEventListener("click", () => {
    const current = findCurrentProposal(getParam("id"));
    if (!current) return;
    current.proposals.splice(current.index, 1);
    current.users[current.auth.id].proposals = current.proposals;
    saveUsers(current.users);
    showNotice("기획안이 취소되었습니다.");
    window.location.href = "/mypage.html";
  });
}

function renderMyPage() {
  const content = document.querySelector("#mypageContent");
  if (!content) return;

  const auth = getCurrentAccount();
  if (!auth) {
    window.location.href = "/";
    return;
  }

  const purchases = auth.purchases || defaultPurchases;
  const savedProjects = auth.savedProjects || defaultSavedProjects;
  const proposals = auth.proposals || (auth.role === "creator" ? defaultProposals : []);
  const purchaseItems = purchases
    .map((id) => ({ id, product: products[id] }))
    .filter(({ product }) => product)
    .map(({ id, product }) => `<li><a href="/product.html?id=${id}"><strong>${product.title}</strong><span>${product.price} · 배송 준비 중</span></a></li>`)
    .join("");
  const proposalItems = proposals
    .map((proposal) => `<li><a href="/proposal-edit.html?id=${encodeURIComponent(proposal.id)}"><strong>${proposal.title}</strong><span>${proposal.artisan} 장인 · ${proposal.status}</span></a></li>`)
    .join("");
  const savedItems = savedProjects
    .map((id) => ({ id, product: products[id] }))
    .filter(({ product }) => product)
    .map(({ id, product }) => `<li><a href="/product.html?id=${id}"><strong>${product.title}</strong><span>관심 프로젝트</span></a></li>`)
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
      <ul class="activity-list scrollable-list">${purchaseItems || "<li><span>아직 구매한 품목이 없습니다.</span></li>"}</ul>
    </article>
    ${
      auth.role === "creator"
        ? `<article class="mypage-card">
            <p class="eyebrow">Proposals</p>
            <h2>기획안 제안 목록</h2>
            <ul class="activity-list scrollable-list">${proposalItems || "<li><span>아직 제안한 기획안이 없습니다.</span></li>"}</ul>
          </article>`
        : ""
    }
    <article class="mypage-card">
      <p class="eyebrow">Saved</p>
      <h2>관심 프로젝트</h2>
      <ul class="activity-list scrollable-list">${savedItems || "<li><span>아직 관심 프로젝트가 없습니다.</span></li>"}</ul>
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
renderProposalEditPage();
renderSignupPage();
renderMyPage();
