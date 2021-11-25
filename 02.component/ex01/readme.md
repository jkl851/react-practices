### ex01: Property

1.  props(property)

2.  FoodList src/01 : 클래스 컴포넌트
3.  FoodList src/02 : Data Flow(top -> down) : 클래스 컴포넌트
4.  FoodList src/03 : Data Flow(top -> down) : 함수 컴포넌트
5.  클래스 컴포넌트 만들기
6.  FoodList src/04 : validation

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
