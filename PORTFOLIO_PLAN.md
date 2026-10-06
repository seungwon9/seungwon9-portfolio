# 개발자 포트폴리오 기획서

## 1. 문서 목적과 현재 저장소 상태

이 문서는 채용담당자가 짧은 시간 안에 다음 세 가지를 파악할 수 있는 웹 포트폴리오의 정보 구조와 구현 방향을 정의한다.

1. 어떤 문제를 해결했는가
2. 그 과정에서 본인이 직접 맡은 일은 무엇인가
3. 어떤 근거로 기술적·제품적 판단을 내렸는가

현재 저장소는 `.git`만 존재하는 초기 상태이며, `main` 브랜치에 아직 커밋이 없다. 원격 저장소는 `https://github.com/seungwon9/seungwon9-portfolio.git`로 설정되어 있다. 이 문서는 구현 전 설계 기준이며, 실제 프로젝트의 수치·기간·역할·성과는 검증된 자료가 준비된 뒤에만 입력한다.

예정 기술 스택은 Next.js, TypeScript, Tailwind CSS다. 배포 시 희망 도메인은 `https://seungwon9-portfolio.vercel.app/`이며, 실제 사용 가능 여부는 Vercel 프로젝트 생성 단계에서 확인한다.

---

## 2. 핵심 콘텐츠 원칙

### 2.1 빠르게 읽히는 두 단계 정보 구조

- 홈에서는 프로젝트의 성격과 핵심 문제를 빠르게 비교할 수 있게 한다.
- 상세 페이지에서는 문제 해결 사례를 독립적인 이야기 단위로 제시한다.
- 기술 이름은 판단과 구현을 설명하는 맥락에서만 강조한다.
- 코드 캡처보다 실제 화면, 사용자 흐름, 구조도, Before/After 비교를 우선한다.
- 확인되지 않은 성과를 수치화하거나 역할 범위를 과장하지 않는다.

### 2.2 각 프로젝트가 답해야 하는 질문

- 이 프로젝트는 누구의 어떤 문제를 다루는가?
- 문제의 제약 조건과 기존 방식의 한계는 무엇이었는가?
- 나는 어디까지 책임졌으며, 협업 범위는 어디까지였는가?
- 가능한 선택지 중 왜 이 방법을 택했는가?
- 무엇을 어떻게 구현했고, 올바르게 동작하는지 어떻게 확인했는가?
- 결과는 무엇이며 어떤 근거로 설명할 수 있는가?
- 다시 한다면 무엇을 다르게 할 것인가?

### 2.3 콘텐츠 신뢰성 규칙

- 모든 결과 수치는 출처 또는 측정 방법과 함께 관리한다.
- 팀의 결과와 개인 기여를 문장 수준에서 구분한다.
- 보안·회사 기밀·개인정보가 포함된 화면은 비식별화하거나 재구성한다.
- 공개할 수 없는 구현은 구체적인 내부 정보 대신 문제, 판단 기준, 구조적 접근을 설명한다.
- 자료가 없는 항목은 추정해서 채우지 않고 `작성 필요` 상태로 둔다.

---

## 3. 전체 Information Architecture

```text
/
├─ Hero
├─ Featured Projects
│  ├─ 제조업체 ERP → /projects/[erp-slug]
│  ├─ 인지훈련 게임 20종 → /projects/[cognitive-games-slug]
│  └─ CatchVoca AI 단어장 → /projects/[catchvoca-slug]
├─ Experience
├─ Other Projects
├─ Skills
└─ Contact

/projects/[slug]
├─ Overview
├─ Context & My Role
├─ Problem Solving Cases (프로젝트별 3~5개)
│  └─ Problem → Context/Cause → Decision → Implementation → Verification/Evidence → Result
├─ Result & Demo
└─ What I Learned

/404 또는 not-found
└─ 존재하지 않는 프로젝트 안내 및 홈 이동
```

초기 공개 범위는 홈과 세 개의 프로젝트 상세 페이지로 제한한다. 별도의 프로젝트 목록 페이지는 프로젝트 수가 늘어나 홈의 `Other Projects`만으로 탐색이 어려워질 때 `/projects`로 추가한다.

상단 내비게이션은 `Projects`, `Experience`, `Skills`, `Contact`의 홈 섹션 앵커를 기본으로 한다. 프로젝트 상세 페이지에서는 로고/이름을 홈 링크로 사용하고, `Projects`는 홈의 Featured Projects로 돌아가게 한다.

---

## 4. 홈페이지 구성

### 4.1 Global Header

- 이름 또는 짧은 워드마크
- 주요 섹션 앵커 링크
- 이력서 링크는 실제 공개 파일이 준비된 경우에만 노출
- 모바일에서는 간결한 메뉴 버튼 또는 핵심 링크만 남긴 축약형 내비게이션 사용
- 현재 위치, 키보드 포커스, 충분한 터치 영역을 명확히 표시

### 4.2 Hero

첫 화면에서 특정 Frontend 직무에 한정하지 않고, 서로 다른 프로젝트를 관통하는 문제 해결 관점과 개발자로서의 방향을 전달한다.

- 이름과 폭넓은 개발 역할을 포괄하는 짧은 정체성
- 현장의 문제를 이해하고 실제로 작동하는 시스템으로 연결하는 관점을 담은 한두 문장의 소개
- Featured Projects로 이동하는 기본 CTA
- 연락처 또는 이력서가 준비된 경우 보조 CTA
- 장식적 비주얼보다 문장과 여백을 중심으로 구성

`현장의 문제를 이해하고 작동하는 시스템으로 만드는 개발자`와 같은 방향을 참고하되, 이는 톤과 구조를 정하기 위한 예시일 뿐 최종 문구로 확정하지 않는다. 실제 자기소개 문구와 직무 표현은 세 프로젝트의 콘텐츠를 정리한 뒤 결정한다.

### 4.3 Featured Projects

우선순위는 다음과 같다.

1. 제조업체 ERP
2. 인지훈련 게임 20종
3. CatchVoca AI 단어장

각 카드는 아래 정보만 노출해 빠르게 비교할 수 있게 한다.

- 대표 이미지 또는 짧은 무음 프리뷰
- 프로젝트명
- 검증된 1~2줄 요약
- 주요 기술
- 문제 해결 성격을 드러내는 핵심 키워드
- 상세 페이지 링크

카드 전체를 클릭 가능하게 만들되, 링크 목적이 스크린 리더에도 명확하도록 프로젝트명을 포함한 접근 가능한 레이블을 제공한다. 첫 번째 프로젝트는 더 넓게 보여줄 수 있지만, 세 프로젝트의 정보 항목과 읽는 방식은 일관되게 유지한다.

### 4.4 Experience

- 회사/조직, 역할, 기간
- 담당 범위와 책임
- 검증 가능한 주요 기여를 짧게 요약
- 해당 Featured Project와 연결되는 경우 상세 페이지 링크 제공

연대기 자체보다 역할의 변화와 책임 범위가 빠르게 읽히도록 한다. 실제 경력 정보가 확보되기 전에는 구조만 준비한다.

### 4.5 Other Projects

- Featured Projects보다 작은 카드 또는 간결한 목록 사용
- 프로젝트명, 한 줄 설명, 역할/연도, 링크 정도만 제공
- 이미지 크기, 타이포그래피, 여백, 색상 강조를 Featured Projects보다 한 단계 낮춰 시각적으로 경쟁하지 않게 함
- 공개할 실제 프로젝트가 준비되지 않았다면 섹션을 빈 상태로 노출하지 않고 데이터가 생길 때 활성화

### 4.6 Skills

- 기술 로고를 많이 나열하지 않고 실제 활용 분야를 기준으로 한 소수의 간결한 그룹을 우선함
- 그룹명은 실제 프로젝트 내용을 확인한 뒤 확정하되, 예를 들면 `업무 시스템 설계`, `인터랙티브 콘텐츠`, `AI/데이터 연동`, `품질과 협업`처럼 기술이 사용된 맥락을 드러냄
- 각 그룹은 핵심 역량에 대한 짧은 설명과 이를 뒷받침하는 대표 기술로 구성
- 각 기술은 실제 사용 경험이 확인된 경우에만 추가
- 숙련도를 임의의 퍼센트나 별점으로 표현하지 않음
- Featured Projects에서 해당 기술이 사용된 근거로 자연스럽게 연결

### 4.7 Contact

- 짧은 연락 안내 문장
- 이메일과 검증된 외부 프로필 링크
- 복사 가능한 이메일 또는 `mailto:` 링크
- 불필요한 입력 폼은 초기 범위에서 제외하여 관리 비용과 스팸 위험을 줄임

### 4.8 Footer

- 이름, 저작권 표기, 주요 외부 링크
- 선택적으로 마지막 업데이트 시점 제공

---

## 5. 프로젝트 상세 페이지 구성

상세 페이지의 중심은 일반 섹션 나열이 아니라 프로젝트 성격과 근거의 양에 따라 선정한 3~5개의 독립된 Problem Solving Case다. 사례 개수를 맞추기 위해 약한 내용을 추가하지 않으며, 각 사례는 가능한 범위에서 문제 제기부터 결과 확인까지 하나의 이야기로 읽히게 한다.

### 5.1 Overview

페이지 첫 화면에서 프로젝트 전체를 이해하는 요약 영역이다.

- 프로젝트명과 한 문장 설명
- 프로젝트 대표 이미지/영상
- 기간
- 역할
- 팀/협업 범위
- 주요 기술
- 프로젝트 상태(예: 개발, 운영, 종료 등 실제 확인된 표현)
- 문제 해결 사례로 바로 이동하는 목차
- 공개 가능한 경우 서비스, 저장소, 데모 링크

기간, 역할, 팀/협업 범위, 기술, 프로젝트 상태는 프로젝트마다 같은 순서와 레이블의 요약 메타 영역으로 제공한다. 장문의 배경 설명보다 “무엇을 위한 프로젝트이며 내가 어떤 책임을 맡았는지”가 먼저 보이게 한다.

### 5.2 Context & My Role

프로젝트 전체 맥락과 본인의 책임 범위를 구분해 설명한다.

- 제품/조직/사용자 맥락
- 프로젝트가 시작된 이유와 주요 제약 조건
- 팀 구성과 협업 방식
- 본인이 직접 소유한 범위
- 함께 결정하거나 다른 구성원이 담당한 범위
- 공개 범위 또는 자료 사용상의 제한

`My Role`은 직함보다 실제 행동과 책임을 중심으로 작성한다. 예: 기획 참여, 아키텍처 결정, 특정 기능의 설계·구현, 테스트, 운영 대응 등 실제 확인된 항목만 사용한다.

### 5.3 Problem Solving Cases 3~5개

각 사례는 독립적인 제목과 한 줄 요약을 가지며 기본적으로 `Problem → Context/Cause → Decision → Implementation → Verification/Evidence → Result` 순서로 구성한다. 다만 실제 기록이나 근거가 없는 단계는 억지로 채우지 않고 생략하거나 인접 단계와 합친다. 생략으로 인해 추측이 사실처럼 보이지 않도록 확인된 사실, 당시 판단, 회고를 구분한다.

#### Problem

- 사용자, 비즈니스 또는 개발 과정에서 발생한 구체적 문제
- 문제의 영향과 해결이 필요했던 이유
- 가능하다면 실제 증상 또는 기존 흐름을 보여주는 자료

#### Context / Cause

- 문제가 발생한 배경과 원인
- 당시 시스템 구조, 사용자 행동, 일정, 보안, 성능 등 제약 조건
- 관찰과 가설을 구분하여 기술

#### Decision

- 고려한 선택지와 평가 기준
- 최종 접근을 선택한 이유
- 포기한 대안과 트레이드오프
- 본인이 결정한 부분과 협의된 부분의 구분

#### Implementation

- 결정 사항을 실제 기능과 구조에 반영한 방식
- 핵심 데이터 흐름, 컴포넌트/모듈 관계, API 또는 상태 변화
- 설명에 필요한 최소한의 기술 상세
- 긴 코드 캡처 대신 구조도, 단계도, 실제 화면을 우선 사용

#### Verification / Evidence

- 해결 여부를 검증한 방법
- 테스트, 사용자 확인, 로그/지표, QA 시나리오, Before/After 비교 중 실제 수행한 방식
- 측정 조건, 비교 기준, 확인 범위를 함께 기록

#### Result

- 검증된 정량적 또는 정성적 결과
- 남은 한계와 후속 과제
- 수치가 없다면 관찰 가능한 변화와 그 근거를 과장 없이 서술

#### 사례별 권장 시각 자료

- 문제와 개선된 흐름을 나란히 보여주는 Before/After
- 주요 모듈과 데이터 흐름만 담은 간결한 구조도
- 버전 관리 가능한 Mermaid 기반 흐름도 또는 관계도
- 핵심 상호작용을 보여주는 5~20초 내외의 짧은 무음 영상
- 맥락을 이해하는 데 필요한 실제 화면
- 검증 방법이나 변화 추이를 설명하는 간단한 그래프

이미지, 영상, Before/After, Mermaid/구조도는 사례 전체뿐 아니라 Problem, Decision, Implementation, Verification/Evidence 등 가장 관련 있는 단계 사이에도 자유롭게 배치할 수 있어야 한다. 모든 사례에 시각 자료를 억지로 넣지는 않으며, 판단 과정이나 변화가 글만으로 이해하기 어려운 경우에 사용한다. 각 자료에는 캡션과 대체 텍스트 또는 동일한 정보를 전달하는 텍스트 설명을 제공한다.

### 5.4 Result & Demo

개별 사례 결과를 반복하지 않고 프로젝트 전체 결과를 요약하면서, 완성된 실제 화면과 핵심 동작 영상을 함께 확인할 수 있는 마무리 영역으로 구성한다.

- 프로젝트가 최종적으로 제공한 가치
- 본인의 기여를 통해 달라진 점
- 검증 가능한 핵심 결과
- 출시/운영 상태 또는 공개 가능한 후속 변화
- 주요 실제 화면을 보여주는 이미지 갤러리 또는 화면 흐름
- 핵심 사용자 경험을 보여주는 짧은 영상이나 데모
- 외부 링크가 있다면 최종 CTA

결과를 뒷받침하는 화면과 영상에는 무엇을 확인해야 하는지 짧은 설명을 붙인다. 성과 수치는 측정 기준과 출처를 함께 제시하며, 근거가 없는 수치형 강조 카드는 만들지 않는다. 공개 가능한 데모가 없을 때는 링크를 억지로 만들지 않고 정적 화면과 설명으로 대체한다.

### 5.5 What I Learned

- 기술적 학습
- 판단 또는 협업 방식에서 얻은 학습
- 당시 선택의 한계
- 다시 진행한다면 바꾸고 싶은 점

회고는 일반론 대신 앞서 제시한 사례와 연결한다. 프로젝트를 미화하기보다 판단이 어떻게 발전했는지를 보여준다.

### 5.6 상세 페이지 보조 탐색

- 상단 또는 데스크톱 측면에 사례 목차 제공
- 현재 읽는 사례를 표시하되 과도한 고정 UI는 피함
- 이전/다음 프로젝트 이동 제공
- 홈의 Featured Projects로 돌아가는 경로 제공
- 제목 계층과 앵커 ID를 일관되게 구성해 링크 공유가 가능하도록 함

---

## 6. 디자인 방향

### 6.1 Visual Tone

- 흰색 또는 따뜻한 중립색 배경과 높은 명도 대비
- 본문은 짙은 중립색, 강조색은 한 계열만 제한적으로 사용
- 카드 장식보다 타이포그래피, 정렬, 여백, 이미지 크기로 위계 표현
- 큰 라운드, 강한 그림자, 과도한 그라디언트는 최소화
- 터미널, 코드 에디터, 네온 컬러를 주된 시각 언어로 사용하지 않음

정확한 컬러 토큰과 폰트는 구현 전 디자인 샘플에서 확정한다.

### 6.2 Typography

- 한국어와 영문이 함께 읽기 좋은 웹폰트 또는 시스템 폰트 조합
- 본문 가독성을 위해 적절한 행간과 제한된 최대 줄 길이 사용
- 페이지 제목, 섹션 제목, 사례 제목, 본문의 단계가 명확히 구분되도록 타입 스케일 정의
- 지나친 굵기 종류를 피하고 Regular/Medium/Bold 중심으로 운영
- 폰트 로딩이 성능과 레이아웃 이동에 미치는 영향을 최소화

### 6.3 Layout

- 홈은 넓은 이미지와 짧은 텍스트가 교차하는 편집형 레이아웃
- 상세 페이지 본문은 읽기 편한 최대 너비를 유지하고, 미디어만 필요할 때 더 넓게 확장
- 섹션 간 충분한 세로 여백으로 긴 페이지의 호흡 확보
- 사례별 반복 구조는 일관되게 유지하되 이미지 위치와 폭으로 리듬을 조절

### 6.4 Motion

- 페이지 이해를 돕는 짧은 hover/focus/전환 효과만 사용
- 스크롤을 방해하는 패럴랙스, 과도한 등장 애니메이션, 자동 재생 장식 영상은 사용하지 않음
- `prefers-reduced-motion` 설정을 존중
- 영상 자동 재생이 필요한 경우 무음, 반복 여부, 일시정지 제어와 네트워크 비용을 고려

### 6.5 Accessibility

- 의미 있는 HTML 구조와 올바른 제목 순서 사용
- 텍스트/배경 및 UI 상태의 충분한 색상 대비 확보
- 키보드만으로 모든 링크와 컨트롤 사용 가능
- 이미지 대체 텍스트, 영상 캡션 또는 내용 요약 제공
- 색상만으로 상태나 비교 결과를 전달하지 않음
- 포커스 표시를 제거하지 않음

---

## 7. 공통 컴포넌트 설계

컴포넌트는 콘텐츠를 직접 포함하지 않고 데이터 또는 children을 받아 렌더링한다. 프로젝트별 예외는 데이터 옵션으로 해결하되, 복잡한 예외가 공통 컴포넌트를 왜곡하면 프로젝트 전용 표현 컴포넌트로 분리한다.

### 7.1 Layout / Navigation

- `SiteHeader`: 전역 내비게이션, 모바일 메뉴
- `SiteFooter`: 연락 링크와 저작권 정보
- `PageContainer`: 최대 너비와 좌우 여백 관리
- `Section`: 공통 섹션 간격과 제목 구조
- `SkipLink`: 본문 바로가기
- `ProjectToc`: 사례 앵커 탐색과 현재 위치 표시
- `ProjectNavigation`: 이전/다음 프로젝트 이동

### 7.2 Homepage

- `HeroSection`
- `FeaturedProjectsSection`
- `ProjectCard`
- `ExperienceSection` / `ExperienceItem`
- `OtherProjectsSection` / `CompactProjectCard`
- `SkillsSection` / `SkillGroup`
- `ContactSection`

### 7.3 Project Detail

- `ProjectHero`: Overview 핵심 정보와 대표 미디어
- `ProjectMeta`: 기간, 역할, 팀/협업 범위, 기술, 프로젝트 상태를 같은 순서로 보여주는 구조화된 메타데이터
- `RoleScope`: 직접 기여와 협업 범위를 명확히 표현
- `CaseStudy`: 문제 해결 사례 한 개의 전체 컨테이너
- `CaseStep`: Problem, Decision 등 사례 내부 단계
- `MediaBlock`: 사례 단계 사이에도 배치할 수 있는 이미지/영상/다이어그램 공통 표시
- `BeforeAfter`: 두 상태의 비교
- `ArchitectureDiagram`: 구조도와 설명/캡션
- `MermaidDiagram`: 접근 가능한 설명을 포함한 Mermaid 도식
- `ResultAndDemo`: 검증된 프로젝트 전체 결과와 실제 화면/영상
- `LearningList`: 학습과 한계
- `ExternalLinks`: 데모, 저장소 등 공개 링크

### 7.4 Foundation UI

- `ButtonLink`
- `TagList` / `Tag`
- `ResponsiveImage`
- `VideoPlayer`
- `Figure` / `Figcaption`
- `VisuallyHidden`

Foundation UI는 소수의 변형만 허용하고, 색상·간격·글꼴·반경·그림자·브레이크포인트는 디자인 토큰으로 관리한다.

---

## 8. 프로젝트 데이터 구조

프로젝트 콘텐츠와 UI를 분리한다. 목록에 필요한 요약 데이터는 TypeScript 객체로 관리하고, 긴 사례 본문은 구조화된 데이터 또는 MDX 중 콘텐츠 작성 경험을 비교한 뒤 선택한다.

초기 권장안은 다음과 같다.

- 프로젝트 식별자, 카드 정보, 메타데이터, 미디어 경로, 사례 순서는 `src/data/projects.ts`에서 타입 안전하게 관리
- 짧고 반복 가능한 사례 필드는 구조화된 객체로 관리
- 사례 설명이 길어지고 인라인 컴포넌트가 자주 필요해지면 프로젝트별 MDX로 전환
- UI는 데이터 접근 함수(`getAllProjects`, `getFeaturedProjects`, `getProjectBySlug`)를 통해서만 프로젝트 데이터를 읽음

개념적 TypeScript 구조는 다음과 같다. 이는 콘텐츠 예시가 아니라 필드 설계다.

```ts
type PublicationStatus = "draft" | "published";

type CaseStage =
  | "problem"
  | "context"
  | "decision"
  | "implementation"
  | "verificationEvidence"
  | "result";

type ProjectLink = {
  label: string;
  href: string;
  kind: "live" | "repository" | "other";
};

type ProjectMedia = {
  type: "image" | "video" | "diagram" | "mermaid" | "before-after";
  src: string;
  alt: string;
  caption?: string;
  poster?: string;
  width?: number;
  height?: number;
  placement?: CaseStage;
};

type CaseStepContent = {
  summary: string;
  details?: string[];
};

type ProblemSolvingCase = {
  id: string;
  title: string;
  takeaway?: string;
  problem: CaseStepContent;
  context?: CaseStepContent;
  decision?: CaseStepContent & {
    alternatives?: string[];
    tradeoffs?: string[];
  };
  implementation?: CaseStepContent;
  verificationEvidence?: CaseStepContent;
  result?: CaseStepContent;
  media?: ProjectMedia[];
};

type Project = {
  slug: string;
  publicationStatus: PublicationStatus;
  projectStatus: string;
  featuredOrder?: number;
  title: string;
  shortDescription: string;
  overview: string;
  thumbnail: ProjectMedia;
  heroMedia?: ProjectMedia;
  period?: string;
  team?: string;
  roleSummary: string;
  responsibilities: string[];
  collaborationScope?: string[];
  context: string[];
  constraints?: string[];
  technologies: string[];
  keywords: string[];
  links?: ProjectLink[];
  problemSolvingCases: ProblemSolvingCase[];
  resultAndDemo: {
    summary: string;
    evidence?: string[];
    limitations?: string[];
    media?: ProjectMedia[];
  };
  learnings: string[];
  seo: {
    title: string;
    description: string;
  };
};
```

### 8.1 데이터 검증 규칙

- `slug`는 URL에 안전한 영문 소문자와 하이픈을 사용하고 중복을 금지한다.
- `featuredOrder`는 Featured Projects에만 지정한다.
- `publicationStatus`는 포트폴리오 공개 여부를, `projectStatus`는 실제 프로젝트의 개발/운영 상태를 나타내며 서로 혼동하지 않는다.
- `published` 프로젝트는 Overview의 공통 메타정보, 역할, 3~5개의 근거 있는 사례, Result & Demo, 학습 항목을 갖춰야 한다.
- 사례 단계는 실제 근거가 있는 항목만 사용한다. `problem`은 사례의 출발점으로 필수이며, 나머지는 선택적으로 두어 억지로 내용을 만들지 않게 한다.
- 모든 미디어는 `alt`를 필수로 하되 장식 이미지는 명시적으로 빈 대체 텍스트를 허용하는 별도 규칙을 둔다.
- 사례의 `media`는 `placement`로 관련 단계를 지정할 수 있고, 지정하지 않으면 사례 전체 보조 자료로 표시한다.
- 외부 링크는 실제 접근 가능 여부와 공개 가능 여부를 확인한다.
- 결과 수치가 있다면 본문 데이터에 측정 기준 또는 출처도 함께 기록한다.
- 초안 프로젝트는 프로덕션 내비게이션과 사이트맵에서 제외한다.

### 8.2 세 프로젝트 초기 등록

초기 데이터에는 다음 세 항목의 식별 정보, 정렬 순서, 콘텐츠 방향만 먼저 등록한다. 아래 문장은 각 프로젝트를 차별화하기 위한 편집 방향이며, 실제 사례와 근거는 콘텐츠 정리 단계에서 검증한다. slug도 이 단계에서 최종 확정한다.

1. 제조업체 ERP: 현업 업무를 시스템 구조와 데이터 관계로 바꾼 경험
2. 인지훈련 게임 20종: 기획을 게임 로직으로 구현하고 개발/검증 방식을 개선한 경험
3. CatchVoca AI 단어장: 직접 서비스 흐름을 기획하고 AI 분석 Backend를 사용자 경험으로 연결한 경험

이 방향은 세 프로젝트의 서술 초점을 구분하기 위한 것이며, 설명, 역할, 사례, 기술, 결과의 구체적인 내용은 실제 자료를 받은 뒤 작성한다.

---

## 9. 이미지/영상 관리 방식

### 9.1 저장 위치와 파일 규칙

프로젝트별로 미디어를 분리한다.

```text
public/media/projects/
├─ [project-slug]/
│  ├─ cover/
│  ├─ cases/
│  │  └─ [case-id]/
│  ├─ diagrams/
│  └─ video/
└─ shared/
```

파일명은 `case-id-content-state.ext`처럼 의미를 알 수 있는 영문 소문자와 하이픈을 사용한다. 원본 편집 파일은 저장소 밖의 별도 보관 위치에서 관리하고, 웹에는 최적화 및 비식별화된 결과물만 포함한다.

### 9.2 이미지

- 사진/화면은 WebP 또는 AVIF를 우선 검토
- 투명도가 필요한 도식은 SVG 또는 최적화된 PNG 사용
- Next.js 이미지 최적화와 명시적 크기로 레이아웃 이동 방지
- 화면 캡처는 기기 프레임 장식을 최소화하고 실제 UI가 충분히 크게 보이게 함
- 민감 정보, 고객/직원 정보, 내부 URL, 계정 정보는 제거
- 구조도는 텍스트가 모바일에서도 읽히는지 확인하고 필요하면 모바일용 단순 버전을 별도 제공

### 9.3 Before/After 및 Mermaid/구조도

- Before/After는 동일한 대상과 범위를 비교하고, 두 상태의 차이를 텍스트로도 설명
- 드래그 비교 UI가 이해를 방해하면 나란히 보기 또는 위아래 보기를 우선
- Mermaid는 흐름과 관계가 콘텐츠의 핵심일 때 사용하고, 원본 정의를 프로젝트 콘텐츠와 함께 버전 관리
- 복잡한 Mermaid/구조도는 데스크톱용과 모바일용 정보량을 분리하거나 확대 가능한 정적 대체 이미지를 제공
- Mermaid 렌더링 실패 또는 JavaScript 비활성 상태에서도 핵심 관계를 이해할 수 있는 텍스트 요약 제공
- 각 자료는 `problemSolvingCases[].media`와 관련 단계의 `placement`를 통해 사례 내부 원하는 위치에 연결

### 9.4 영상

- 핵심 행동 하나만 보여주는 짧은 클립 중심
- MP4(WebM 보조 가능), 적절한 해상도와 압축률로 제공
- poster 이미지를 별도로 준비해 초기 로딩과 실패 상태 대응
- 기본적으로 음소거하고, 자동 재생을 사용할 경우 브라우저 정책과 접근성을 고려
- 사용자가 재생/일시정지할 수 있게 하고 영상 내용을 설명하는 캡션 또는 인접 텍스트 제공
- 용량이 커지면 Git 저장소에 직접 넣기보다 Vercel Blob 또는 검토된 외부 미디어 호스팅을 고려

### 9.5 성능 기준

- 첫 화면 대표 미디어만 우선 로드하고 나머지는 지연 로드
- 모바일에서 불필요하게 큰 원본을 내려받지 않도록 반응형 소스 사용
- 영상은 페이지 진입 시 모두 다운로드되지 않도록 preload 정책 설정
- 배포 전 Lighthouse와 실제 모바일 네트워크 환경에서 LCP, CLS, 총 전송량 확인

---

## 10. 추천 폴더 구조

Next.js App Router와 `src` 디렉터리를 기준으로 한다.

```text
seungwon9-portfolio/
├─ public/
│  ├─ media/
│  │  ├─ projects/
│  │  │  └─ [project-slug]/
│  │  └─ shared/
│  ├─ resume/                 # 공개 이력서가 있을 때만 사용
│  └─ icons/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ globals.css
│  │  ├─ not-found.tsx
│  │  ├─ sitemap.ts
│  │  ├─ robots.ts
│  │  └─ projects/
│  │     └─ [slug]/
│  │        └─ page.tsx
│  ├─ components/
│  │  ├─ layout/
│  │  ├─ home/
│  │  ├─ project/
│  │  ├─ media/
│  │  └─ ui/
│  ├─ data/
│  │  ├─ projects.ts
│  │  ├─ experience.ts
│  │  ├─ skills.ts
│  │  └─ profile.ts
│  ├─ lib/
│  │  ├─ projects.ts          # 조회·정렬·필터 함수
│  │  ├─ metadata.ts
│  │  └─ utils.ts
│  ├─ types/
│  │  └─ project.ts
│  └─ styles/
│     └─ tokens.css           # 필요 시 Tailwind 테마와 함께 사용
├─ content/                   # MDX 채택 시 프로젝트 콘텐츠 배치
│  └─ projects/
├─ tests/
│  ├─ unit/
│  └─ e2e/
├─ PORTFOLIO_PLAN.md
├─ next.config.*
├─ package.json
├─ tsconfig.json
└─ README.md
```

`content/`는 MDX를 실제로 채택할 때만 생성한다. 작은 데이터셋에서 불필요한 추상화나 CMS는 도입하지 않는다.

---

## 11. 모바일 대응 방식

모바일은 데스크톱을 단순 축소하지 않고 읽기 순서와 미디어 비용을 기준으로 재구성한다.

### 11.1 Layout

- mobile-first 스타일을 기본으로 작성
- 페이지 좌우 여백은 화면 크기에 따라 단계적으로 증가
- 다단 레이아웃은 모바일에서 자연스러운 단일 열로 전환
- 본문과 캡션의 줄 길이 및 행간을 모바일에서 별도 조정
- 고정 목차는 모바일에서 접이식 목차 또는 가로 스크롤 앵커로 변경

### 11.2 Project Cards

- 대표 이미지, 프로젝트명, 설명, 태그, 링크 순으로 읽히게 구성
- hover에만 의존하는 정보는 두지 않음
- 기술/키워드가 많을 경우 중요한 항목만 노출하고 나머지는 상세 페이지에서 제공

### 11.3 Case Studies

- `Problem → Result`의 문서 순서를 DOM에서도 그대로 유지
- 좌우 Before/After는 작은 화면에서 위아래 배치하거나 사용자가 명확히 전환할 수 있는 비교 UI 사용
- 복잡한 구조도는 단순화된 모바일 버전 또는 확대 가능한 뷰 제공
- 표가 필요할 경우 카드형 재배치나 가로 스크롤을 사용하되 핵심 내용이 숨지 않게 함

### 11.4 Media and Interaction

- 모바일용 이미지 크기와 영상 poster 제공
- 자동 재생 영상은 데이터 사용량과 동작 정책을 고려해 제한
- 터치 대상은 충분한 크기와 간격 확보
- 작은 화면에서 모달 남용을 피하고, 확대 뷰 사용 시 닫기와 포커스 복귀를 보장
- 실제 휴대폰, 태블릿, 키보드 및 화면 회전 상태에서 테스트

권장 검증 폭은 특정 기기명에 종속하지 않고 약 360px의 소형 모바일부터 대형 데스크톱까지 연속적으로 확인한다. 레이아웃 전환점은 콘텐츠가 깨지는 지점을 기준으로 결정한다.

---

## 12. 구현 단계

### 1단계: 콘텐츠 인벤토리와 공개 범위 확정

- 세 프로젝트별 기본 정보, 역할, 제약, 실제 결과 자료 수집
- 프로젝트별로 가장 강한 문제 해결 사례를 3~5개 선정
- 각 사례의 기본 흐름 중 실제 근거가 있는 단계와 생략할 단계를 구분
- 화면, 영상, 구조도, Mermaid, Before/After 자료의 보유 여부와 공개 가능 여부 확인
- 경력, 기술, 연락처, 이력서, 외부 링크 확정

완료 기준: 임의 작성 없이 각 페이지에 들어갈 사실 자료와 누락 항목이 구분되어 있다.

### 2단계: 콘텐츠 아웃라인과 우선순위 검토

- 프로젝트별 한 문장 요약과 카드용 설명 작성
- 사례별 제목, 핵심 메시지, 시각 자료 배치 계획 작성
- 개인 기여와 팀 기여 문장 검토
- 채용담당자 관점에서 홈과 상세 페이지의 첫 화면 정보 검토

완료 기준: 디자인 없이 텍스트 아웃라인만 읽어도 프로젝트와 개인 기여가 이해된다.

### 3단계: 디자인 시스템과 핵심 화면 설계

- 컬러, 타입 스케일, 간격, 컨테이너, 반경 등 토큰 확정
- 홈과 프로젝트 상세 페이지의 PC/Tablet/Mobile 와이어프레임 작성
- Project Card, Case Study, Media Block의 대표 상태 설계
- 접근성, 긴 한국어 텍스트, 미디어 비율 검토

완료 기준: 모든 주요 뷰포트에서 정보 위계와 읽기 순서가 확정되어 있다.

### 4단계: 프로젝트 기반 설정

- Next.js + TypeScript + Tailwind CSS 초기화
- App Router, 전역 레이아웃, 메타데이터, 디자인 토큰 설정
- 린트, 포맷, 타입 검사 및 기본 테스트 환경 설정
- Vercel 배포에 필요한 Node 버전과 빌드 명령 확인

완료 기준: 빈 페이지가 아니라 기본 레이아웃과 품질 검사 파이프라인이 정상 동작한다.

### 5단계: 데이터 모델과 공통 컴포넌트 구현

- 프로젝트 타입과 데이터 접근 함수 구현
- 공통 레이아웃, 내비게이션, 타이포그래피, 미디어 컴포넌트 구현
- 초안/공개 상태와 정렬 규칙 구현
- 샘플은 실제 확인된 콘텐츠만 사용

완료 기준: 콘텐츠 변경 없이도 데이터를 추가해 카드와 상세 라우트를 만들 수 있다.

### 6단계: 홈페이지 구현

- Hero, Featured Projects, Experience, Other Projects, Skills, Contact 구현
- 데이터가 없는 선택 섹션의 비노출 처리
- 반응형 레이아웃과 키보드 탐색 검증

완료 기준: 첫 화면과 프로젝트 카드만으로 주요 역할과 프로젝트 우선순위가 전달된다.

### 7단계: 동적 프로젝트 상세 페이지 구현

- `/projects/[slug]` 동적 라우트 구현
- Overview의 공통 메타정보, Context & My Role, 3~5개 사례, Result & Demo, What I Learned 렌더링
- 사례 목차, 앵커, 이전/다음 탐색 구현
- 존재하지 않거나 공개되지 않은 slug 처리

완료 기준: 세 프로젝트가 동일한 데이터 모델을 사용하면서 각 사례의 내용과 미디어를 유연하게 표현한다.

### 8단계: 미디어 제작과 최적화

- 공개 가능한 화면 캡처와 짧은 영상 편집
- Mermaid/구조도와 Before/After 제작
- 비식별화, 대체 텍스트, 캡션 작성
- 이미지 크기, 영상 용량, 지연 로딩 최적화

완료 기준: 미디어가 글을 장식하는 것이 아니라 각 사례의 문제·판단·결과를 설명한다.

### 9단계: 품질 검증

- TypeScript, lint, build, 테스트 실행
- Chrome/Safari 계열과 PC/Tablet/Mobile 레이아웃 확인
- 키보드, 스크린 리더 기본 흐름, 색상 대비, reduced motion 확인
- Lighthouse와 실제 네트워크 환경에서 성능 확인
- 오탈자, 빈 링크, 404, 메타데이터, OG 이미지, sitemap, robots 확인
- 모든 역할·성과·수치와 공개 가능 정보 최종 검수

완료 기준: 사실성, 접근성, 반응형, 성능, 링크가 배포 기준을 충족한다.

### 10단계: GitHub 및 Vercel 배포

- 단계별 커밋을 정리해 GitHub 원격 저장소에 push
- Vercel 프로젝트를 저장소와 연결
- 프로젝트 이름과 `seungwon9-portfolio.vercel.app` 도메인 사용 가능 여부 확인
- Production 빌드와 Preview 배포 검증
- 배포 후 실제 URL에서 미디어, 메타데이터, 모바일 동작 재확인

완료 기준: GitHub의 기본 브랜치와 Vercel Production 배포가 연결되고 공개 URL이 정상 동작한다.

---

## 13. 구현 전 준비가 필요한 자료

다음 항목은 실제 내용을 임의로 만들지 않기 위해 구현 전에 프로젝트별로 확인해야 한다.

- 공개용 프로젝트명과 slug
- 프로젝트 기간, 팀 구성, 대상 사용자, 운영/출시 상태
- 본인이 직접 수행한 책임과 협업 범위
- 문제 해결 사례 후보 3~5개와 각 사례에서 실제로 확인 가능한 단계별 근거
- 선택한 대안, 기각한 대안, 판단 기준
- 테스트 또는 검증 방식
- 결과 수치와 측정 기준, 또는 정성적 결과의 근거
- 사용 기술과 선택 이유
- 공개 가능한 화면, 영상, Mermaid/구조도, Before/After
- 회사 기밀 및 개인정보 비식별화 기준
- 경력, 기술, 연락처, 이력서, 외부 프로필 링크
- 원하는 지원 직무와 Hero 소개 문구

이 자료가 정리된 뒤 콘텐츠 작성과 시각 설계를 시작한다.
