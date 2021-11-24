ex08: JSX Tutorials

1.  특징1: HTML과 차이점
2.  특징2: Single Root node
3.  JSX 함수 컴포넌트 만들기
4.  Pure React(React API)로 컴포넌트 작성하기
5.  클래스 컴포넌트 만들기
6.  특징3: JSX 표현식 표기법(expression)과 문제점
7.  특징4: 공백
8.  Dynamic HTML
9.  Comment

설치 :
$ npm i -D webpack webpack-cli babel-loader webpack-dev-server style-loader css-loader sass-loader node-sass @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom

설정:
babel: babel.config.json
webpack: webpack.config.js

package.json의 스크립트 추가하기

    "scripts": {
    "debug": "npx webpack serve --progress --mode development --env"
    }

실행:
npm run debug src= 01 | 02 | 03 ... no
