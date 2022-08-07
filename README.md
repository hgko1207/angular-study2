# AngularJS

구글이 만든 단일 페이지 웹 애플리케이션 개발을 위한 자바스크립트 프레임워크입니다.
다양한 플랫폼에서 동작할 수 있게 하는 개발 툴과 기능들을 제공합니다.

## Angular Module

컴포넌트, 파이프, 서비스 등과 같은 앵귤러 애플리케이션의 주요 부분을 기능단위로 그룹핑 하게 해줍니다.

- 모든 앵귤러 애플리케이션은 하나의 Root Module을 가집니다.
- 여러 Feature Module을 가질 수 있습니다.
- 재사용할 수 있는 기능을 외부에 배포하기 위해 사용되기도 합니다.

## Component

- 빌딩 블록(LEGO)
- HTML 요소들의 그룹
- 뷰와 로직으로 구성

```bash
$ ng g c todo/todos --module todo/todo.module.ts --export
$ ng g c todos/todo --inline-template --inline-style
```

## Angular Template

- HTML 코드로서 템플릿을 표현합니다.
- Template 표현식(Expression)과 Template 문장(Statement)을 가집니다.
- 바인딩
  - 바인딩의 대상: 속성, 이벤트, ngModel, class, style

```html
<!-- {{ 템플릿 표현식 }} -->
<h1>{{title}}</h1>

<!-- [속성]="템플릿 표현식" -->
<todo [todo]="work"></todo>

<!-- (이벤트)="템플릿 문장(함수)" -->
<button (click)="handle()"></button>

<!-- [(ngModel)]="템플릿 문장" -->
<!-- 양방향 바인딩을 사용할 수 있음 -->
<input type="text" [(ngModel)]="name" />
```

## 컴포넌트 커뮤니케이션

- 부모 컴포넌트 -> 자식 컴포넌트

  - `@input()` 사용
  - ES6 setter 사용 가능
  - `@ViewChild()` 사용

- 자식 컴포넌트 -> 부모 컴포넌트
  - `@Output()` 사용
  - `EventEmitter` 사용하여 부모에게 이벤트 전달
  - 부모 컴포넌트는 `$event`로 이벤트의 데이터를 전달 받음
  - 자식이 부모 컴포넌트를 직접 주입받을 수 있음
