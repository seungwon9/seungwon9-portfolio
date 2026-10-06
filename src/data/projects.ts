import type { ProblemSolvingCase, Project, ProjectMedia } from "@/types/project";

const placeholderMedia = (
  id: string,
  title: string,
  type: ProjectMedia["type"] = "image",
): ProjectMedia => {
  if (type === "video") {
    return {
      id,
      type,
      title,
      description: "실제 동작 영상이 준비되면 이 영역에 추가합니다.",
      caption: "영상 자료 준비 중",
    };
  }

  if (type === "before-after") {
    return {
      id,
      type,
      title,
      before: { label: "Before", description: "기존 흐름 자료 준비 중" },
      after: { label: "After", description: "개선 흐름 자료 준비 중" },
      caption: "비교 자료 준비 중",
    };
  }

  return {
    id,
    type,
    title,
    alt: "프로젝트 시각 자료가 들어갈 자리",
    description: type === "diagram" || type === "mermaid" ? "구조도 자료 준비 중" : undefined,
    caption: "실제 화면 또는 구조도 준비 중",
  };
};

const placeholderCases = (slug: string): ProblemSolvingCase[] => [
  {
    id: `${slug}-case-01`,
    title: "문제 해결 사례 01",
    problem: { summary: "해결한 문제와 당시 맥락을 정리할 예정입니다." },
    decision: { summary: "선택지와 판단 근거를 정리할 예정입니다." },
    implementation: { summary: "직접 구현한 범위와 구조를 정리할 예정입니다." },
    evidenceResult: { summary: "검증 방법과 확인된 결과를 정리할 예정입니다." },
    media: [placeholderMedia(`${slug}-case-01-media`, "사례 01 구조도", "diagram")],
  },
  {
    id: `${slug}-case-02`,
    title: "문제 해결 사례 02",
    problem: { summary: "실제 사례 선정 후 내용을 추가할 예정입니다." },
    decision: { summary: "결정 과정과 트레이드오프를 추가할 예정입니다." },
    implementation: { summary: "구현 내용과 담당 범위를 추가할 예정입니다." },
    evidenceResult: { summary: "근거가 확인된 검증 내용만 추가할 예정입니다." },
    media: [placeholderMedia(`${slug}-case-02-media`, "사례 02 Before / After", "before-after")],
  },
  {
    id: `${slug}-case-03`,
    title: "문제 해결 사례 03",
    problem: { summary: "실제 사례 선정 후 내용을 추가할 예정입니다." },
    decision: { summary: "결정 과정과 판단 기준을 추가할 예정입니다." },
    implementation: { summary: "구현 흐름을 실제 화면과 함께 추가할 예정입니다." },
    evidenceResult: { summary: "검증 자료와 결과가 준비되면 추가할 예정입니다." },
    media: [placeholderMedia(`${slug}-case-03-media`, "사례 03 실제 화면")],
  },
];

export const projects: Project[] = [
  {
    slug: "manufacturing-erp",
    publicationStatus: "published",
    featuredOrder: 1,
    title: "제조업체 ERP",
    eyebrow: "Featured Project 01",
    shortDescription: "Excel로 분산 관리되던 제조 업무를 하나의 데이터 흐름과 시스템 구조로 정리한 프로젝트입니다.",
    overview: "실제 데크 제조업체의 Excel 기반 업무를 확인하고, 주문부터 납품까지 이어지는 흐름과 기준정보의 관계를 시스템 구조로 정리했습니다.",
    period: "내용 준비 중",
    role: "요구사항 확인 · 업무 구조 설계 · 개발",
    team: "현업 담당자와 업무 방식 및 요구사항 확인",
    users: "제조업체 대표 및 관리 담당자",
    projectStatus: "개발 진행 중",
    technologies: ["React", "TypeScript", "Electron"],
    keywords: ["업무 흐름", "시스템 구조", "데이터 관계"],
    context: [
      "주문, 생산, 자재, 재고, 납품 업무를 주로 Excel로 나누어 관리하고 있었습니다.",
      "각 업무를 독립된 화면으로 옮기기보다 주문 → 생산 → 자재 → 재고 → 납품으로 이어지는 전체 흐름을 먼저 정리했습니다.",
      "제품군, 제품규격, 자재, 제품별 자재구성처럼 여러 업무가 함께 참조하는 기준정보가 필요했습니다.",
    ],
    responsibilities: [
      "현업 담당자에게 기존 업무 방식과 필요한 정보를 확인했습니다.",
      "업무 흐름과 상위·하위 기준정보의 관계를 시스템 구조로 정리했습니다.",
      "기준정보 CRUD, 활성·비활성 관리, 데이터 정합성 검증 로직을 구현했습니다.",
    ],
    collaborationScope: [
      "제조업체 대표 및 관리 담당자와 현재 업무 방식과 요구사항을 확인하며 개발을 진행하고 있습니다.",
    ],
    problemSolvingCases: [
      {
        id: "manufacturing-erp-case-01",
        title: "흩어진 업무를 하나의 흐름으로 구조화",
        problem: {
          summary: "주문, 생산, 자재, 재고, 납품 정보가 Excel을 중심으로 나뉘어 있어 전체 업무를 하나의 흐름으로 보기 어려웠습니다.",
          details: [
            "업무 단계별 정보를 각각 확인해야 했습니다.",
            "화면 구현 전에 각 단계가 어떤 순서와 데이터로 연결되는지 정리가 필요했습니다.",
          ],
        },
        decision: {
          summary: "개별 기능 목록부터 만들지 않고 주문 → 생산 → 자재 → 재고 → 납품을 하나의 연결된 업무 흐름으로 정의했습니다.",
        },
        implementation: {
          summary: "현업 담당자에게 실제 처리 순서와 사용하는 정보를 확인하고, 단계별 기능과 데이터가 앞뒤 업무를 이어받을 수 있도록 구조를 정리했습니다.",
        },
        evidenceResult: {
          summary: "현재 시스템 구조와 기능 구분에 이 업무 흐름을 반영해 개발하고 있습니다. 실제 운영 성과나 정량 지표는 아직 확정하지 않았습니다.",
        },
        media: [
          {
            id: "manufacturing-erp-flow-before-after",
            type: "before-after",
            title: "Excel 기반 분산 관리에서 연결된 업무 흐름으로",
            placement: "decision",
            before: {
              label: "Before",
              description: "업무별 Excel을 각각 확인",
              items: ["주문 Excel", "생산 Excel", "자재 Excel", "재고 Excel", "납품 Excel"],
            },
            after: {
              label: "After",
              description: "하나의 순서로 연결된 ERP 업무 흐름",
              items: ["주문", "생산", "자재", "재고", "납품"],
            },
            caption: "업무별로 나뉜 정보를 주문부터 납품까지 이어지는 하나의 흐름으로 재구성했습니다.",
          },
        ],
      },
      {
        id: "manufacturing-erp-case-02",
        title: "출력물보다 기준정보를 먼저 설계",
        problem: {
          summary: "납품표, 인수증, 거래명세서 같은 출력 양식은 현장과 요구에 따라 달라질 수 있지만, 제품과 자재 정보는 여러 핵심 업무가 공통으로 사용합니다.",
        },
        decision: {
          summary: "변동성이 큰 출력물보다 여러 기능의 기반이 되는 기준정보를 먼저 안정적으로 관리하는 것이 우선이라고 판단했습니다.",
          details: [
            "기능 수를 빠르게 늘리는 것보다 공통 데이터의 기준을 먼저 세우는 방향을 선택했습니다.",
            "제품군 → 제품규격 → 제품별 자재구성 → 자재 관계를 기준으로 구현 순서를 정했습니다.",
          ],
        },
        implementation: {
          summary: "제품군, 제품규격, 자재, 제품별 자재구성의 CRUD와 활성·비활성 관리 기능을 먼저 구현했습니다.",
        },
        evidenceResult: {
          summary: "핵심 ERP 업무가 공통으로 참조할 기준정보 관리 기능을 구현했습니다. 출력물은 실제 요구가 구체화되는 순서에 맞춰 이후 확장할 영역으로 남겨 두었습니다.",
        },
        media: [
          {
            id: "manufacturing-erp-master-data-relationship",
            type: "diagram",
            title: "공통 기준정보 관계",
            placement: "implementation",
            alt: "제품군, 제품규격, 제품별 자재구성, 자재가 순서대로 연결된 기준정보 관계도",
            description: "여러 업무에서 공유하는 기준정보의 연결 관계",
            nodes: [
              { label: "제품군" },
              { label: "제품규격" },
              { label: "제품별 자재구성", tone: "decision" },
              { label: "자재" },
            ],
            caption: "출력 양식보다 먼저 구현한 공통 기준정보의 관계입니다.",
          },
        ],
      },
      {
        id: "manufacturing-erp-case-03",
        title: "CRUD에 업무 규칙을 반영",
        problem: {
          summary: "상위 기준정보를 바로 비활성화하면, 이를 참조하는 활성 상태의 하위 데이터와 상태가 맞지 않을 수 있습니다.",
          details: [
            "예를 들어 활성 제품규격이 남아 있는 상태에서 제품군을 비활성화하면 데이터 관계가 어긋날 수 있습니다.",
          ],
        },
        decision: {
          summary: "단순히 수정 요청을 저장하지 않고, 상위·하위 관계와 활성 상태를 먼저 확인하는 검증 규칙을 적용했습니다.",
        },
        implementation: {
          summary: "상위 데이터의 비활성화 요청이 들어오면 활성 하위 데이터의 존재 여부를 검사하고, 존재할 경우 변경을 차단하도록 구현했습니다.",
        },
        evidenceResult: {
          summary: "활성 하위 데이터가 있는 상태에서는 상위 데이터를 바로 비활성화할 수 없으며, 하위 데이터를 먼저 정리한 뒤 변경할 수 있습니다.",
        },
        media: [
          {
            id: "manufacturing-erp-deactivation-flow",
            type: "diagram",
            title: "상위 기준정보 비활성화 검증 흐름",
            placement: "implementation",
            alt: "제품군 비활성화 요청에서 활성 제품규격을 확인하고 변경을 차단하거나 비활성화를 진행하는 흐름",
            description: "상하위 데이터 관계를 지키기 위한 decision flow",
            nodes: [
              { label: "제품군 비활성화 요청" },
              { label: "활성 제품규격 존재 여부 확인", tone: "decision" },
              { label: "존재하면 변경 차단", tone: "blocked" },
              { label: "하위 데이터 정리 후 변경", tone: "success" },
            ],
            caption: "CRUD 요청 전에 관계와 상태를 확인해 기준정보의 정합성을 유지합니다.",
          },
        ],
      },
    ],
    resultAndDemo: {
      summary: "프로젝트는 현재 개발 진행 중입니다. 기준정보 관리와 핵심 검증 로직을 구현했으며, 실제 운영 성과와 정량적인 개선 수치는 아직 확정하지 않았습니다.",
      evidence: [
        "제품군, 제품규격, 자재, 제품별 자재구성의 CRUD 및 활성·비활성 관리 기능 구현",
        "활성 하위 데이터가 존재할 때 상위 데이터의 비활성화를 차단하는 검증 로직 구현",
      ],
      media: [
        {
          id: "manufacturing-erp-result-master-data",
          type: "image",
          title: "기준정보 관리 화면",
          alt: "실제 ERP 기준정보 관리 화면이 들어갈 자리",
          caption: "추천 캡션: 제품군과 제품규격을 등록하고 활성 상태를 관리하는 기준정보 화면",
        },
        {
          id: "manufacturing-erp-result-validation",
          type: "image",
          title: "비활성화 검증 화면",
          alt: "활성 하위 데이터가 있을 때 비활성화를 차단하는 실제 화면이 들어갈 자리",
          caption: "추천 캡션: 활성 하위 데이터가 남아 있을 때 상위 기준정보 변경을 차단하는 검증 메시지",
        },
        {
          id: "manufacturing-erp-result-flow",
          type: "video",
          title: "기준정보 등록부터 검증까지의 동작",
          description: "실제 ERP의 기준정보 등록과 비활성화 검증 동작 영상이 들어갈 자리",
          caption: "추천 캡션: 기준정보를 등록하고 상하위 관계에 따라 상태를 검증하는 실제 동작",
        },
      ],
    },
    learnings: [
      "기능을 바로 개발하기보다 업무의 기준정보와 데이터 관계를 먼저 정리해야 이후 기능을 안정적으로 확장할 수 있다는 점을 배웠습니다.",
      "현업의 요구를 그대로 기능으로 옮기기보다 변경 가능성과 여러 업무에서의 공통성을 함께 보고 구현 우선순위를 정해야 한다는 점을 확인했습니다.",
    ],
    seo: {
      title: "제조업체 ERP",
      description: "Excel로 분산 관리되던 제조 업무를 하나의 데이터 흐름과 시스템 구조로 정리한 ERP 프로젝트입니다.",
    },
  },
  {
    slug: "cognitive-training-games",
    publicationStatus: "published",
    featuredOrder: 2,
    title: "인지훈련 게임 20종",
    eyebrow: "Featured Project 02",
    shortDescription: "기획을 게임 로직으로 구현하고 개발·검증 방식을 개선한 경험을 정리하는 프로젝트입니다.",
    overview: "게임 로직 구현과 개발·검증 방식의 개선 과정을 중심으로 실제 수행 내용을 정리할 예정입니다.",
    period: "내용 준비 중",
    role: "내용 준비 중",
    team: "내용 준비 중",
    users: "내용 준비 중",
    projectStatus: "내용 준비 중",
    technologies: [],
    keywords: ["게임 로직", "상호작용", "개발·검증"],
    context: ["프로젝트 배경과 기획 맥락을 정리할 예정입니다."],
    responsibilities: ["직접 담당한 게임과 개발 범위를 정리할 예정입니다."],
    collaborationScope: ["기획 및 검증 협업 범위를 정리할 예정입니다."],
    problemSolvingCases: placeholderCases("cognitive-training-games"),
    resultAndDemo: {
      summary: "확인 가능한 결과와 게임 화면을 준비 중입니다.",
      evidence: [],
      media: [
        placeholderMedia("cognitive-training-games-result-screen", "게임 화면"),
        placeholderMedia("cognitive-training-games-result-video", "플레이 흐름", "video"),
      ],
    },
    learnings: [],
    seo: {
      title: "인지훈련 게임 20종",
      description: "인지훈련 게임 프로젝트 사례를 정리하는 페이지입니다.",
    },
  },
  {
    slug: "catchvoca",
    publicationStatus: "published",
    featuredOrder: 3,
    title: "CatchVoca AI 단어장",
    eyebrow: "Featured Project 03",
    shortDescription: "서비스 흐름을 기획하고 AI 분석 Backend를 사용자 경험으로 연결한 경험을 정리하는 프로젝트입니다.",
    overview: "서비스 흐름의 기획부터 AI 분석 Backend와 사용자 경험의 연결까지 실제 수행 내용을 정리할 예정입니다.",
    period: "내용 준비 중",
    role: "내용 준비 중",
    team: "내용 준비 중",
    users: "내용 준비 중",
    projectStatus: "내용 준비 중",
    technologies: [],
    keywords: ["서비스 기획", "AI 분석", "사용자 경험"],
    context: ["서비스를 시작한 배경과 사용자 문제를 정리할 예정입니다."],
    responsibilities: ["직접 기획하고 구현한 범위를 정리할 예정입니다."],
    collaborationScope: ["팀 구성과 협업 범위를 정리할 예정입니다."],
    problemSolvingCases: placeholderCases("catchvoca"),
    resultAndDemo: {
      summary: "확인 가능한 결과와 서비스 화면을 준비 중입니다.",
      evidence: [],
      media: [
        placeholderMedia("catchvoca-result-screen", "서비스 화면"),
        placeholderMedia("catchvoca-result-video", "분석에서 학습까지의 흐름", "video"),
      ],
    },
    learnings: [],
    seo: {
      title: "CatchVoca AI 단어장",
      description: "CatchVoca AI 단어장 프로젝트 사례를 정리하는 페이지입니다.",
    },
  },
];
