# Webpack



![1](img/1.png)

Webpack은 한마디로 **자바스크립트 어플리케이션을 위한 정적 모듈 번들러**라고 설명할 수 있다. 즉, 여러 의존 관계에 있는 모듈들을 하나의 js 파일로 번들링(bundling)하는 역할을 수행한다.

플러그인을 끼우면 번들링 뿐만 아니라 훨씬 확장적인 기능을 사용할 수도 있다.



![2](img/2.png)



- Webpack은 컴파일 과정을 통해 의존관계에 있는 모듈을 엮어서 하나의 번들 파일로 반환한다 



![3](img/3.png)

- 엔트리 파일이 여러 개일 때의 컴파일 과정



컴파일 명령어에 `--watch` 옵션을 사용하면 모듈 파일이 변경될 때마다 변경된 모듈을 자동으로 다시 컴파일한다.

```
webpack --watch ./entry.js bundle.js  
```



### 모듈의 스코프

컴파일 과정에서 각 모듈은 함수로 감싸진다. 예를 들어 다음 코드에서 `greeting` 변수는 전역 변수지만 webpack으로 모듈이 컴파일된 뒤에는 지역 변수가 된다.

```javascript
var greeting = require('./hello') + require('./world');

module.exports = greeting;  
```

다음은 위의 모듈을 컴파일해서 생성된 번들 파일의 내용이다. 모듈을 작성할 때 모듈의 변수가 전역 변수가 되는 것을 피하려 함수로 변수를 감쌀 필요가 없다.

```javascript
...
/* 1 */
/***/ function(module, exports, __webpack_require__) {
    var greeting = __webpack_require__(2) + __webpack_require__(3);
    module.exports = greeting;

/***/ },
...
```



### 설정 파일 사용

CLI(command line interface)로 webpack을 실행해 컴파일할 때 엔트리 파일이 많거나 옵션이 많으면 입력하기 불편하다. 설정 파일을 만들어 컴파일하면 이런 불편을 줄일 수 있다.

webpack 설정 파일의 기본 형태는 다음과 같다.

```javascript
module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.js'), // 엔트리 파일 목록
    output: {
        path: path.resolve('public'), // 번들 파일 폴더
        filename: 'bundle.js' //  '[name].bundle.js' 번들 파일 이름 규칙
    },
    module: {
        rules: [{
            test: /\.css$/i, // .css 로 끝나는($) 모든 파일
            use: ['style-loader', 'css-loader']
        }]
    },
    devServer: {
        //contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 9999,
        //inline: true,
        liveReload: true,
        hot: false,
        compress: true
    }
}
```

위와 같은 형태로 **webpack.config.js** 파일을 작성해 저장한다. 설정 파일이 있는 디렉터리에서 다음과 같이 간단하게 명령어를 입력하면 컴파일을 실행한다.

```
webpack  
```

`--watch` 옵션으로 변경 사항을 자동으로 반영하려 할 때도 다음과 같이 간단한 명령어만 입력하면 된다.

```
webpack --watch  
```

webpack을 사용할 때는 다양한 설정을 함께 사용하는 경우가 대부분이라 설정 파일로 컴파일하는 사례가 많다.



## 장점

Webpack을 사용함으로써 우리가 얻을 수 있는 이점은 다음과 같다.

- 의존 모듈이 하나의 파일로 번들링되기 때문에 별도의 모듈 로더가 필요 없다.
- html 파일에서 script 태그로 다수의 자바스크립트 파일을 로드해야 하는 번거로움을 줄일 수 있다.

- 모듈 시스템 관리
- 로더 사용
- 빠른 컴파일





# SASS

![4](img/4.png)

- CSS를 효율적으로 작성할 수 있도록 도와주는 전처리기( CSS Preprocessor) 이다.
- 기존의 CSS의 유지보수의 불편함 등을 SASS를 사용하면 해결 할 수 있다.
- 위에서 언급한 CSS의 단점을 보완하기 위한 기술로, SASS 자체를 그대로 사용할수는 없고, SASS의 문법에 맞게 SASS파일을 만들면 컨버터를 이용해서 CSS를 생성한다.
- 즉, SASS문법에 맞게 CSS를 작성하고, SASS 컴파일러를 사용하여 HTML이 이해 할 수 있는 문법으로 변환한다.

## SASS 장점

1. autoprefixer 를 제공한다.
2. 코드중복을 줄일수 있다.
3. 변수를 사용 할 수 있기 때문에 유지보수가 쉬워진다.
4. @import, @include, @mixin, @extend 등 다양한 함수 및 변수를 제공한다

## SASS vs SCSS

Sass(Syntactically Awesome Style Sheets)의 3버전에서 새롭게 등장한 SCSS는 CSS 구문과 완전히 호환되도록 새로운 구문을 도입해 만든 Sass의 모든 기능을 지원하는 CSS의 상위집합(Superset) 이다.
즉, SCSS는 CSS와 거의 같은 문법으로 Sass 기능을 지원한다는 말이다.
Sass는 선택자의 유효범위를 ‘들여쓰기’로 구분하고, SCSS는 {}로 범위를 구분한다.

**CSS**

```css
/**CSS Syntax**/

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

**SASS**

```scss
/**Sass Syntax**/

nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none
```



