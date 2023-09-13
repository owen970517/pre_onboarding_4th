# 원티드 프론트엔드 프리온보딩 인턴십 4주차 과제 (개인)

## 과제 목표 
-  주어진 데이터를 기반으로 시계열 차트 만들기
-  마우스 호버 시 id, value_area, value_bar 데이터를 튤팁 형태로 제공
-  필터링 기능 구현
    - 특정 구역 클릭 시 하이라이트 효과 

## 배포 주소

  🔗 https://pre-onboarding-12th-4-zeta.vercel.app

## 실행 화면
<div align="center" >
    <img src='https://github.com/owen970517/pre_onboarding_4th/assets/75247323/6f7a990e-41e5-4053-829b-a0443538a638' width='600px' height='600px'/>
</div>

## 실행 방법

- git clone https://github.com/owen970517/pre_onboarding_4th.git
- npm install
- npm start

## 사용 라이브러리

- React
- TypeScript
- recharts
- styled-components
- axios
- react-router-dom

## Recharts의 장단점
- 장점
    - 코드의 양이 적음
    - React 기반으로 만들어져 호환성이 좋음
    - 각각의 요소들이 컴포넌트로 구성되어 있어 읽고 이해하는 데 쉬워 어려움 없이 사용 가능
    - SVG 요소에 대해 pure component가 적용되어 있어, 성능 최적화에 좋음

- 단점
    - TypeScript와 관련된 자료 부족
        - TooltipProps, DotProps를 제공해주는 것 같은데 이에 관한 자료가 없음 
    - 다양한 차트 타입과 기능을 제공해주기 때문에 패키지가 무거움
            

## 디렉토리 구조
```
📦src
 ┣ 📂apis
 ┣ 📂components
  ┣ 📂Customized
  ┣ 📂FilterButton
 ┣ 📂constants
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂styles
 ┣ 📂types
 ┣ 📂utils
 ```


