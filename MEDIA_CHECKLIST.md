# 포트폴리오 미디어 촬영 체크리스트

이 문서는 Home의 Featured Project 카드와 세 프로젝트 상세페이지의 실제 화면·영상 교체를 위한 기준이다. 아직 실제 파일이 없으므로 사이트의 placeholder는 유지한다.

## 저장 및 촬영 공통 기준

- 이미지는 가능하면 `WebP`, 영상은 웹 호환 `MP4(H.264)`로 내보낸다.
- 이미지 원본은 최소 1600px 너비를 권장한다. 모바일 앱 원본은 9:16 세로 비율을 유지한다.
- 영상은 핵심 동작만 8~15초로 자르고, 입력 대기나 반복 구간은 제외한다. 소리는 없어도 이해되도록 촬영한다.
- 마우스 포인터, 터치 위치, 성공·차단 결과가 필요한 영상은 동작이 보이도록 천천히 진행한다.
- 실제 고객명, 사용자명, 이메일, 전화번호, 주문번호, 단가, 주소, 현장명, 연구 참여자 정보는 촬영 전에 테스트 데이터로 교체한다.
- API URL, 토큰, 인증 헤더, 콘솔, 네트워크 패널, 로컬 경로, 내부 서버 주소는 노출하지 않는다.
- 잘라내기만으로 민감정보를 숨기기 어려우면 촬영 단계에서 테스트 계정과 비식별 데이터를 사용한다. 사후 블러에만 의존하지 않는다.

## 제조업체 ERP

저장 위치: `public/projects/manufacturing-erp/images/`, `public/projects/manufacturing-erp/videos/`

| 우선순위 | 추천 파일명 | 형식 | 들어갈 위치 | 촬영 내용 | 범위 | 권장 비율·방향 | 전달할 메시지 | 촬영 주의사항 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P0 | `erp-overview.webp` | 이미지 | Home ERP 카드, 상세 Overview | 전체 메뉴와 주문·생산·자재·재고·납품 중 주요 모듈이 함께 보이는 화면 | 전체 화면 | 16:9 가로, Home 안전영역 중앙 | 분산된 제조 업무를 하나의 ERP 흐름으로 구조화했다 | 거래처명, 주문번호, 현장명, 담당자, 수량·단가 비식별화 |
| P0 | `erp-master-data.webp` | 이미지 | My Contribution 근거, Result & Demo | 제품군·제품규격 목록과 활성 상태, 상하위 관계를 확인할 수 있는 기준정보 화면 | 전체 또는 주요 패널 | 16:9 또는 3:2 가로 | 여러 업무가 공유하는 기준정보를 먼저 구현했다 | 실제 제품명·규격·내부 코드가 기밀이면 테스트 데이터 사용 |
| P1 | `erp-material-rule.webp` | 이미지 | Problem Solving Case 02, Result & Demo | 제품별 자재구성이나 제품규격과 자재 관계가 보이는 화면 | 관계가 보이는 부분 화면 | 3:2 가로 | 공통 데이터 관계를 실제 기능으로 연결했다 | 자재 단가, 공급처, 원가, 내부 품번 제거 |
| P0 | `erp-validation.webp` | 이미지 | Problem Solving Case 03, Result & Demo | 활성 하위 데이터가 남아 있어 상위 기준정보 비활성화가 차단된 메시지와 대상 행 | 부분 화면 | 4:3 또는 3:2 가로 | 단순 CRUD가 아니라 업무 규칙과 데이터 정합성을 반영했다 | 메시지 주변의 실제 사용자·업체 정보까지 함께 확인 |
| P1 | `erp-validation-flow.mp4` | 영상 | Result & Demo | 상위 데이터 비활성화 시도 → 차단 확인 → 하위 데이터 정리 후 변경 가능 흐름 | 동작 중심 | 16:9 가로, 8~15초 | 검증 규칙이 실제 UI 동작으로 이어진다 | 삭제·변경은 복제 데이터에서 실행하고 알림·OS 정보 노출 방지 |

ERP 화면은 실제 거래처명, 단가, 주문번호, 현장명, 주소, 담당자 및 개인정보를 반드시 비식별화한 뒤 촬영한다.

## 인지훈련 게임 20종

저장 위치: `public/projects/cognitive-games/images/`, `public/projects/cognitive-games/videos/`

| 우선순위 | 추천 파일명 | 형식 | 들어갈 위치 | 촬영 내용 | 범위 | 권장 비율·방향 | 전달할 메시지 | 촬영 주의사항 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P0 | `cognitive-launcher.webp` | 이미지 | 상세 Overview, Result & Demo, Home 대안 | 여러 인지훈련 게임을 선택할 수 있는 전체 런처 | 전체 화면 | 16:9 가로 | 20종 콘텐츠가 하나의 실행 구조로 관리된다 | 연구용 명칭·내부 URL·사용자 식별정보 확인 |
| P0 | `train-manager.webp` | 이미지 | Home 카드 1순위, Result & Demo | 이동·신호·충돌 요소가 함께 보이는 대표 플레이 순간 | 게임 영역 중심 | 16:9 가로 | 실시간 입력과 판정이 있는 대표 게임 로직을 구현했다 | 디버그 HUD, FPS, 내부 테스트 값 제거 |
| P0 | `train-manager-demo.mp4` | 영상 | Result & Demo | 이동 → 신호 반응 → 충돌 또는 판정 결과가 보이는 짧은 플레이 | 게임 전체 | 16:9 가로, 8~12초 | Phaser3 기반 실시간 게임 동작을 빠르게 보여준다 | 실패·성공 흐름이 한 번에 이해되도록 테스트 시나리오 고정 |
| P1 | `remember-blocks-memory.webp` | 이미지 | Result & Demo | 블록 위치나 순서를 기억하는 단계 | 게임 영역 중심 | 16:9 가로 | 기억 단계의 상태와 제한된 정보 제시를 구현했다 | 정답을 불필요하게 노출하지 않고 테스트 계정 사용 |
| P1 | `remember-blocks-rebuild.webp` | 이미지 | Result & Demo, 기억/재구성 비교 | 사용자가 기억한 블록을 재구성하는 단계 | 게임 영역 중심 | 16:9 가로 | 기억 → 재구성 → 비교로 이어지는 상태 전환을 보여준다 | memory 화면과 같은 난이도·세션으로 촬영 |
| P1 | `touch-animal-cards.webp` | 이미지 | Result & Demo | 조건에 따라 반응 여부를 판단하는 카드 플레이 화면 | 게임 영역 중심 | 16:9 가로 | 자극 조건과 사용자 반응 판정 로직을 구현했다 | 라이선스가 불명확한 이미지 자산은 공개 전 사용 범위 확인 |
| P1 | `sacogtest.webp` | 이미지 | Result & Demo | 통합 인지검사의 진입 또는 검사 구성 화면 | 전체 화면 | 16:9 가로 | 개별 게임 외 통합 검사 흐름도 개발했다 | 의료·연구 문구, 참여자 ID, 검사 결과와 건강정보 비식별화 |

## CatchVoca AI 단어장

저장 위치: `public/projects/catchvoca/images/`, `public/projects/catchvoca/videos/`

| 우선순위 | 추천 파일명 | 형식 | 들어갈 위치 | 촬영 내용 | 범위 | 권장 비율·방향 | 전달할 메시지 | 촬영 주의사항 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P1 | `catchvoca-main.webp` | 이미지 | 상세 Overview | 텍스트·PDF/이미지·URL 입력 방식을 선택할 수 있는 메인 화면 | 모바일 전체 화면 | 9:16 세로 | 여러 학습 자료가 하나의 분석 흐름으로 진입한다 | 로그인 이메일, 최근 파일명, 실제 URL 제거 |
| P1 | `catchvoca-input.webp` | 이미지 | Result & Demo | 언어 선택과 텍스트 또는 파일·URL 입력 상태 | 모바일 전체 화면 | 9:16 세로 | 분석 전에 필요한 사용자 입력을 명확히 구성했다 | 업로드 문서 내용·파일명·개인 URL은 샘플 데이터 사용 |
| P2 | `catchvoca-loading.webp` | 이미지 | Result & Demo 보조 | 분석 요청 후 Loading 상태와 안내 문구 | 부분 또는 전체 화면 | 9:16 세로 | 비동기 분석 중 사용자 상태를 안내한다 | Home 대표 이미지로 사용하지 않음, 시스템 알림 숨김 |
| P0 | `catchvoca-wordbook.webp` | 이미지 | Home 카드 1순위, Result & Demo | 생성된 단어장과 여러 단어가 실제로 보이는 목록 | 모바일 전체 화면 | 원본 9:16, Home용 16:10 안전영역 고려 | AI 분석 결과가 실제 학습 가능한 단어장으로 연결된다 | 사용자명·단어장 소유자·민감한 학습 자료 제거 |
| P1 | `catchvoca-word-detail.webp` | 이미지 | Result & Demo | 뜻, 품사, 예문, 번역, 발음, 동의어·반의어가 보이는 상세 화면 | 모바일 전체 화면 | 9:16 세로 | 생성된 단어가 풍부한 학습정보로 제공된다 | 저작권이 있는 긴 예문은 짧은 테스트 문장 사용 |
| P1 | `catchvoca-multi-select.webp` | 이미지 | Problem Solving Case 03, Result & Demo | 여러 단어가 선택된 상태와 가능한 관리 액션 | 모바일 전체 화면 | 9:16 세로 | 생성 이후 실제 정리·관리까지 이어진다 | 선택된 단어에 개인 문서 유래 정보가 없는지 확인 |
| P1 | `catchvoca-favorite-result.webp` | 이미지 | Result & Demo | 선택 단어가 즐겨찾기 단어장으로 이동된 결과 | 모바일 전체 화면 | 9:16 세로 | 학습할 단어를 다시 모아 활용할 수 있다 | 계정 정보와 내부 식별자 노출 금지 |
| P0 | `catchvoca-create-demo.mp4` | 영상 | Result & Demo | 입력 → 분석 요청 → Loading → 생성된 단어장 확인 | 모바일 세로 화면 | 9:16 세로, 10~15초 | AI Backend 응답을 완결된 Flutter 사용자 흐름으로 연결했다 | API 로그·토큰·실제 파일 내용 없이 Demo 환경에서 촬영 |
| P1 | `catchvoca-organize-demo.mp4` | 영상 | Result & Demo | 다중 선택 → 즐겨찾기로 이동 → 결과 확인 | 모바일 세로 화면 | 9:16 세로, 8~12초 | 단어장 생성 후 관리와 학습 활용까지 구현했다 | 테스트 계정과 샘플 단어장 사용, 알림의 이메일 확인 |

현재 운영 Backend는 종료되었으므로 영상은 기존 API 응답 구조를 기반으로 복원한 포트폴리오 Demo 환경에서 촬영하고, 이를 원래 운영 기능의 현재 상태처럼 표현하지 않는다.

## Home Featured Project 대표 이미지

| 프로젝트 | 1순위 파일 | 대안 | 권장 크롭 | 선택 이유 | 피해야 할 화면 |
| --- | --- | --- | --- | --- | --- |
| 제조업체 ERP | `erp-overview.webp` | `erp-master-data.webp` | 16:9 또는 16:10 가로, 주요 메뉴 중앙 | 주문부터 납품까지 이어지는 업무 시스템의 규모를 한눈에 보여준다 | 작은 팝업만 있는 화면, 빈 목록, 단순 Loading |
| 인지훈련 게임 20종 | `train-manager.webp` | `cognitive-launcher.webp` | 16:9 가로, 플레이 요소 중심 | 대표 게임의 상호작용을 보여주거나 20종 전체 범위를 전달한다 | 설정 화면만 있는 장면, 글자만 있는 검사 안내 |
| CatchVoca | `catchvoca-wordbook.webp` | `catchvoca-word-detail.webp` | 세로 원본의 핵심 UI를 16:10 안전영역 안에 배치 | 분석 결과가 실제 학습 단어장으로 이어진다는 핵심을 보여준다 | Loading 화면, 빈 입력 폼, 로그인 화면 |

## 실제 파일 연결 방법

- Home 카드: 각 프로젝트의 `cardMedia.src`에 `/projects/.../images/파일명.webp`를 입력한다.
- 상세 Overview: `overviewMedia.src`를 실제 대표 이미지 경로로 교체한다.
- 상세 Result & Demo: 같은 `id`의 `resultAndDemo.media` 항목에 이미지 또는 영상 `src`를 입력한다.
- 영상 썸네일이 필요하면 해당 video 항목의 `poster`에 같은 프로젝트의 이미지 경로를 입력한다.
- 실제 해상도에 맞춰 image 항목의 `width`, `height`를 선택적으로 기록한다.
- Problem Solving 안에 실제 화면을 추가할 때는 기존 `media` 배열에 image 항목을 추가하고 `placement`로 `problem`, `decision`, `implementation`, `evidenceResult` 중 위치를 지정한다.

`ProjectMedia`는 이미지, 영상, poster, Before/After, 구조도와 단계별 배치를 이미 지원한다. 이번 준비에서는 Home 카드용 `cardMedia`만 선택적으로 추가했으며, 실제 `src`가 없으면 기존 placeholder가 그대로 표시된다.
