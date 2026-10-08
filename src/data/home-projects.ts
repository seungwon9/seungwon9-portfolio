export type HomeProject = {
  slug: string;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const homeProjects: HomeProject[] = [
  {
    slug: "manufacturing-erp",
    title: "제조업체 ERP",
    description: "여러 Excel로 관리되던 계약·생산·자재·재고·납품 업무를 분석하고, 하나의 흐름으로 연결한 데스크톱 ERP를 개발했습니다.",
    role: "업무 분석 · 데이터 설계 · ERP 개발",
    technologies: ["React", "TypeScript", "Electron", "SQLite"],
    image: {
      src: "/projects/manufacturing-erp/images/erp-dashboard.webp",
      alt: "현장, 계약, 생산, 자재, 재고, 납품 모듈과 주요 현황이 보이는 제조업체 ERP 대시보드",
      width: 1920,
      height: 1040,
    },
  },
  {
    slug: "cognitive-training-games",
    title: "인지훈련 게임 20종",
    description: "의료연구원의 기획서를 바탕으로 인지훈련 게임 20종의 로직과 레벨별 규칙을 설계·구현하고, 웹 기반 실행 환경을 개발했습니다.",
    role: "게임 로직 설계 및 구현 · 웹 실행 구조 개발",
    technologies: ["React", "Next.js", "TypeScript", "Phaser3"],
    image: {
      src: "/projects/cognitive-games/images/train-manager-main.webp",
      alt: "두 갈래 철도와 신호, 여러 열차가 보이는 Train Manager 인지훈련 게임 화면",
      width: 784,
      height: 365,
    },
  },
  {
    slug: "catchvoca",
    title: "CatchVoca AI 단어장",
    description: "PDF·이미지, 텍스트, URL 등의 학습자료를 AI 분석과 연결해 개인 단어장을 만드는 서비스를 기획하고 개발했습니다.",
    role: "서비스 기획 및 개발",
    technologies: ["Flutter", "Dart", "Firebase Authentication", "REST API"],
    image: {
      src: "/projects/catchvoca/images/catchvoca-input-file.webp",
      alt: "PDF 또는 이미지 파일을 선택해 단어장 생성을 요청하는 CatchVoca 입력 화면",
      width: 1919,
      height: 953,
    },
  },
];
