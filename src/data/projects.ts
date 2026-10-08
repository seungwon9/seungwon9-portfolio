import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "manufacturing-erp",
    publicationStatus: "published",
    featuredOrder: 1,
    title: "제조업체 ERP",
    eyebrow: "주요 프로젝트 01",
    shortDescription: "여러 Excel 산출물로 관리되던 제조 업무를 하나의 시스템으로 통합한 데스크톱 ERP입니다.",
    homeDescription: "Excel로 분산 관리되던 현장·계약·생산·자재·재고·납품 업무를 거래명세까지 이어지는 하나의 흐름으로 구조화했습니다.",
    overview: [
      { text: "계약, 생산, 자재, 재고, 납품 자료를 확인하고 각 업무에서 생성되는 데이터와 다음 단계에서 사용하는 값을 정리했습니다. 상용 ERP 활용 가능성도 검토하고, 실제 제조 현장의 업무 규칙을 반영해 시스템을 설계하고 개발했습니다." },
    ],
    overviewMedia: {
      id: "manufacturing-erp-overview", type: "image", title: "제조업체 ERP 대시보드",
      src: "/projects/manufacturing-erp/images/erp-dashboard.webp",
      alt: "현장, 계약, 생산, 자재, 재고, 납품 모듈과 주요 현황이 보이는 제조업체 ERP 대시보드",
      width: 1920, height: 1040,
      caption: "계약부터 생산, 자재·재고, 납품과 거래명세까지 이어지는 핵심 업무를 한 시스템에서 관리합니다.",
    },
    cardMedia: {
      id: "manufacturing-erp-card", type: "image", title: "제조업체 ERP 대표 화면",
      src: "/projects/manufacturing-erp/images/erp-dashboard.webp", alt: "주요 업무 모듈이 보이는 제조업체 ERP 전체 화면",
      width: 1920, height: 1040,
    },
    period: "2026.07~2026.09",
    role: "업무 분석 · 데이터 설계 · ERP 개발",
    team: "현업 담당자와 요구사항 및 업무 방식 확인",
    users: "제조업체 대표 및 관리 담당자",
    domain: "제조업 / 업무 관리",
    projectStatus: "개발 완료",
    technologies: ["React", "TypeScript", "Electron", "SQLite"],
    keywords: ["업무 흐름", "데이터 관계", "재고·정산"],
    technologyScope: { direct: ["React", "TypeScript", "Electron", "SQLite"], collaboration: [] },
    developmentExperiences: [
      {
        id: "manufacturing-erp-experience-excel",
        title: "흩어진 Excel 산출물을 하나로 연결했다",
        blocks: [
          { type: "paragraph", content: { text: "계약, 생산, 자재, 재고, 납품마다 별도의 Excel 산출물이 있었습니다. 각 자료에서 어떤 값이 생성되고 다음 업무에서 어떤 데이터를 사용하는지 확인했습니다." } },
          { type: "paragraph", content: { text: "각 산출 데이터를 하나의 흐름으로 연결했습니다.", emphasis: "하나의 흐름으로 연결했습니다." } },
          { type: "paragraph", content: { text: "현장과 계약에서 생성된 정보를 다음 업무에서 다시 활용하도록 데이터 관계를 구성했습니다." } },
          {
            type: "media", layout: "stack", items: [{
              id: "manufacturing-erp-business-flow", type: "diagram", title: "제조 업무 데이터 흐름",
              alt: "현장, 계약 주문, 생산, 자재 재고, 납품, 거래명세로 이어지는 업무 흐름",
              nodes: [
                { label: "현장" }, { label: "계약 / 주문" }, { label: "생산" },
                { label: "자재 / 재고" }, { label: "납품" }, { label: "거래명세", tone: "success" },
              ],
            }],
          },
          { type: "paragraph", content: { text: "거래명세도 실제 납품실적을 기준으로 작성하도록 연결했습니다." } },
          {
            type: "media", layout: "sequence", items: [
              {
                id: "manufacturing-erp-contract-order", type: "image", title: "계약·주문 관리",
                src: "/projects/manufacturing-erp/images/erp-contract-order.webp",
                alt: "계약번호와 현장, 계약 수량을 확인하는 계약 주문 관리 화면", width: 1920, height: 765,
                caption: "01. 현장별 계약 품목과 수량",
              },
              {
                id: "manufacturing-erp-production", type: "image", title: "생산 관리",
                src: "/projects/manufacturing-erp/images/erp-production.webp",
                alt: "계약 수량을 기준으로 생산 실적과 진행률을 확인하는 생산 관리 화면", width: 1920, height: 789,
                caption: "02. 계약 수량을 기준으로 누적한 생산실적",
              },
              {
                id: "manufacturing-erp-delivery", type: "image", title: "납품 관리",
                src: "/projects/manufacturing-erp/images/erp-delivery.webp",
                alt: "현장별 납품 수량과 납품 상세를 확인하는 납품 관리 화면", width: 1920, height: 1029,
                caption: "03. 현장과 계약을 참조하는 납품실적",
              },
              {
                id: "manufacturing-erp-statement", type: "image", title: "거래명세 관리",
                src: "/projects/manufacturing-erp/images/erp-statement.webp",
                alt: "현장과 거래처, 납품 내역을 기준으로 거래명세를 조회하는 화면", width: 1920, height: 929,
                caption: "04. 실제 납품 데이터를 선택해 작성하는 거래명세",
              },
            ],
          },
        ],
      },
      {
        id: "manufacturing-erp-experience-material",
        title: "회사 구매자재와 현장지원 자재를 함께 관리했다",
        blocks: [
          { type: "paragraph", content: { text: "자재에는 회사에서 구매한 원자재와 계약 현장에서 직접 지원한 원자재가 함께 존재했습니다." } },
          { type: "paragraph", content: { text: "현장지원 자재는 생산 과정에서 다른 자재와 함께 사용되지만, 어느 현장에서 얼마를 지원했고 얼마를 사용했는지는 따로 관리해야 했습니다." } },
          { type: "paragraph", content: { text: "실제 자재 재고와 현장별 정산 정보를 분리해 관리했습니다.", emphasis: "실제 자재 재고와 현장별 정산 정보를 분리해 관리했습니다." } },
          { type: "points", items: ["- 회사 구매입고", "- 현장 지원입고", "- 생산 사용", "- 현장 반출"] },
          { type: "paragraph", content: { text: "현장지원 자재는 실제 납품량을 기준으로 이론사용량을 계산했습니다. 현장별 로스율을 반영해 인정사용량과 반환 대상량을 관리했습니다." } },
          { type: "inline-flow", label: "현장지원 자재 정산", items: ["지원 누적입고", "이론사용량", "로스율", "인정사용량", "반환 대상량"] },
          {
            type: "media", layout: "sequence", items: [
              {
                id: "manufacturing-erp-material-management", type: "image", title: "자재 이동 관리",
                src: "/projects/manufacturing-erp/images/erp-material-management.webp",
                alt: "회사 구매, 현장지원 입고, 생산 사용, 반출을 구분해 기록하는 자재 관리 화면",
                width: 1920, height: 1039, caption: "자재 출처와 사용 목적을 수불 이력으로 기록합니다.",
              },
              {
                id: "manufacturing-erp-material-settlement", type: "image", title: "현장지원 자재 정산",
                src: "/projects/manufacturing-erp/images/erp-material-settlement-highlight.png",
                alt: "현장별 누적 입고, 이론사용량, 로스율, 인정사용량, 반출 대상량이 빨간 테두리로 강조된 자재 정산 화면",
                width: 1549, height: 891, caption: "지원량, 인정사용량, 반환 대상량을 현장별로 확인합니다.",
              },
            ],
          },
        ],
      },
    ],
    problemSolvingTitle: "현장은 유도리가 필요했다",
    problemSolvingExperiences: [{
      id: "manufacturing-erp-field-rules",
      blocks: [
        { type: "subheading", title: "반제품" },
        { type: "paragraph", content: { text: "현장에서는 밴딩이나 절곡처럼 여러 제품에 공통으로 사용할 수 있는 가공 자재를 미리 만들어 사용했습니다." } },
        { type: "paragraph", content: { text: "반제품을 완제품 생산의 필수 구성품으로 연결했을 때는 반제품 재고가 없으면 완제품 생산까지 막혔습니다." } },
        { type: "paragraph", content: { text: "실제 생산 방식을 확인하고 필요한 경우 반제품을 선택해 사용하는 구조로 수정했습니다." } },
        { type: "inline-flow", items: ["원자재", "반제품", "완제품"] },
        { type: "points", items: ["반제품 사용 → 실제 사용량만 차감", "반제품 미사용 → 원자재에서 직접 생산"] },
        { type: "media", layout: "stack", items: [{
          id: "manufacturing-erp-production-wip", type: "image", title: "생산 실적 등록의 실제 사용 반제품",
          src: "/projects/manufacturing-erp/images/erp-production-wip-highlight.png",
          alt: "생산 실적 등록 중 실제 사용 반제품 선택 영역이 빨간 테두리로 강조된 화면",
          width: 1553, height: 889, displaySize: "medium",
          caption: "완제품 생산에 실제로 사용한 반제품과 수량을 선택하는 영역입니다.",
        }] },
        { type: "subheading", title: "데이터 무결성과 정합성" },
        { type: "paragraph", content: { text: "처음에는 계약부터 생산과 납품까지 정해진 업무 순서를 기준으로 ERP를 구성했습니다. 생산 계획에 따라 작업하고 생산실적을 등록한 뒤 납품으로 이어지는 흐름을 생각했습니다." } },
        { type: "paragraph", content: { text: "하지만 실제 현장에서는 계약 물량이 추가되거나 제품이 변경되고, 긴급한 생산과 납품이 먼저 진행되는 경우도 있었습니다." } },
        { type: "paragraph", content: { text: "실제 발생한 업무는 그대로 기록할 수 있게 하면서, 각 데이터의 연결과 변경 과정은 계속 확인할 수 있도록 구성했습니다.", emphasis: "실제 발생한 업무는 그대로 기록할 수 있게 하면서, 각 데이터의 연결과 변경 과정은 계속 확인할 수 있도록 구성했습니다." } },
        { type: "points", items: ["- 생산누계와 납품누계 별도 관리", "- 진행률과 차이를 대시보드에서 확인", "- 실제 업무에서 가능한 차이는 상태와 경고로 표시", "- 기존 데이터 활성·비활성으로 관리", "- 생산실적과 자재사용 -> 하나의 트랜잭션으로 처리"] },
        { type: "media", layout: "stack", items: [{
          id: "manufacturing-erp-dashboard-status", type: "image", title: "현장 진행현황과 확인 항목",
          src: "/projects/manufacturing-erp/images/erp-dashboard-status-highlight.jpg",
          alt: "생산과 납품 진행현황, 재고 확인, 미작성 납품과 지원자재 반환 예정 상태를 표시하는 ERP 대시보드",
          width: 1920, height: 1040, displaySize: "medium",
          caption: "생산·납품 진행현황과 확인이 필요한 항목을 대시보드에서 함께 확인합니다.",
        }] },
      ],
    }],
    seo: {
      title: "제조업체 ERP",
      description: "여러 Excel 산출물로 관리되던 제조 업무를 하나의 데이터 흐름으로 통합한 데스크톱 ERP 프로젝트입니다.",
    },
  },
  {
    slug: "catchvoca",
    publicationStatus: "published",
    featuredOrder: 3,
    title: "CatchVoca AI 단어장",
    eyebrow: "주요 프로젝트 03",
    shortDescription: "PDF·이미지, 텍스트, URL을 입력하면 AI 분석 결과를 단어장으로 생성하는 학습 서비스입니다.",
    homeDescription: "학습자료를 AI 기반 단어장으로 연결하는 서비스를 기획하고 Flutter 애플리케이션을 개발했습니다.",
    overview: [
      {
        text: "논문 등의 익숙하지 않은 영단어를 먼저 숙지하고 논문을 파악하고자 했습니다.",
      },
      {
        text: "이것을 시작으로 사용자의 다양한 입력을 통해 개인화된 단어장을 제공하는 서비스를 기획하였습니다.",
      },
      {
        text: "GPT API와 Flutter 기반으로 AI 단어장 CatchVoca를 개발하였습니다.",
        emphasis: "GPT API와 Flutter 기반으로 AI 단어장 CatchVoca를 개발하였습니다.",
      },
    ],
    overviewMedia: {
      id: "catchvoca-overview", type: "image", title: "CatchVoca PDF·이미지 입력 화면",
      src: "/projects/catchvoca/images/catchvoca-input-file.webp",
      alt: "PDF 또는 이미지 파일을 선택해 단어장 생성을 요청하는 CatchVoca 입력 화면",
      width: 1919, height: 953,
      caption: "메인 화면",
    },
    cardMedia: {
      id: "catchvoca-card", type: "image", title: "CatchVoca 대표 화면",
      src: "/projects/catchvoca/images/catchvoca-word-detail.webp",
      alt: "생성된 단어와 학습정보가 보이는 CatchVoca 단어장 화면", width: 1920, height: 950,
    },
    period: "2024.10~2025.02",
    role: "서비스 기획 및 개발",
    team: "Backend 개발자",
    users: "내용 준비 중",
    projectStatus: "운영 Backend 종료 · Demo 환경 사용",
    domain: "AI 기반 영어 학습 서비스",
    technologies: ["Flutter", "Dart", "Firebase Authentication", "REST API"],
    keywords: ["서비스 기획", "AI 분석 연동", "단어장 관리"],
    technologyScope: {
      direct: ["Flutter", "Dart", "Firebase Authentication", "REST API 연동"],
      collaboration: ["AI Analysis Backend", "Backend Data Storage"],
    },
    developmentExperiences: [
      {
        id: "catchvoca-experience-input",
        title: "다양한 학습자료를 입력할 수 있게 했다",
        blocks: [
          { type: "paragraph", content: { text: "사용자가 공부하고 있는 자료를 그대로 활용할 수 있도록 세 가지 입력 방식을 구성했습니다." } },
          { type: "points", items: ["PDF·이미지", "텍스트", "URL"] },
          { type: "paragraph", content: { text: "학습자료를 단어장 생성의 시작점으로 사용할 수 있도록 구성했습니다.", emphasis: "단어장 생성의 시작점으로 사용할 수 있도록 구성했습니다." } },
          {
            type: "media", items: [
              {
                id: "catchvoca-input-file", type: "image", title: "PDF·이미지 입력",
                src: "/projects/catchvoca/images/catchvoca-input-file.webp",
                alt: "PDF 또는 이미지 파일을 선택해 분석 요청할 수 있는 CatchVoca 입력 화면",
                width: 1919, height: 953, caption: "PDF·이미지 파일 선택",
              },
              {
                id: "catchvoca-input-text", type: "image", title: "텍스트 입력",
                src: "/projects/catchvoca/images/catchvoca-input-text.webp",
                alt: "텍스트와 언어를 선택해 분석 요청할 수 있는 CatchVoca 입력 화면",
                width: 1919, height: 953, caption: "텍스트와 분석 언어 입력",
              },
              {
                id: "catchvoca-input-url", type: "image", title: "URL 입력",
                src: "/projects/catchvoca/images/catchvoca-input-url.webp",
                alt: "웹페이지 URL과 언어를 선택해 분석 요청할 수 있는 CatchVoca 입력 화면",
                width: 1919, height: 952, caption: "웹페이지 URL 입력",
              },
            ],
          },
        ],
      },
      {
        id: "catchvoca-experience-analysis",
        title: "나만의 단어장을 위해",
        blocks: [
          { type: "paragraph", content: { text: "입력한 자료는 GPT API 기반 분석 기능을 통해 단어장 데이터로 생성합니다." } },
          { type: "paragraph", content: { text: "분석 결과를 애플리케이션에서 단어장으로 보여주고 이후 학습에 사용할 수 있도록 구성했습니다." } },
          { type: "inline-flow", items: ["학습자료", "AI 분석", "단어장 생성"] },
          {
            type: "paragraph",
            content: {
              text: "단어, 뜻, 예문, 번역, 동의어, 반의어까지 생성하고 이를 기본 형식과 상세 화면으로 나눠 볼 수 있었습니다."
              , emphasis: "단어, 뜻, 예문, 번역, 동의어, 반의어"
            }
          },
          {
            type: "paragraph",
            content: {
              text: "단어나 단어장을 이동, 삭제, 저장을 편집 기능으로 간편하게 수행해 나만의 단어장을 만들 수 있게 하였습니다."
              , emphasis: "이동, 삭제, 저장을 편집 기능으로"
            }
          },
          { type: "media", layout: "sequence", items: [
            {
              id: "catchvoca-wordbook-list", type: "image", title: "단어장 목록",
              src: "/projects/catchvoca/images/catchvoca-wordbook-list.webp",
              alt: "생성된 단어와 뜻을 간편하게 확인하고 단어장을 관리하는 CatchVoca 목록 화면",
              width: 1920, height: 950,
              caption: "생성된 단어와 뜻을 한눈에 확인하는 단어장 목록 화면",
            },
            {
              id: "catchvoca-word-detail", type: "image", title: "단어장 상세",
              src: "/projects/catchvoca/images/catchvoca-word-detail.webp",
              alt: "단어의 뜻, 품사, 예문, 번역, 동의어와 반의어를 확인하는 단어장 상세 화면",
              width: 1920, height: 950,
              caption: "예문과 번역, 동의어와 반의어까지 확인하는 단어 상세 화면",
            },
          ] },
        ],
      },
    ],
    seo: {
      title: "CatchVoca AI 단어장",
      description: "학습자료 입력부터 AI 분석, 단어장 생성과 학습·관리까지 이어지는 Flutter Frontend 프로젝트입니다.",
    },
  },
  {
    slug: "cognitive-training-games",
    publicationStatus: "published",
    featuredOrder: 2,
    title: "인지훈련 게임 20종",
    eyebrow: "주요 프로젝트 02",
    shortDescription: "노화지연 앱 프로젝트의 인지훈련 게임 20종을 개발하고 웹 기반 검증 환경을 구성했습니다.",
    homeDescription: "의료연구원의 기획을 인지훈련 게임 20종의 로직으로 구현하고, Unity 기반 검증 과정을 React + Phaser3 웹 방식으로 개선했습니다.",
    overview: [
      { text: "게임마다 훈련 방식과 사용자 입력, 정답 판정 방식이 달랐고, 각 게임은 여러 레벨로 구성됐습니다. 레벨이 올라가면서 반응속도와 요소 수뿐 아니라 새로운 조건과 규칙도 추가됐습니다." },
      { text: "기획서의 규칙을 분석하고 게임 로직을 직접 설계해 구현했습니다.", emphasis: "게임 로직을 직접 설계해 구현했습니다." },
    ],
    overviewMedia: {
      id: "cognitive-training-games-overview", type: "image", title: "Train Manager 플레이 화면",
      src: "/projects/cognitive-games/images/train-manager-main.webp",
      alt: "두 갈래 철도와 신호, 여러 열차가 보이는 Train Manager 플레이 화면",
      width: 784, height: 365,
      caption: "신호등을 조작해 기차를 움직이는 Train Manager 화면입니다.",
    },
    overviewGallery: [
      {
        id: "cognitive-training-games-overview-number-match", type: "image", title: "계산 짝짓기",
        src: "/projects/cognitive-games/images/number-match.webp",
        alt: "숫자와 계산식 가운데 값이 같은 항목을 찾는 계산 짝짓기 게임 화면",
        width: 787, height: 366, caption: "값을 비교해 같은 항목을 찾는 게임",
      },
      {
        id: "cognitive-training-games-overview-break-ice", type: "image", title: "얼음 깨기",
        src: "/projects/cognitive-games/images/break-ice.webp",
        alt: "제시된 색 순서에 맞춰 색깔 얼음을 선택하는 얼음 깨기 게임 화면",
        width: 784, height: 365, caption: "순서와 조건에 맞는 얼음 타일을 깨는 게임",
      },
    ],
    cardMedia: {
      id: "cognitive-training-games-card", type: "image", title: "Train Manager 대표 화면",
      src: "/projects/cognitive-games/images/train-manager-main.webp", alt: "Train Manager 인지훈련 게임 플레이 화면",
      width: 784, height: 365,
    },
    period: "2023.10~2024.04",
    role: "게임 로직 설계 및 구현 · 웹 실행 구조 개발",
    team: "의료연구원 · 디자이너",
    users: "내용 준비 중",
    domain: "디지털헬스케어 / 인지훈련",
    projectStatus: "내용 준비 중",
    technologies: ["React", "Next.js", "TypeScript", "Phaser3"],
    keywords: ["게임 로직", "레벨 규칙", "웹 기반 검증"],
    technologyScope: { direct: ["React", "Next.js", "TypeScript", "Phaser3"], collaboration: [] },
    developmentExperiences: [
      {
        id: "cognitive-experience-logic",
        title: "기획서를 게임 로직으로 풀어냈다",
        blocks: [
          { type: "paragraph", content: { text: "인지훈련 기획서를 토대로 실제 게임이 어떤 순서로 움직여야 하는지 정리했습니다." } },
          { type: "paragraph", content: { text: "게임 로직을 생각하고 흐름을 도식화했습니다.", emphasis: "게임 로직을 생각하고 흐름을 도식화했습니다." } },
          { type: "inline-flow", items: ["기획서 확인", "규칙 정리", "로직 도식화", "게임 구현", "반복 테스트"] },
          { type: "points", items: [
            "- 각 요소의 초기 상태와 동작", "- 객체 간 접촉·충돌과 상호작용", "- 탭·드래그·음성인식 등 게임별 입력 방식",
            "- 입력에 따른 성공·실패와 점수 판정", "- 레벨별 추가 규칙과 난이도",
          ] },
          {
            type: "paragraph",
            content: {
              text: "구현 후에는 직접 반복 플레이하며 난이도와 실제 수행 가능 여부를 확인했습니다. 기획과 실제 플레이에서 조정이 필요한 부분은 의료연구원과 논의해 게임 규칙에 반영했습니다.",
              emphasis: "난이도와 실제 수행 가능 여부를 확인했습니다.",
            },
          },
          { type: "subheading", title: "Remember Blocks 사례" },
          { type: "paragraph", content: { text: "Remember Blocks에서는 블록의 위치를 일정 시간 보여준 뒤 가리고, 사용자가 기억한 위치를 다시 선택하는 게임입니다." } },
          { type: "inline-flow", items: ["블록 배치", "일정 시간 후 가리기", "사용자 입력", "처음 배치와 비교", "정답 판정"] },
          {
            type: "media", layout: "sequence", items: [
              {
                id: "cognitive-remember-blocks-memory", type: "image", title: "Remember Blocks 기억 단계",
                src: "/projects/cognitive-games/images/remember-blocks-memory.webp",
                alt: "블록의 위치를 기억하는 Remember Blocks 화면", width: 787, height: 366,
                caption: "기억 단계 — 생성된 블록의 위치를 보여줍니다.",
              },
              {
                id: "cognitive-remember-blocks-rebuild", type: "image", title: "Remember Blocks 재구성 단계",
                src: "/projects/cognitive-games/images/remember-blocks-rebuild.webp",
                alt: "기억한 블록의 위치를 다시 구성하는 Remember Blocks 화면", width: 787, height: 366,
                caption: "재구성 단계 — 기억한 위치를 선택해 처음 배치와 비교합니다.",
              },
            ],
          },
        ],
      },
      {
        id: "cognitive-experience-levels",
        title: "20종 게임의 규칙과 레벨을 구현했다",
        blocks: [
          { type: "paragraph", content: { text: "20종의 게임마다 서로 다른 훈련 규칙과 입력·판정 방식을 구현했습니다.", emphasis: "서로 다른 훈련 규칙과 입력·판정 방식을 구현했습니다." } },
          { type: "paragraph", content: { text: "같은 게임 안에서도 레벨에 따라 필요한 로직과 조건을 적용했습니다.", emphasis: "레벨에 따라 필요한 로직과 조건을 적용했습니다." } },
          {
            type: "media", layout: "grid", items: [
              {
                id: "cognitive-hidden-number-level-01", type: "image", title: "01단계",
                src: "/projects/cognitive-games/images/hidden-number-level-01.jpg",
                alt: "한 자리 숫자에서 지정된 숫자 2를 찾는 숨은 숫자 찾기 01단계 화면",
                width: 788, height: 368,
                caption: "레벨 1) 한 자리 숫자에서 지정된 숫자를 찾는 기본 규칙",
              },
              {
                id: "cognitive-hidden-number-level-05", type: "image", title: "05단계",
                src: "/projects/cognitive-games/images/hidden-number-level-05.jpg",
                alt: "세 자리 수에서 십의 자리가 5인 숫자를 찾는 숨은 숫자 찾기 05단계 화면",
                width: 787, height: 364,
                caption: "레벨 2) 세 자리 수에서 특정 자릿값 조건을 판단",
              },
              {
                id: "cognitive-hidden-number-level-08", type: "image", title: "08단계",
                src: "/projects/cognitive-games/images/hidden-number-level-08.jpg",
                alt: "4로 시작하는 홀수를 찾는 숨은 숫자 찾기 08단계 화면",
                width: 785, height: 366,
                caption: "레벨 3) 시작 숫자와 홀수 조건을 함께 판단",
              },
            ],
          },
        ],
      },
    ],
    problemSolvingTitle: "빌드와 설치를 반복하던 검증 문제",
    problemSolvingExperiences: [{
      id: "cognitive-problem-validation",
      blocks: [
        { type: "paragraph", content: { text: "Unity 기반에서는 게임을 수정할 때마다 빌드한 파일을 전달하고 연구원이 다시 설치해 결과를 확인했습니다." } },
        { type: "inline-flow", label: "Unity 방식", items: ["개발", "빌드, 배포", "노화지연 앱 이식", "설치", "연구원 확인"] },
        { type: "paragraph", content: { text: "게임과 레벨이 늘어나면서 수정 내용을 확인하는 과정도 반복됐습니다." } },
        { type: "paragraph", content: { text: "연구원이 브라우저에서 바로 게임을 확인할 수 있도록 React + Phaser 기반 웹 실행 구조로 전환했습니다.", emphasis: "React + Phaser 기반 웹 실행 구조로 전환했습니다." } },
        { type: "inline-flow", label: "웹 방식", items: ["개발", "웹 반영", "바로 확인", "피드백"] },
        { type: "points", items: ["Phaser3 → 게임 실행과 로직", "React / Next.js → 게임 선택, 옵션, 결과 영역"] },
        { type: "media", layout: "stack", items: [{
          id: "cognitive-launcher-validation", type: "image", title: "웹 기반 게임 실행 환경",
          src: "/projects/cognitive-games/images/cognitive-launcher.webp",
          alt: "인지훈련 게임 목록과 레벨, 제한시간, 실행 옵션이 보이는 웹 게임 실행 화면",
          width: 908, height: 617,
          caption: "브라우저에서 게임, 레벨 등을 선택해 실행·확인하는 테스트 환경입니다.",
        }] },
      ],
    }],
    seo: {
      title: "인지훈련 게임 20종",
      description: "의료연구원의 기획을 인지훈련 게임 20종의 로직으로 구현하고 웹 기반 검증 환경을 구성한 프로젝트입니다.",
    },
  },
];
