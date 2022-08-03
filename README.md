# AngularJS

구글이 만든 단일 페이지 웹 애플리케이션 개발을 위한 자바스크립트 프레임워크
다양한 플랫폼에서 동작할 수 있게 하는 개발 툴과 기능들을 제공

## Component

컴포넌트 기반 개발 방법

## Module

세부 구현이 숨겨지고 공개 API를 이용해 다른 코드에서 재사용 가능한 코드

## Angular Module

컴포넌트, 파이프, 서비스 등과 같은 앵귤러 애플리케이션의 주요 부분을 기능단위로 그룹핑 하게 해준다.

- 모든 앵귤러 애플리케이션은 하나의 Root Module을 가진다.
- 여러 Feature Module을 가질 수 있다.
- 재사용할 수 있는 기능을 외부에 배포하기 위해 사용되기도 한다.

```bash
$ ng g c todo/todos --module todo/todo.module.ts --export
```
