const products = {
  "najeon-phone-case": {
    title: "나전 폰 케이스",
    category: "패션",
    categorySlug: "fashion",
    image: "/assets/master-najeon-phone-case.png",
    price: "89,000원",
    artisan: "이형만 나전장",
    artisanKey: "najeon",
    creator: "황진용 모바일 액세서리 디자이너",
    creatorKey: "huang-jinyong",
    stock: 42,
    total: 100,
    description:
      "칠흑 같은 블랙 배경 위에 자개의 영롱한 광택을 얹은 폰 케이스입니다. 나전칠기의 깊은 반짝임을 일상에서 가장 자주 손에 드는 오브젝트로 옮겼습니다.",
  },
  "nakhwa-device-case": {
    title: "낙화장 디바이스 케이스",
    category: "패션",
    categorySlug: "fashion",
    image: "/assets/master-nakhwa-device-case.png",
    price: "96,000원",
    artisan: "김영조 낙화장",
    artisanKey: "nakhwa",
    creator: "김병규 굿즈 디자이너",
    creatorKey: "kim-byungkyu",
    stock: 28,
    total: 70,
    description:
      "뜨거운 인두로 새긴 산수화의 깊이감과 가죽의 질감을 결합한 디바이스 케이스입니다. 손으로 태워 만든 선의 농담이 제품마다 다른 표정을 만듭니다.",
  },
  "dancheong-bookmark": {
    title: "단청 책갈피",
    category: "리빙",
    categorySlug: "living",
    image: "/assets/master-dancheong-bookmark.png",
    price: "32,000원",
    artisan: "유병순 단청장",
    artisanKey: "dancheong",
    creator: "㈜경희문구",
    creatorKey: "kyunghee-stationery",
    stock: 86,
    total: 150,
    description:
      "오방색의 화려함과 민화 호랑이의 강렬한 에너지를 작은 책갈피에 담았습니다. 책 사이에서 단청의 색과 상징이 선명하게 드러나는 소장형 문구입니다.",
  },
  "maedeup-keyring": {
    title: "전통 매듭 키링",
    category: "패션",
    categorySlug: "fashion",
    image: "/assets/master-maedeup-keyring.png",
    price: "45,000원",
    artisan: "김혜순 매듭장",
    artisanKey: "maedeup",
    creator: "신정안 굿즈 디자이너",
    creatorKey: "shin-jeongan",
    stock: 64,
    total: 120,
    description:
      "기하학적인 엮임과 현대적인 미니멀리즘을 조화시킨 키링입니다. 전통 매듭의 구조미를 가방과 열쇠에 가볍게 걸 수 있는 형태로 풀었습니다.",
  },
  "goldfoil-coat": {
    title: "금박 코트",
    category: "패션",
    categorySlug: "fashion",
    image: "/assets/master-goldfoil-coat.png",
    price: "1,290,000원",
    artisan: "김기호 금박장",
    artisanKey: "goldfoil",
    creator: "이승준 디자이너",
    creatorKey: "lee-seungjun",
    stock: 7,
    total: 24,
    description:
      "곤룡포를 연상하게 하는 붉은빛 코트 위에 금박 문양을 입힌 한정 컬렉션입니다. 전통 권위의 상징을 현대적인 실루엣과 표면감으로 재해석했습니다.",
  },
  "dyeing-blind": {
    title: "염색장 블라인드",
    category: "리빙",
    categorySlug: "living",
    image: "/assets/master-dyeing-blind.png",
    price: "260,000원",
    artisan: "정관채 염색장",
    artisanKey: "dyeing",
    creator: "박찬종 인테리어 디자이너",
    creatorKey: "park-chanjong",
    stock: 16,
    total: 45,
    description:
      "창문을 가렸음에도 운치 있는 자연을 보는 듯한 느낌을 주는 블라인드입니다. 염색장의 색과 번짐을 실내 빛의 흐름에 맞춰 재구성했습니다.",
  },
  "embroidery-denim-jacket": {
    title: "자수 청자켓",
    category: "패션",
    categorySlug: "fashion",
    image: "/assets/master-embroidery-denim.png",
    price: "248,000원",
    artisan: "김영이 자수장",
    artisanKey: "embroidery",
    creator: "성준 디자이너",
    creatorKey: "seongjun",
    stock: 21,
    total: 60,
    description:
      "청자켓 위에 용맹한 한반도의 호랑이를 수놓은 웨어러블 작품입니다. 자수의 밀도와 실의 방향이 데님의 거친 질감 위에서 입체적으로 살아납니다.",
  },
};

const inProgressProductIds = new Set([
  "nakhwa-device-case",
  "maedeup-keyring",
  "dyeing-blind",
]);

const creators = {
  "huang-jinyong": {
    name: "황진용",
    role: "모바일 액세서리 디자이너",
    image: null,
    summary: "일상에서 가장 자주 만지는 디바이스 표면을 통해 한국 전통 미감을 일상으로 옮기는 모바일 액세서리 디자이너입니다.",
  },
  "kim-byungkyu": {
    name: "김병규",
    role: "굿즈 디자이너",
    image: null,
    summary: "수공예 텍스처와 산업 디자인의 균형을 다루며, 가죽과 케이스 류의 굿즈에 전통 회화 언어를 입히는 작업을 합니다.",
  },
  "kyunghee-stationery": {
    name: "㈜경희문구",
    role: "문구 브랜드",
    image: null,
    summary: "오랜 문구 제조 경험을 바탕으로 전통 문양과 색채를 책갈피·노트·필기구로 풀어내는 문구 전문 협업사입니다.",
  },
  "shin-jeongan": {
    name: "신정안",
    role: "굿즈 디자이너",
    image: null,
    summary: "전통 매듭의 구조와 미니멀한 일상 소품을 결합하는 굿즈 디자이너로, 기하학적 형태와 색실 조합을 연구합니다.",
  },
  "lee-seungjun": {
    name: "이승준",
    role: "패션 디자이너",
    image: "/assets/master-creator-lee-seungjun.jpeg",
    summary: "한국 전통 의복의 권위와 형태를 현대 패션 실루엣으로 재해석하며, 표면 장식과 원단의 결합을 다루는 패션 디자이너입니다.",
  },
  "park-chanjong": {
    name: "박찬종",
    role: "인테리어 디자이너",
    image: "/assets/master-creator-park-chanjong.jpeg",
    summary: "공간의 빛과 패브릭의 흐름을 다루는 인테리어 디자이너로, 천연 염색의 색감을 실내 분위기로 옮기는 작업을 진행합니다.",
  },
  "seongjun": {
    name: "성준",
    role: "데님웨어 디자이너",
    image: null,
    summary: "데님 위에 서사가 있는 자수와 그래픽을 얹는 웨어 디자이너로, 한국적 상징을 거리감 있는 캐주얼웨어로 풀어냅니다.",
  },
};

const artisans = {
  najeon: {
    name: "이형만",
    field: "나전장 · 나전칠기",
    region: "경남 통영",
    image: "/assets/master-najeon-artisan.png",
    summary: "칠흑 같은 옻칠 바탕과 자개의 영롱한 광택을 다루며 모바일 액세서리, 오브제 협업에 적합합니다.",
    original: "자개를 얇게 오려 붙이고 옻칠과 연마를 반복해 깊은 광택과 문양을 완성하는 나전칠기 작업을 이어왔습니다.",
  },
  nakhwa: {
    name: "김영조",
    field: "낙화장 · 낙화",
    region: "충북 보은",
    image: "/assets/master-nakhwa-artisan.png",
    summary: "뜨거운 인두로 산수와 문양을 새기는 장인으로 가죽, 목재, 디바이스 케이스 협업에 강점이 있습니다.",
    original: "불에 달군 인두의 온도와 압력을 조절해 종이, 나무, 가죽 위에 농담 있는 그림을 새겨왔습니다.",
  },
  dancheong: {
    name: "유병순",
    field: "단청장 · 단청",
    region: "전북 전주",
    image: "/assets/master-dancheong-artisan.png",
    summary: "오방색과 상징 문양을 기반으로 문구, 인테리어 포인트, 그래픽 굿즈 협업에 어울립니다.",
    original: "건축 장식의 색과 문양을 복원하고 배치하며, 전통 색채의 균형과 상징성을 다루는 단청 작업을 지속합니다.",
  },
  maedeup: {
    name: "김혜순",
    field: "매듭장 · 전통 매듭",
    region: "서울",
    image: "/assets/master-maedeup-artisan.png",
    summary: "기하학적인 엮임과 섬세한 장식성을 바탕으로 키링, 주얼리, 패션 소품 협업에 적합합니다.",
    original: "실의 장력과 매듭의 순서를 조절해 장식 매듭, 노리개, 생활 장신구를 만드는 작업을 이어왔습니다.",
  },
  goldfoil: {
    name: "김기호",
    field: "금박장 · 금박질",
    region: "서울",
    image: "/assets/master-goldfoil-artisan.png",
    summary: "직물 위에 금박 문양을 올리는 장인으로 프리미엄 패션과 무대 의상 협업에 강점이 있습니다.",
    original: "풀과 금박을 이용해 문양을 옷감 위에 입히며, 전통 의복과 장식천의 화려한 표면을 만들어왔습니다.",
  },
  dyeing: {
    name: "정관채",
    field: "염색장 · 천연 염색",
    region: "전남 나주",
    image: "/assets/master-dyeing-artisan.png",
    summary: "자연의 색과 번짐을 다루며 블라인드, 패브릭 패널, 홈 텍스타일 협업에 잘 맞습니다.",
    original: "천연 염료의 농도, 온도, 시간에 따라 달라지는 색을 조절해 직물에 깊은 색감과 질감을 입혀왔습니다.",
  },
  embroidery: {
    name: "김영이",
    field: "자수장 · 자수",
    region: "부산",
    image: "/assets/master-embroidery-artisan.jpeg",
    summary: "실의 방향과 밀도로 형상을 쌓는 장인으로 데님웨어, 패브릭 아트, 패션 그래픽 협업에 적합합니다.",
    original: "천 위에 상징 문양과 동물 이미지를 수놓으며, 실의 두께와 방향으로 입체감을 만드는 자수 작업을 이어왔습니다.",
  },
};

const stateKey = "heritageAuthState";
const usersKey = "heritageUsers";
const stockKey = "heritageProductStocks";
const defaultPurchases = ["maedeup-keyring", "dancheong-bookmark"];
const defaultProposals = [
  {
    id: "demo-proposal-najeon",
    title: "나전 스마트 액세서리 캡슐",
    concept: "자개의 광택을 모바일 액세서리 표면 경험으로 확장",
    product: "나전 폰 케이스와 카드 지갑을 함께 구성한 100개 한정 컬렉션",
    craft: "이형만 장인의 자개 재단과 옻칠 표면 마감이 핵심입니다.",
    quantity: "100",
    price: "89,000원",
    schedule: "7주",
    portfolio: "",
    sales: "블랙 배경과 자개 광택을 강조한 촬영 콘텐츠로 예약 판매를 진행합니다.",
    status: "검토 중",
    artisan: "이형만",
    artisanId: "najeon",
    productId: "najeon-phone-case",
  },
  {
    id: "demo-proposal-dyeing",
    title: "자연 빛 염색 블라인드",
    concept: "천연 염색의 번짐을 실내 빛과 만나는 패브릭 제품으로 전환",
    product: "염색장 블라인드 45점과 설치 가이드 카드",
    craft: "정관채 염색장의 색 농도 조절과 직물 번짐 표현이 필요합니다.",
    quantity: "45",
    price: "260,000원",
    schedule: "5주",
    portfolio: "",
    sales: "공간별 빛 연출 이미지를 중심으로 프로젝트 갤러리와 연동 판매합니다.",
    status: "초안 보완 요청",
    artisan: "정관채",
    artisanId: "dyeing",
    productId: "dyeing-blind",
  },
];
const defaultSavedProjects = ["goldfoil-coat", "embroidery-denim-jacket"];

const artisanWorkLists = {
  najeon: [
    { title: "자개 문양 재단", period: "대표 작업", description: "얇은 자개를 문양에 맞춰 오리고 검은 옻칠 바탕 위에 배치하는 기초 작업입니다." },
    { title: "옻칠 표면 연마", period: "마감 공정", description: "칠과 연마를 반복해 자개가 표면 아래에서 은은하게 빛나도록 광택을 조정합니다." },
    { title: "생활 소품 나전 적용", period: "협업 연구", description: "폰 케이스, 카드 지갑, 소형 오브제처럼 손에 닿는 제품에 나전의 깊이를 옮깁니다." },
  ],
  nakhwa: [
    { title: "산수 낙화 원화", period: "대표 작업", description: "인두의 온도와 속도로 선의 농담을 만들며 산수화의 깊이를 새깁니다." },
    { title: "가죽 표면 낙화 테스트", period: "협업 연구", description: "가죽 결 위에 태운 선이 자연스럽게 스며들도록 압력과 시간을 조절합니다." },
    { title: "디바이스 케이스 패턴화", period: "제품 전환", description: "낙화의 풍경을 작은 케이스 면적 안에 들어오도록 압축해 배치합니다." },
  ],
  dancheong: [
    { title: "오방색 문양 배치", period: "대표 작업", description: "전통 색채의 대비와 반복을 활용해 단청 특유의 리듬을 만듭니다." },
    { title: "민화 호랑이 그래픽 결합", period: "협업 연구", description: "단청 색과 호랑이 상징을 작은 문구 제품에 맞게 재구성합니다." },
    { title: "소장형 책갈피 샘플", period: "제품 전환", description: "얇은 책갈피 위에서도 색이 선명하게 보이도록 문양 밀도와 여백을 조정합니다." },
  ],
  maedeup: [
    { title: "전통 매듭 구조 제작", period: "대표 작업", description: "매듭의 순서와 장력을 맞춰 기하학적인 형태와 균형을 만듭니다." },
    { title: "미니멀 키링 샘플", period: "협업 연구", description: "전통 매듭의 장식성을 일상 소품 크기로 줄여 휴대성을 높입니다." },
    { title: "색실 조합 테스트", period: "제품 전환", description: "현대적인 가방, 열쇠, 디바이스 액세서리에 어울리는 색 조합을 실험합니다." },
  ],
  goldfoil: [
    { title: "전통 의복 금박", period: "대표 작업", description: "풀과 금박을 활용해 직물 위에 문양을 올리는 대표 작업입니다." },
    { title: "붉은 코트 금박 배치", period: "협업 연구", description: "곤룡포를 연상시키는 붉은 원단에 금박 문양이 과하지 않도록 균형을 잡습니다." },
    { title: "프리미엄 패션 표면 마감", period: "제품 전환", description: "착용성과 장식성을 함께 고려해 금박의 위치, 크기, 반복 간격을 조정합니다." },
  ],
  dyeing: [
    { title: "천연 염색 색감 조율", period: "대표 작업", description: "염료의 농도와 시간에 따라 달라지는 직물의 색 깊이를 조절합니다." },
    { title: "창가 빛 투과 테스트", period: "협업 연구", description: "블라인드가 빛을 받을 때 자연 풍경처럼 보이도록 색 번짐과 밀도를 실험합니다." },
    { title: "공간 패브릭 샘플", period: "제품 전환", description: "실내 분위기와 채광 조건에 맞는 블라인드 원단 구성을 만듭니다." },
  ],
  embroidery: [
    { title: "호랑이 자수 원형", period: "대표 작업", description: "실의 방향과 색을 겹쳐 호랑이의 용맹한 표정과 움직임을 만듭니다." },
    { title: "데님 표면 자수 테스트", period: "협업 연구", description: "거친 데님 질감 위에서도 실의 입체감이 살아나도록 밀도와 방향을 조절합니다." },
    { title: "웨어러블 자수 배치", period: "제품 전환", description: "자수 이미지가 착용자의 움직임과 자연스럽게 어울리도록 등판과 소매 위치를 설계합니다." },
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
  const product = products[id] || Object.values(products)[0];
  const inProgress = inProgressProductIds.has(id);
  return {
    ...product,
    inProgress,
    stock: inProgress ? product.total : getProductStock(id),
  };
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
  const carousel = document.querySelector("#projectCarousel");
  if (carousel) {
    carousel.innerHTML = Object.entries(products)
      .map(([id, product]) => {
        const inProgress = inProgressProductIds.has(id);
        return `
          <a class="asset-card ${inProgress ? "is-in-progress" : ""}" href="/product.html?id=${id}" data-category="${product.categorySlug}">
            <div class="asset-card-media">
              <img src="${product.image}" alt="${product.title}">
              ${inProgress ? '<div class="progress-overlay"><span>현재 진행중</span></div>' : ""}
            </div>
            <div>
              <p>${product.category} · 한정 ${product.total}개</p>
              <h3>${product.title}</h3>
              <span>${product.description}</span>
            </div>
          </a>
        `;
      })
      .join("");
  }

  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".asset-card");

  const applyFilter = (selected) => {
    filters.forEach((item) => item.classList.toggle("active", item.dataset.filter === selected));
    cards.forEach((card) => {
      const isVisible = selected === "all" || card.dataset.category === selected;
      card.classList.toggle("is-hidden", !isVisible);
    });
    carousel?.scrollTo({ left: 0, behavior: "smooth" });
  };

  filters.forEach((filter) => {
    filter.addEventListener("click", () => applyFilter(filter.dataset.filter));
  });

  const initialFilter = new URLSearchParams(window.location.search).get("filter");
  if (initialFilter && document.querySelector(`.filter[data-filter="${initialFilter}"]`)) {
    applyFilter(initialFilter);
  }

  document.querySelector("[data-carousel-prev]")?.addEventListener("click", () => {
    carousel?.scrollBy({ left: -380, behavior: "smooth" });
  });
  document.querySelector("[data-carousel-next]")?.addEventListener("click", () => {
    carousel?.scrollBy({ left: 380, behavior: "smooth" });
  });
}

function setupHeroProjectTicker() {
  const ticket = document.querySelector("[data-hero-project]");
  if (!ticket) return;

  const title = ticket.querySelector("[data-hero-project-title]");
  const summary = ticket.querySelector("[data-hero-project-summary]");
  const label = ticket.querySelector("[data-hero-project-label]");
  const heroArt = document.querySelector(".hero-art");
  const frontImage = document.querySelector(".hero-card-front");
  const backImage = document.querySelector(".hero-card-back");
  const projectIds = Object.keys(products);
  let index = 0;
  let currentId = projectIds[0];
  let nextId = projectIds[1];

  const applyTicket = (id) => {
    const project = products[id];
    if (!project) return;
    ticket.href = `/product.html?id=${id}`;
    if (label) label.textContent = `${project.category} · ${project.total}개 한정`;
    if (title) title.textContent = project.title;
    if (summary) summary.textContent = `${project.artisan} × ${project.creator}`;
  };

  const applyImage = (image, id) => {
    const project = products[id];
    if (!project || !image) return;
    image.src = project.image;
    image.alt = project.title;
  };

  const queueNextImage = () => {
    nextId = projectIds[(index + 1) % projectIds.length];
    applyImage(backImage, nextId);
  };

  const updateProject = () => {
    if (!heroArt || !frontImage || !backImage) return;
    currentId = nextId;
    applyTicket(currentId);
    ticket.classList.add("is-switching");
    heroArt.classList.add("is-swapping");
    window.setTimeout(() => {
      applyImage(frontImage, currentId);
      index = (index + 1) % projectIds.length;
      queueNextImage();
      heroArt.classList.remove("is-swapping");
      ticket.classList.remove("is-switching");
    }, 980);
  };

  applyImage(frontImage, currentId);
  applyTicket(currentId);
  queueNextImage();
  window.setInterval(updateProject, 10000);
}

function setupHomeHeader() {
  const header = document.querySelector(".site-header");
  const videoHero = document.querySelector(".video-hero");
  if (!header) return;

  const setHeaderTone = (tone) => {
    header.classList.toggle("header-video", tone === "video");
    header.classList.toggle("header-hanji-warm", tone === "warm");
    header.classList.toggle("header-hanji-white", tone === "white");
  };

  const getStaticTone = () => {
    if (document.querySelector("[data-page='mypage'], [data-page='product'], .detail-page")) return "warm";
    return "white";
  };

  if (!videoHero) {
    setHeaderTone(getStaticTone());
    return;
  }

  const sections = [
    { selector: ".video-hero", tone: "video" },
    { selector: ".hero", tone: "white" },
    { selector: "#journey", tone: "warm" },
    { selector: "#artisan-month", tone: "white" },
    { selector: "#gallery", tone: "white" },
  ];

  const updateHeader = () => {
    const threshold = Math.max(120, videoHero.offsetHeight - 92);
    header.classList.toggle("is-solid", window.scrollY > threshold);
    const probeY = header.offsetHeight + 18;
    const visibleSection = document.elementFromPoint(window.innerWidth / 2, probeY)?.closest(".video-hero, .hero, #journey, #artisan-month, #gallery");
    const visibleMatch = visibleSection
      ? sections.find((section) => visibleSection.matches(section.selector))
      : null;
    const current = visibleMatch || sections.reduce((active, section) => {
      const element = document.querySelector(section.selector);
      if (!element) return active;
      return element.getBoundingClientRect().top <= probeY ? section : active;
    }, sections[0]);
    setHeaderTone(current.tone);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
  window.addEventListener("resize", updateHeader);
  window.addEventListener("load", () => window.setTimeout(updateHeader, 120));
  window.addEventListener("hashchange", () => window.setTimeout(updateHeader, 120));
  window.setTimeout(updateHeader, 260);
}

function setupScrollMotion() {
  const motionTargets = [
    ".hero-copy",
    ".hero-art",
    ".video-hero-copy",
    ".journey .section-heading",
    ".flow-list li",
    ".limited-sale .section-heading",
    ".artisan-feature-copy",
    ".artisan-work-card",
    ".artisan-feature-note",
    ".lot-card",
    ".certificate",
    ".gallery .section-heading",
    ".filter-bar",
    ".asset-card",
    ".page-hero",
    ".artisan-card",
    ".work-profile",
    ".work-item",
    ".product-image",
    ".product-copy",
    ".mypage-card",
    ".signup-copy",
    ".signup-form",
    ".selected-artisan",
    ".deep-proposal-form",
  ];

  const items = document.querySelectorAll(motionTargets.join(","));
  items.forEach((item, index) => {
    item.classList.add("motion-item");
    item.style.setProperty("--motion-order", String(index % 6));
  });

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    { threshold: 0.12, rootMargin: "-4% 0px -10% 0px" }
  );

  items.forEach((item) => observer.observe(item));

  const floatTargets = document.querySelectorAll(".product-image, .certificate, .work-profile");
  floatTargets.forEach((target) => target.classList.add("motion-float"));

  const updateFloat = () => {
    const viewportHeight = window.innerHeight || 1;
    document.documentElement.style.setProperty("--hero-float", String(Math.round(window.scrollY * -0.035)));
    floatTargets.forEach((target) => {
      const rect = target.getBoundingClientRect();
      const progress = (rect.top - viewportHeight / 2) / viewportHeight;
      target.style.setProperty("--scroll-shift", String(Math.round(progress * -14)));
    });
  };

  updateFloat();
  window.addEventListener("scroll", updateFloat, { passive: true });
  window.addEventListener("resize", updateFloat);
}

function renderProductPage() {
  const detail = document.querySelector("#productDetail");
  if (!detail) return;

  const requestedId = getParam("id") || Object.keys(products)[0];
  const id = products[requestedId] ? requestedId : Object.keys(products)[0];
  const product = getProductView(id);
  const auth = getCurrentAccount();
  const savedProjects = auth?.savedProjects || [];
  const isSaved = savedProjects.includes(id);
  const sold = product.total - product.stock;
  const stockPercent = Math.max(4, Math.round((product.stock / product.total) * 100));

  document.title = `${product.title} | 이음`;

  const buyButtonLabel = product.inProgress
    ? "진행중"
    : product.stock < 1
      ? "품절"
      : "구매하기";
  const buyButtonDisabled = product.inProgress || product.stock < 1;
  const relatedHref = `/?filter=${product.categorySlug}#gallery`;

  detail.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.title}">
    </div>
    <article class="product-copy">
      <p class="eyebrow">${product.category} · ${product.total}개 한정 판매${product.inProgress ? " · 현재 진행중" : ""}</p>
      <h1>${product.title}</h1>
      <p>${product.description}</p>
      <dl class="product-facts">
        <div><dt>판매가</dt><dd>${product.price}</dd></div>
        <div><dt>협업 장인</dt><dd>${product.artisan}</dd></div>
        <div><dt>협업 창작자</dt><dd>${product.creator}</dd></div>
        <div><dt>판매 현황</dt><dd>${product.inProgress ? "프로젝트 진행 중" : `${sold}개 판매 · ${product.stock}개 남음`}</dd></div>
      </dl>
      <div class="stock-meter">
        <label><span>남은 재고</span><span>${product.stock} / ${product.total}</span></label>
        <div class="meter-track"><div class="meter-fill" style="width: ${stockPercent}%"></div></div>
      </div>
      <p class="stock-note">${product.inProgress ? "현재 장인과 창작자가 함께 제작 중인 프로젝트입니다. 판매가 시작되면 알려드립니다." : "한정 수량이 모두 판매되면 같은 구성으로는 다시 제작하지 않습니다."}</p>
      <div class="product-actions">
        <button class="primary-button" type="button" ${buyButtonDisabled ? "disabled" : `data-buy="${id}"`}>${buyButtonLabel}</button>
        <a class="secondary-button" href="${relatedHref}">관련 프로젝트 보기</a>
        <button class="heart-button ${isSaved ? "is-saved" : ""}" type="button" data-save-project="${id}" aria-label="관심 프로젝트 ${isSaved ? "해제" : "추가"}">${isSaved ? "♥" : "♡"}</button>
      </div>
    </article>
  `;

  renderProductPeople(product);

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

function renderProductPeople(product) {
  const target = document.querySelector("#productPeople");
  if (!target) return;
  const artisan = artisans[product.artisanKey];
  const creator = creators[product.creatorKey];
  if (!artisan && !creator) {
    target.innerHTML = "";
    return;
  }
  const artisanCard = artisan
    ? `
      <a class="people-card people-artisan" href="/artisan-works.html?artisan=${product.artisanKey}" aria-label="${artisan.name} 장인 소개 페이지로 이동">
        <p class="eyebrow">Artisan</p>
        <div class="people-photo">
          <img src="${artisan.image}" alt="${artisan.name} ${artisan.field}">
        </div>
        <h3>${artisan.name}</h3>
        <strong>${artisan.field}</strong>
        <span class="people-region">${artisan.region}</span>
        <p>${artisan.original}</p>
      </a>
    `
    : "";
  const creatorPhoto = creator?.image
    ? `<img src="${creator.image}" alt="${creator.name} ${creator.role}">`
    : `<span class="people-photo-placeholder">${(creator?.name || "?").slice(0, 1)}</span>`;
  const creatorCard = creator
    ? `
      <article class="people-card people-creator">
        <p class="eyebrow">Creator</p>
        <div class="people-photo${creator.image ? "" : " is-placeholder"}">
          ${creatorPhoto}
        </div>
        <h3>${creator.name}</h3>
        <strong>${creator.role}</strong>
        <p>${creator.summary}</p>
      </article>
    `
    : "";
  target.innerHTML = `${artisanCard}${creatorCard}`;
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
              <a class="secondary-button" href="/artisan-works.html?artisan=${id}">작품 보기</a>
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

  const id = getParam("artisan") || Object.keys(artisans)[0];
  const artisan = artisans[id] || Object.values(artisans)[0];
  const works = artisanWorkLists[id] || artisanWorkLists[Object.keys(artisanWorkLists)[0]];
  document.title = `${artisan.name} 작업 목록 | 이음`;
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

  const artisanKey = getParam("artisan") || Object.keys(artisans)[0];
  const artisan = artisans[artisanKey] || Object.values(artisans)[0];
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
        artisanId: artisanKey,
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
  return found?.[0] || Object.keys(products)[0];
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
  const artisan = artisans[proposal.artisanId] || Object.values(artisans).find((item) => item.name === proposal.artisan) || Object.values(artisans)[0];
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

  const digitsOnly = (value) => String(value || "").replace(/[^\d]/g, "");
  form.elements.title.value = proposal.title || "";
  form.elements.concept.value = proposal.concept || "";
  form.elements.product.value = proposal.product || "";
  form.elements.craft.value = proposal.craft || "";
  form.elements.quantity.value = digitsOnly(proposal.quantity);
  form.elements.price.value = digitsOnly(proposal.price);
  form.elements.schedule.value = digitsOnly(proposal.schedule);
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

function setupNavIndicator() {
  const nav = document.querySelector(".site-header .nav");
  if (!nav) return;
  const links = Array.from(nav.querySelectorAll("a"));
  if (!links.length) return;

  let indicator = nav.querySelector(".nav-indicator");
  if (!indicator) {
    indicator = document.createElement("span");
    indicator.className = "nav-indicator";
    nav.appendChild(indicator);
  }

  const move = (link) => {
    if (!link) {
      indicator.style.opacity = "0";
      links.forEach((l) => l.classList.remove("is-active"));
      return;
    }
    links.forEach((l) => l.classList.toggle("is-active", l === link));
    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    indicator.style.transform = `translateX(${linkRect.left - navRect.left}px)`;
    indicator.style.width = `${linkRect.width}px`;
    indicator.style.opacity = "1";
  };

  const path = window.location.pathname;
  const isHome = path === "/" || path === "/index.html" || path === "";

  const computeActive = () => {
    if (isHome) {
      const cutoff = window.scrollY + window.innerHeight * 0.35;
      let candidate = null;
      for (const link of links) {
        const href = link.getAttribute("href") || "";
        const hashIdx = href.indexOf("#");
        if (hashIdx === -1) continue;
        const id = href.substring(hashIdx + 1);
        const el = id && document.getElementById(id);
        if (el && el.offsetTop <= cutoff) candidate = link;
      }
      return candidate;
    }
    const linkByLabel = (label) => links.find((l) => l.textContent.trim().includes(label));
    if (path.startsWith("/artisan-works") || path.startsWith("/artisans") || path.startsWith("/proposal")) {
      return linkByLabel("장인 소개");
    }
    if (path.startsWith("/product")) {
      return linkByLabel("프로젝트 갤러리");
    }
    return null;
  };

  let activeLink = computeActive();
  const reposition = () => move(activeLink);
  reposition();

  if (isHome) {
    window.addEventListener(
      "scroll",
      () => {
        activeLink = computeActive();
        reposition();
      },
      { passive: true }
    );
  }
  window.addEventListener("resize", reposition);
  window.addEventListener("load", reposition);

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => move(link));
  });
  nav.addEventListener("mouseleave", () => move(activeLink));
}

function setupProposalUnitInputs() {
  const forms = document.querySelectorAll("#deepProposalForm, #proposalEditForm");
  forms.forEach((form) => {
    form.querySelectorAll(".unit-input").forEach((wrapper) => {
      const input = wrapper.querySelector("input");
      if (!input) return;
      const update = () => wrapper.classList.toggle("has-value", Boolean(input.value));
      update();
      input.addEventListener("input", update);
    });

    const priceInput = form.querySelector('input[name="price"]');
    if (priceInput) {
      const formatPrice = () => {
        const digits = priceInput.value.replace(/[^\d]/g, "");
        priceInput.value = digits ? Number(digits).toLocaleString("ko-KR") : "";
      };
      formatPrice();
      priceInput.addEventListener("input", formatPrice);
    }
  });
}

renderAuthActions();
setupHomeHeader();
setupGallery();
setupHeroProjectTicker();
renderProductPage();
renderArtisansPage();
renderWorksPage();
renderProposalPage();
renderProposalEditPage();
renderSignupPage();
renderMyPage();
setupScrollMotion();
setupNavIndicator();
setupProposalUnitInputs();
