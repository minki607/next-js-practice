넥스트 JS 배워보기

예전부터 꼭 배워보고 싶은 Next JS 프레임워크에 드디어 입문했다.
React 자체적으로도 SSR (서버 사이드 렌더링)이 가능하긴하지만 생각보다 복잡하기 때문에 넥스트 JS는 꼭 배워두면 좋겠다고 생각했었다.

SSR이외에도 코드 분활 (Code Splitting), 라우팅 (Automatic Routing)등이 대표적인 장점이라고 한다. 대충 감은 오지만 정확한건 직접 간단한 프로젝트를 진행하면서 이해해보려고 한다.

기본적으로 Node JS와 npm 또는 yarn이 설치되어있다는 가정하에
CLI 툴을 통해 손쉽게 next 앱을 만들수 있다.

```
  npx create-next-app
  # 또는
  yarn create-next-app
```

조금 기다려보면 아래와 같이 폴더가 세팅되어있다.

![폴더 구조](readme-image/structure.png)

사실 `npx create-react-app`을 통해 만든 리액트 앱이랑 큰 차이는 없어보인다.

♦ .next

- build/배포시 필요한 파일들이 담겨있는 폴더

♦ components

- 재활용 가능한 제일 작은 단위의 컴포넌트
- 필요시 containers, layout등 더 큰단위의 컴포넌트들로 세분화 시킴

♦ pages

- 넥스트앱이랑 리액트앱의 가장 큰 차이인것 같다. 넥스트 js는 라우트를 내장하고 있기 때문에 pages에 파일을 생성하게되면 그 파일명이 라우트가 된다. 이게 아까 언급했던 Automatic Routing인것 같다. 더 자세한것 프로젝트를 진행하면서 다뤄보겠다.

  ✔︎ index.js
  브라우저에 랜더링 되어야할 내용들이 적히는곳

  ✔︎ \_app.js

  - 메인 엔트리 포인트 (앱내에 공통적으로 적용될 레이아웃이 있다면 여기에)

  ✔︎ api

  - 앱내에 반복적으로 사용될 api들

♦ styles

- 스타일 관련 (css)

♦ next.config.js

- next js 환경 설정 파일 (sass 모듈 등 설정)

---

공식문서와 여러 블로그를 읽어보면서 데이터를 불러오는 방식에서 큰 차이가 있음을 느꼈고 자세히 알아보기위해 진부하지만 연습용으로 JSON placeholder API를 사용해 포스트를 가져오는 작업을 진행해보았다.

To be continued
