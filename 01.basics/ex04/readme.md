ex04: 어플리케이션 번들링(Bundling)

1. webpack은 작게 분리된 많은 어플리케이션 모듈(js, css, images, font)들의 의존성을 분석해서 하나의 js파일로 묶은 도구
2. 하나의 js 파일을 번들(Bundle)이라하고 묶는 작업을 번들링(Bundling)이라고 한다.
3. 번들링은 단순히 모듈들을 하나의 파일로 묶는 작업만을 의미하지 않는다.
4. 빌드 작업
   1). lintint(ESLint, 문법체크) 작업
   2). document 작업(JDoc)
   3). test(Mocha, Jest) 작업
   4). 난독화/압축(Uglyfy) 작업
   5). 번들링
5. 자바스크립트 뿐만 아니라 다양한 assets(image, css, font)들도 모듈로 취급을 한다.
6. 설치
   $ npm i -D webpack webpack-cli
   $ npm .\node_modules\.bin\webpack --version
   $ npx webpack --version

7. public에 main.js 자동 생성 설정

- package.json에 추가
  "build": "npx webpack ./src/index.js -o ./public"
- 콘솔 실행
  $npm run build
