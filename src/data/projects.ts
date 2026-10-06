import type { Project, ProjectMedia } from "@/types/project";

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

export const projects: Project[] = [
  {
    slug: "manufacturing-erp",
    publicationStatus: "published",
    featuredOrder: 1,
    title: "제조업체 ERP",
    eyebrow: "Featured Project 01",
    shortDescription: "Excel로 분산 관리되던 제조 업무를 하나의 데이터 흐름과 시스템 구조로 정리한 프로젝트입니다.",
    homeDescription: "Excel로 분산 관리되던 주문·생산·자재·재고·납품 업무를 하나의 데이터 흐름으로 구조화했습니다.",
    overview: "실제 데크 제조업체의 Excel 기반 업무를 확인하고, 주문부터 납품까지 이어지는 흐름과 기준정보의 관계를 시스템 구조로 정리했습니다.",
    overviewMedia: {
      id: "manufacturing-erp-overview",
      type: "image",
      title: "ERP 전체 업무 화면",
      alt: "제조업체 ERP의 전체 업무 화면이 들어갈 자리",
      caption: "실제 ERP 화면이 준비되면 주문부터 납품까지의 업무 구성을 보여주는 대표 화면을 배치합니다.",
    },
    cardMedia: {
      id: "manufacturing-erp-card",
      type: "image",
      title: "제조업체 ERP 대표 화면",
      alt: "주요 업무 모듈이 보이는 제조업체 ERP 전체 화면",
    },
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
    contributions: [
      {
        id: "manufacturing-erp-contribution-flow",
        title: "업무 분석 및 구조화",
        summary: "현업의 Excel 업무를 확인하고 주문 → 생산 → 자재 → 재고 → 납품으로 이어지는 전체 흐름과 기능 구조를 정리했습니다.",
        scope: "direct",
        media: [
          {
            id: "manufacturing-erp-contribution-flow-diagram",
            type: "diagram",
            title: "핵심 업무 흐름",
            alt: "주문, 생산, 자재, 재고, 납품이 연결되는 업무 흐름",
            nodes: [
              { label: "주문" },
              { label: "생산" },
              { label: "자재" },
              { label: "재고" },
              { label: "납품" },
            ],
            caption: "현업 확인을 바탕으로 정리한 ERP의 핵심 업무 흐름",
          },
        ],
      },
      {
        id: "manufacturing-erp-contribution-master-data",
        title: "기준정보·데이터 관계 설계 및 구현",
        summary: "제품군, 제품규격, 자재, 제품별 자재구성의 관계를 설계하고 CRUD와 활성·비활성 관리 기능을 구현했습니다.",
        scope: "direct",
        media: [
          {
            id: "manufacturing-erp-contribution-master-data-screen",
            type: "image",
            title: "기준정보 관리 화면",
            alt: "실제 기준정보 관리 화면이 들어갈 자리",
            caption: "실제 화면 준비 중 · 제품군과 제품규격의 관계 및 상태를 확인할 수 있는 화면 권장",
          },
        ],
      },
      {
        id: "manufacturing-erp-contribution-validation",
        title: "업무 규칙 및 데이터 정합성 검증 구현",
        summary: "상위·하위 데이터 관계와 활성 상태를 확인해 잘못된 상태 변경을 차단하는 검증 규칙을 구현했습니다.",
        scope: "direct",
        media: [
          {
            id: "manufacturing-erp-contribution-validation-flow",
            type: "diagram",
            title: "상태 변경 검증",
            alt: "상위 기준정보 변경 전 활성 하위 데이터를 검사하는 흐름",
            nodes: [
              { label: "상태 변경 요청" },
              { label: "활성 하위 데이터 확인", tone: "decision" },
              { label: "존재하면 차단", tone: "blocked" },
              { label: "정리 후 변경", tone: "success" },
            ],
            caption: "상하위 관계를 확인한 뒤 상태 변경을 허용하는 검증 흐름",
          },
        ],
      },
    ],
    technologyScope: {
      direct: ["React", "TypeScript", "Electron"],
      collaboration: [],
    },
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
    shortDescription: "20종의 인지훈련 게임을 구현하고, 반복되는 개발·검증 과정까지 웹 기반으로 개선했습니다.",
    homeDescription: "의료연구원의 기획을 인지훈련 게임 20종의 로직으로 구현하고, Unity 기반 검증 과정을 React + Phaser3 웹 방식으로 개선했습니다.",
    overview: "의료연구원의 기획서를 게임 로직으로 구현하고, 브라우저에서 수정 결과를 바로 확인할 수 있는 웹 개발 구조를 도입했습니다.",
    overviewMedia: {
      id: "cognitive-training-games-overview",
      type: "image",
      title: "Train Manager 플레이 화면",
      src: "/projects/cognitive-games/images/train-manager-main.webp",
      alt: "두 갈래 철도와 신호, 여러 열차가 보이는 Train Manager 플레이 화면",
      width: 784,
      height: 365,
      caption: "실시간 이동과 신호 판단이 필요한 Train Manager 플레이 화면입니다.",
    },
    cardMedia: {
      id: "cognitive-training-games-card",
      type: "image",
      title: "인지훈련 게임 대표 화면",
      src: "/projects/cognitive-games/images/train-manager-main.webp",
      alt: "두 갈래 철도와 신호, 여러 열차가 보이는 Train Manager 플레이 화면",
      width: 784,
      height: 365,
    },
    period: "내용 준비 중",
    role: "게임 로직 설계 및 Frontend/Game 개발",
    team: "의료연구원 · 디자이너",
    users: "내용 준비 중",
    projectStatus: "내용 준비 중",
    domain: "디지털헬스케어 / 인지훈련",
    technologies: ["React", "Next.js", "TypeScript", "Phaser3"],
    keywords: ["게임 로직", "웹 기반 검증", "재사용 구조"],
    context: [
      "디지털헬스케어 스타트업에서 의료연구원의 기획서를 바탕으로 인지훈련 콘텐츠를 개발했습니다.",
      "Unity 기반 개발에서 반복되던 전달·설치 과정을 줄이기 위해 React와 Phaser3를 활용한 웹 방식을 도입했습니다.",
    ],
    responsibilities: [
      "인지훈련 게임 20종의 규칙과 흐름을 분석하고 게임 로직을 설계·구현했습니다.",
      "React/Next.js와 Phaser3의 역할을 구분한 웹 게임 실행 구조를 구성했습니다.",
      "반복되는 게임 실행 구조와 UI를 재사용 가능한 형태로 정리했습니다.",
    ],
    collaborationScope: [
      "의료연구원과 게임 규칙 및 검증 내용을 확인하고, 디자이너와 화면 구성을 협업했습니다.",
    ],
    contributions: [
      {
        id: "cognitive-training-games-contribution-logic",
        title: "게임 로직 설계 및 구현",
        summary: "기획서를 분석하고 각 게임의 상태, 입력, 판정, 난이도 흐름을 실제 게임 로직으로 구현했습니다.",
        scope: "direct",
      },
      {
        id: "cognitive-training-games-contribution-structure",
        title: "웹 게임 개발 구조",
        summary: "React/Next.js와 Phaser3의 역할을 나눠 게임 진입부터 실행, 상태와 결과 전달까지 이어지는 구조를 구성했습니다.",
        scope: "direct",
      },
      {
        id: "cognitive-training-games-contribution-validation",
        title: "개발·검증 방식 개선",
        summary: "Unity 기반 전달·설치 방식에서 수정 결과를 브라우저로 바로 확인할 수 있는 웹 방식으로 전환했습니다.",
        scope: "direct",
      },
    ],
    technologyScope: {
      direct: ["React", "Next.js", "TypeScript", "Phaser3"],
      collaboration: [],
    },
    problemSolvingCases: [
      {
        id: "cognitive-training-games-case-01",
        title: "기획서를 실제 게임 로직으로 변환",
        problem: {
          summary: "의료연구원의 기획서는 게임의 목적과 규칙을 설명하지만, 프로그램에서 사용할 상태와 입력·판정 구조는 별도로 정의해야 했습니다.",
        },
        decision: {
          summary: "기획 의도를 바로 화면으로 옮기기보다 규칙과 조건을 나누고, 게임의 상태와 사용자 입력, 정답 판정 흐름을 먼저 정의했습니다.",
        },
        implementation: {
          summary: "정리한 흐름을 바탕으로 각 게임의 진행 상태, 입력 처리, 판정과 결과 전달 로직을 직접 설계·구현했습니다.",
        },
        evidenceResult: {
          summary: "이 과정을 반복해 인지훈련 게임 20종의 서로 다른 규칙과 흐름을 실제 동작하는 게임 로직으로 구현했습니다.",
        },
        media: [
          {
            id: "cognitive-training-games-plan-to-logic-flow",
            type: "diagram",
            placement: "decision",
            title: "기획서에서 게임 로직까지",
            alt: "기획서 이해부터 결과 전달까지 이어지는 게임 로직 설계 흐름",
            nodes: [
              { label: "기획서 이해" },
              { label: "규칙·조건 정리" },
              { label: "상태 정의", tone: "decision" },
              { label: "사용자 입력" },
              { label: "정답 판정", tone: "decision" },
              { label: "결과 전달", tone: "success" },
            ],
            caption: "기획 의도를 실행 가능한 상태와 입력·판정 구조로 구체화한 흐름입니다.",
          },
          {
            id: "cognitive-training-games-number-match",
            type: "image",
            title: "계산 짝짓기",
            src: "/projects/cognitive-games/images/number-match.webp",
            alt: "숫자와 계산식 가운데 값이 같은 항목을 찾는 계산 짝짓기 게임 화면",
            width: 787,
            height: 366,
            caption: "제시된 숫자와 계산 결과를 비교해 같은 값을 찾도록 구현한 인지 과제입니다.",
          },
          {
            id: "cognitive-training-games-break-ice",
            type: "image",
            title: "얼음 깨기",
            src: "/projects/cognitive-games/images/break-ice.webp",
            alt: "제시된 색 순서에 맞춰 색깔 얼음을 선택하는 얼음 깨기 게임 화면",
            width: 784,
            height: 365,
            caption: "제시된 순서를 확인하고 조건에 맞는 대상을 선택하도록 구현한 게임 화면입니다.",
          },
        ],
      },
      {
        id: "cognitive-training-games-case-02",
        title: "반복되는 Unity 검증 과정을 웹 기반으로 개선",
        problem: {
          summary: "초기 Unity 방식에서는 수정 내용을 확인할 때마다 Build, 파일 전달, 설치, 연구원 확인 과정을 반복해야 했습니다.",
        },
        decision: {
          summary: "수정 결과를 브라우저에서 바로 확인할 수 있도록 Phaser3를 새로 학습하고 React와 결합한 웹 개발 방식을 제안했습니다.",
        },
        implementation: {
          summary: "게임 실행은 Phaser3가 담당하고, React/Next.js가 게임 진입과 설정·상태·결과 전달을 담당하도록 웹 구조를 구성했습니다.",
        },
        evidenceResult: {
          summary: "이후에는 수정 내용을 웹에 반영한 뒤 의료연구원이 브라우저에서 확인하고 피드백할 수 있는 방식으로 검증 흐름을 바꿨습니다.",
        },
        media: [
          {
            id: "cognitive-training-games-validation-before-after",
            type: "before-after",
            title: "게임 수정 결과 확인 방식 개선",
            before: {
              label: "Before",
              description: "Unity 기반 파일 전달과 설치를 거치는 확인 과정",
              items: ["개발", "Build", "파일 전달", "설치", "연구원 확인"],
            },
            after: {
              label: "After",
              description: "브라우저에서 수정 결과를 바로 확인하는 과정",
              items: ["개발", "웹 반영", "바로 확인", "피드백"],
            },
            caption: "확인되지 않은 단축 수치 대신 실제로 변경한 검증 절차만 표시했습니다.",
          },
          {
            id: "cognitive-training-games-launcher",
            type: "image",
            title: "웹 기반 게임 실행 환경",
            src: "/projects/cognitive-games/images/cognitive-launcher.webp",
            alt: "인지훈련 게임 목록과 레벨, 제한시간, 실행 옵션이 보이는 웹 게임 실행 화면",
            width: 908,
            height: 617,
            caption: "게임과 옵션을 선택하고 브라우저에서 바로 실행·확인할 수 있도록 구성한 개발 및 검증 환경입니다.",
          },
        ],
      },
      {
        id: "cognitive-training-games-case-03",
        title: "서로 다른 20개 게임을 하나의 실행 구조에서 관리",
        problem: {
          summary: "게임마다 규칙과 상호작용은 달랐지만, 진입과 설정 전달, 실행, 상태와 결과 처리처럼 반복되는 구조도 함께 존재했습니다.",
        },
        decision: {
          summary: "React/Next.js는 외부 흐름과 상태 전달을, Phaser3는 Scene과 입력, Timer, Tween, Physics, 게임 규칙과 판정을 담당하도록 역할을 구분했습니다.",
        },
        implementation: {
          summary: "공통 GameLoader를 중심으로 게임 진입과 옵션 전달, Phaser Scene 실행, 결과 반환이 이어지도록 구성하고 반복되는 실행 구조와 UI를 재사용했습니다.",
        },
        evidenceResult: {
          summary: "같은 실행 구조 안에서 서로 다른 인지 과제를 구현했으며, 대표적으로 Train Manager, Remember Blocks, Touch Animal Cards가 있습니다.",
        },
        media: [
          {
            id: "cognitive-training-games-runtime-architecture",
            type: "diagram",
            title: "React와 Phaser3의 실행 구조",
            placement: "implementation",
            alt: "Route와 Options에서 외부 앱 결과 전달까지 이어지는 웹 게임 실행 구조",
            nodes: [
              { label: "Route / Options" },
              { label: "GameLoader" },
              { label: "Phaser Scene", tone: "decision" },
              { label: "Input / Game Logic" },
              { label: "State / Result", tone: "decision" },
              { label: "React / External App", tone: "success" },
            ],
            caption: "웹 애플리케이션 흐름과 실제 게임 실행 영역의 역할을 나눈 구조입니다.",
          },
          {
            id: "cognitive-training-games-examples",
            type: "diagram",
            layout: "cards",
            title: "대표 게임 로직 비교",
            alt: "Train Manager, Remember Blocks, Touch Animal Cards의 게임 로직 비교",
            nodes: [
              { label: "Train Manager", description: "이동·신호·충돌 등 실시간 게임 로직" },
              { label: "Remember Blocks", description: "기억 단계 → 재구성 → 정답 비교" },
              { label: "Touch Animal Cards", description: "조건에 따라 반응 여부를 판단하는 인지 과제" },
            ],
            caption: "게임별 세부 규칙은 다르지만 공통 실행 구조 안에서 동작하도록 구성했습니다.",
          },
          {
            id: "cognitive-training-games-train-manager",
            type: "image",
            title: "Train Manager",
            src: "/projects/cognitive-games/images/train-manager-main.webp",
            alt: "두 갈래 철도와 신호, 여러 열차가 보이는 Train Manager 플레이 화면",
            width: 784,
            height: 365,
            caption: "이동·신호·충돌 조건을 실시간으로 처리하는 대표 게임 화면입니다.",
          },
          {
            id: "cognitive-training-games-remember-blocks",
            type: "before-after",
            title: "Remember Blocks 진행 단계",
            before: {
              label: "기억 단계",
              src: "/projects/cognitive-games/images/remember-blocks-memory.webp",
              description: "블록의 위치를 기억하는 단계",
            },
            after: {
              label: "재구성 단계",
              src: "/projects/cognitive-games/images/remember-blocks-rebuild.webp",
              description: "기억한 블록 배치를 재구성하는 단계",
            },
            caption: "정보를 기억한 뒤 같은 구성을 다시 만드는 상태 전환을 한 흐름으로 보여줍니다.",
          },
        ],
      },
    ],
    resultAndDemo: {
      summary: "인지훈련 게임 20종의 로직을 구현하고, 수정 결과를 브라우저에서 확인할 수 있는 웹 기반 개발·검증 구조를 구성했습니다.",
      evidence: [
        "의료연구원의 기획서를 바탕으로 인지훈련 게임 20종의 게임 로직 설계 및 구현",
        "React/Next.js와 Phaser3의 역할을 구분한 웹 게임 실행 및 결과 전달 구조 구성",
        "반복되는 게임 실행 구조와 UI를 재사용 가능한 형태로 구성",
      ],
      media: [
        {
          id: "cognitive-training-games-result-number-match",
          type: "image",
          title: "계산 짝짓기",
          src: "/projects/cognitive-games/images/number-match.webp",
          alt: "숫자와 계산식 가운데 값이 같은 항목을 찾는 계산 짝짓기 게임 화면",
          width: 787,
          height: 366,
          caption: "계산 결과를 비교해 같은 값을 찾는 게임 화면",
        },
        {
          id: "cognitive-training-games-result-break-ice",
          type: "image",
          title: "얼음 깨기",
          src: "/projects/cognitive-games/images/break-ice.webp",
          alt: "제시된 색 순서에 맞춰 색깔 얼음을 선택하는 얼음 깨기 게임 화면",
          width: 784,
          height: 365,
          caption: "색 순서와 조건을 확인해 대상을 선택하는 게임 화면",
        },
        {
          id: "cognitive-training-games-result-remember-blocks",
          type: "before-after",
          title: "Remember Blocks",
          before: {
            label: "기억 단계",
            src: "/projects/cognitive-games/images/remember-blocks-memory.webp",
            description: "블록의 위치를 기억하는 단계",
          },
          after: {
            label: "재구성 단계",
            src: "/projects/cognitive-games/images/remember-blocks-rebuild.webp",
            description: "기억한 블록 배치를 재구성하는 단계",
          },
          caption: "기억 단계와 재구성 단계가 이어지는 실제 화면",
        },
      ],
    },
    learnings: [
      "기술 선택은 기술 자체보다 개발과 검증 과정 전체를 개선할 수 있는지를 기준으로 판단해야 한다는 점을 배웠습니다.",
      "서로 다른 콘텐츠에서도 반복되는 실행 구조와 UI는 공통화할 수 있다는 점을 확인했습니다.",
    ],
    seo: {
      title: "인지훈련 게임 20종",
      description: "인지훈련 게임 20종의 로직을 구현하고 반복되는 개발·검증 과정을 웹 기반으로 개선한 프로젝트입니다.",
    },
  },
  {
    slug: "catchvoca",
    publicationStatus: "published",
    featuredOrder: 3,
    title: "CatchVoca AI 단어장",
    eyebrow: "Featured Project 03",
    shortDescription: "학습 자료를 입력하면 AI 분석 결과를 단어장으로 연결하고, 생성된 단어를 실제 학습에 활용할 수 있도록 사용자 흐름을 구현했습니다.",
    homeDescription: "AI 분석 Backend를 Flutter 사용자 흐름과 연결한 단어장 서비스를 기획하고 Frontend를 개발했습니다.",
    overview: "직접 기획한 AI 기반 단어장 서비스로, 분석 Backend의 결과를 입력부터 단어장 생성과 관리까지 이어지는 사용자 경험으로 연결했습니다.",
    overviewMedia: placeholderMedia("catchvoca-overview", "CatchVoca 메인 입력 화면"),
    cardMedia: {
      id: "catchvoca-card",
      type: "image",
      title: "CatchVoca 대표 화면",
      alt: "생성된 단어와 학습정보가 보이는 CatchVoca 단어장 화면",
    },
    period: "내용 준비 중",
    role: "서비스 기획 · Flutter Frontend 개발",
    team: "Backend 개발자",
    users: "내용 준비 중",
    projectStatus: "운영 Backend 종료 · Demo 환경 사용",
    domain: "AI 기반 영어 학습 서비스",
    technologies: ["Flutter", "Dart", "Firebase Authentication", "REST API"],
    keywords: ["서비스 기획", "AI 분석 연동", "단어장 관리"],
    context: [
      "텍스트, PDF·이미지, URL 형태의 학습 자료를 분석 요청하고 그 결과를 사용자별 단어장으로 이어주는 서비스를 기획했습니다.",
      "Frontend는 Flutter로 구현했으며, AI 분석과 데이터 저장을 담당하는 Backend는 팀원이 개발했습니다.",
    ],
    responsibilities: [
      "자료 입력부터 분석 요청, 단어장 생성과 학습으로 이어지는 서비스 흐름을 기획했습니다.",
      "Flutter로 로그인, 입력, Loading, 단어장 목록·상세, 편집과 즐겨찾기 관리 UI를 구현했습니다.",
      "Firebase Authentication과 REST API를 연동해 Backend 기능을 사용자 경험으로 연결했습니다.",
    ],
    collaborationScope: [
      "팀원이 AI 분석 Backend와 데이터 저장 영역을 담당했으며, Frontend에서는 제공된 API 응답 구조를 기준으로 사용자 흐름을 구현했습니다.",
    ],
    contributions: [
      {
        id: "catchvoca-contribution-service-flow",
        title: "서비스 흐름 기획",
        summary: "텍스트, PDF·이미지, URL을 입력하고 분석 결과를 단어장으로 사용하는 전체 사용자 흐름을 기획했습니다.",
        scope: "direct",
      },
      {
        id: "catchvoca-contribution-frontend",
        title: "Flutter Frontend",
        summary: "로그인, 입력, Loading, 단어장 목록·상세, 편집 및 즐겨찾기 관리 UI를 Flutter로 구현했습니다.",
        scope: "direct",
      },
      {
        id: "catchvoca-contribution-backend-integration",
        title: "Backend 기능 연결",
        summary: "Firebase 인증과 REST API를 이용해 분석 요청 및 사용자별 단어장 관리 기능을 Frontend에 연결했습니다.",
        scope: "direct",
      },
    ],
    technologyScope: {
      direct: ["Flutter", "Dart", "Firebase Authentication", "REST API 연동"],
      collaboration: ["AI Analysis Backend", "Backend Data Storage"],
    },
    problemSolvingCases: [
      {
        id: "catchvoca-case-01",
        title: "단어를 직접 입력하는 대신 자료 자체를 입력하도록 설계",
        problem: {
          summary: "기존 단어장 사용 과정에서는 학습할 단어를 찾고 뜻과 예문을 확인한 뒤 직접 입력하는 반복 작업이 필요하다고 판단했습니다.",
        },
        decision: {
          summary: "단어를 하나씩 입력하는 대신 사용자가 이미 보고 있는 텍스트, PDF·이미지, URL을 학습 자료로 제출하는 흐름을 설계했습니다.",
        },
        implementation: {
          summary: "Flutter에서 입력 유형과 언어를 선택하고 자료를 분석 요청한 뒤, Loading 상태를 거쳐 생성된 단어장으로 이동하도록 화면 흐름을 구현했습니다.",
        },
        evidenceResult: {
          summary: "AI 내부 처리 방식을 직접 구현한 것이 아니라, 세 가지 자료 입력 방식이 분석 요청과 단어장 생성으로 이어지도록 사용자 경험을 구성했습니다.",
        },
        media: [
          {
            id: "catchvoca-material-to-wordbook-flow",
            type: "before-after",
            title: "직접 입력에서 자료 기반 단어장 생성으로",
            before: {
              label: "Before",
              description: "단어 정보를 찾아 직접 입력하는 반복 과정",
              items: ["단어 찾기", "뜻 찾기", "예문 찾기", "직접 입력"],
            },
            after: {
              label: "After",
              description: "학습 자료를 분석 요청해 단어장으로 연결하는 과정",
              items: ["텍스트 / 파일 / URL", "분석 요청", "단어장"],
            },
            caption: "AI 내부 구현이 아닌 자료 입력부터 단어장까지의 서비스 흐름을 비교했습니다.",
          },
        ],
      },
      {
        id: "catchvoca-case-02",
        title: "AI 분석 기능을 실제 사용자 경험으로 연결",
        problem: {
          summary: "Backend의 분석 기능을 사용자가 실제로 이용하려면 인증, 입력과 요청, 대기 상태, 결과 조회를 하나의 Frontend 흐름으로 연결해야 했습니다.",
        },
        decision: {
          summary: "Frontend와 Backend의 책임을 구분하고, Flutter가 Firebase 인증과 REST API 요청·응답을 사용자 화면과 상태로 연결하도록 구성했습니다.",
        },
        implementation: {
          summary: "텍스트, PDF·이미지, URL 분석 요청과 Loading UI를 구현하고, 분석 완료 후 Wordbook API를 통해 사용자별 단어장 화면으로 이어지게 했습니다.",
        },
        evidenceResult: {
          summary: "Frontend에서 분석 요청부터 생성된 단어장 조회까지의 흐름을 구현했습니다. AI 모델 호출, Prompt, OCR, Backend 저장 로직은 팀원의 협업 영역입니다.",
        },
        media: [
          {
            id: "catchvoca-frontend-backend-flow",
            type: "diagram",
            title: "Frontend와 Backend의 연결 범위",
            alt: "Flutter UI에서 분석 API와 Backend를 거쳐 단어장 UI로 이어지는 구조",
            nodes: [
              { label: "Flutter UI", description: "직접 담당 · 입력과 상태 UI", tone: "success" },
              { label: "Analysis REST API", description: "직접 담당 · 요청 연동", tone: "decision" },
              { label: "Backend", description: "협업 영역 · AI/OCR/저장 내부 구현", tone: "collaboration" },
              { label: "Wordbook API", description: "직접 담당 · 응답 연동", tone: "decision" },
              { label: "Flutter Wordbook UI", description: "직접 담당 · 조회와 관리 UI", tone: "success" },
            ],
            caption: "실선 색상 노드는 Frontend에서 연결한 영역이며, 점선 노드는 팀원이 담당한 Backend 내부 영역입니다.",
          },
        ],
      },
      {
        id: "catchvoca-case-03",
        title: "생성으로 끝나지 않고 실제 단어장 관리까지 연결",
        problem: {
          summary: "분석 결과를 한 번 보여주는 것만으로는 생성된 단어를 이후 학습에서 다시 찾고 정리하기 어려웠습니다.",
        },
        decision: {
          summary: "분석 결과를 사용자별 단어장으로 조회하고, 상세 학습정보와 편집 기능을 통해 계속 활용할 수 있는 흐름으로 확장했습니다.",
        },
        implementation: {
          summary: "단어장 목록과 상세 조회, 이름 변경·삭제, 여러 단어 선택, 선택 삭제, 즐겨찾기 단어장 생성과 이동 기능을 Flutter UI와 API 연동으로 구현했습니다.",
        },
        evidenceResult: {
          summary: "단어의 뜻, 품사, 예문, 번역, 발음, 동의어, 반의어를 확인하고 필요한 단어를 선택해 즐겨찾기로 이동하거나 정리할 수 있습니다.",
        },
        media: [
          {
            id: "catchvoca-wordbook-management-flow",
            type: "diagram",
            title: "생성된 단어장의 학습·관리 흐름",
            alt: "단어장 조회부터 상세 정보와 다중 선택, 즐겨찾기 이동, 편집으로 이어지는 흐름",
            nodes: [
              { label: "단어장 조회" },
              { label: "상세 정보", tone: "decision" },
              { label: "다중 선택" },
              { label: "즐겨찾기로 이동", tone: "success" },
              { label: "삭제 / 이름 변경" },
            ],
            caption: "분석 결과를 생성하는 단계 이후에도 실제 학습에 사용할 수 있도록 관리 기능을 연결했습니다.",
          },
        ],
      },
    ],
    resultAndDemo: {
      summary: "자료 입력과 분석 요청부터 사용자별 단어장 조회, 상세 학습정보 확인, 편집과 즐겨찾기 관리까지 이어지는 Flutter 사용자 흐름을 구현했습니다.",
      evidence: [
        "텍스트, PDF·이미지, URL 입력과 언어 선택 및 분석 요청 UI 구현",
        "Firebase/Google 로그인과 사용자별 단어장 목록·상세 조회 연결",
        "다중 선택, 삭제, 이름 변경, 즐겨찾기 단어장 생성과 이동 기능 구현",
        "현재 운영 Backend는 종료되어, 포트폴리오 시연은 기존 API 응답 구조를 기반으로 복원한 Demo 환경을 사용합니다.",
      ],
      media: [
        placeholderMedia("catchvoca-main-input", "CatchVoca 메인 입력 화면"),
        placeholderMedia("catchvoca-text-input", "텍스트 입력 화면"),
        placeholderMedia("catchvoca-analysis-loading", "분석 대기 Loading 화면"),
        placeholderMedia("catchvoca-generated-wordbook", "생성된 단어장 화면"),
        placeholderMedia("catchvoca-word-detail", "단어 상세 학습정보 화면"),
        placeholderMedia("catchvoca-multi-select", "다중 선택 화면"),
        placeholderMedia("catchvoca-favorite-result", "즐겨찾기 이동 결과 화면"),
        placeholderMedia("catchvoca-analysis-demo", "입력부터 단어장 생성까지", "video"),
        placeholderMedia("catchvoca-favorite-demo", "다중 선택부터 즐겨찾기 이동까지", "video"),
      ],
    },
    learnings: [
      "AI 기능 자체보다 사용자가 실제로 사용할 수 있는 흐름으로 연결하는 것이 중요하다는 점을 배웠습니다.",
      "팀 프로젝트에서는 Frontend와 Backend의 책임을 명확히 나누고, API 응답 구조에 맞춰 사용자 경험을 구성해야 한다는 점을 확인했습니다.",
    ],
    seo: {
      title: "CatchVoca AI 단어장",
      description: "AI 분석 Backend를 자료 입력부터 단어장 생성과 학습·관리까지 이어지는 Flutter 사용자 경험으로 연결한 프로젝트입니다.",
    },
  },
];
