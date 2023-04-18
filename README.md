# Grano_Frontend 과제

## NFT 거래소 홈 개발

### 프로젝트 구조

- Next.js의 React 보일러플레이트를 바탕으로 한 폴더구조로 개발을 진행했습니다.
- Pages 폴더는 페이지 화면들로 구성되어 있으며, Router를 통해 src의 실제 Container 화면들로 이동하는 구조입니다.
- public 폴더에는 프로젝트에서 사용한 폰트, 이미지가 위치합니다.
- src/commons 에는 MetaMast 연결을 위한 injectedConnector.ts 정의 코드와 globalStyles, media query, 코드의 타입 등이 위치합니다.
- src/components는 공통 컴포넌트인 commons와 일반 컴포넌트인 units로 나뉘며, commons에는 layout, contactWallet, NFTCard 가 위치합니다.

### 기타 사항

- 피그마 디자인 가이드에 따라 UI를 구현했습니다.
- 요구사항을 준수하여 제시된 문제의 모든 기능을 구현했습니다.
- 중복코드를 최소화 하기 위해 공통 코드 및 함수는 공통 컴포넌트로 개발하였습니다.
- 직관적인 메서드 및 변수명을 사용했습니다.
- navigation 클릭 이벤트 선택에 따른 navigation 메뉴 강조 border가 새로고침 시에도 유지되도록 했습니다.
- 페이지를 닫고 다시 접속했을 때는 메인 화면인 All Page로 렌더링 되도록 구현했습니다.
- 사용자 경험을 위해 Media query를 사용하여 pc, 태블릿, 모바일 3가지의 반응형으로 개발하였습니다.
- eslint를 적용하여 타입 에러등의 이슈를 방지했습니다.
