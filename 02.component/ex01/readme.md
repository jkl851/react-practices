### ex01: Property

1.  props(property)
    1.1) 컴포넌트의 데이터
    1.2) 부모 컴포넌트에서 자식으로 전달된다.
    | Component Communication(컴포넌트간의 통신)
    | Top -> Down
    1.3) 자식 컴포넌트에서는 변경 불가
    1.4) 부모가 소유한다.

2.  FoodList src/01 : 클래스 컴포넌트
3.  FoodList src/02 : Data Flow(top -> down) : 클래스 컴포넌트
4.  FoodList src/03 : Data Flow(top -> down) : 함수 컴포넌트
5.  FoodList src/04 : validation

설치 :
$ npm i -D webpack webpack-cli babel-loader webpack-dev-server style-loader css-loader sass-loader node-sass @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom prop-types

설정:
babel: babel.config.json
webpack: webpack.config.js

package.json의 스크립트 추가하기

    "scripts": {
    "debug": "npx webpack serve --progress --mode development --env"
    }

실행:
npm run debug src= 01 | 02 | 03 ... no
