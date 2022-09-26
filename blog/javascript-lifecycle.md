---
slug: JavaScript의 생명주기(Scope)
title: JavaScript의 생명주기(Scope)
authors: [minsgy]
tags: [JavaScript, DeepDive, Study]
---

## 서론

JavaScript 생명주기인 **스코프(Scope)가 적용되는 이유**를 통해 우리가 어떤 코드를 작성할 수 있는지 고민할 수 있습니다. 전역적으로 사용 할 수 있는 이유와 어떤 생명주기까지 고려를 하고 만들어야 우리가 유지보수가 좋은 코드를 짤 수 있는지 알아보기 위해 작성했습니다.


## JavaScript 생명주기

JavaScript에서 사용되는 변수나 함수 등 생성되고 소멸되는 일정한 사이클이 존재합니다. 이렇게 JavaScript에서 생성 된 **변수나 함수를 사용할 수 있는 범위를 스코프(Scope)** 라고 칭합니다.

```javascript
var x = 'global'; 

function foo () { 
	var x = 'function scope';
	console.log(x);
} 

foo(); // ? 
console.log(x); // ?
```

위와 같은 예제처럼 `x`가 2번 선언되는 경우, JavaScript에서는 어떻게 구분할 수 있을까요?

바로 **스코프(Scope)** 를 통해 `foo()` 함수 내에 선언 된 `x`는 내부에서만 참조할 수 있으며 최상단 선언 된 변수 `x`의 경우 어디에든 참조해서 사용할 수 있습니다. 이러한 스코프 규칙을 통해서 JavaScript 생명 주기를 관리할 수 있고 **전역 스코프(Global Scope)** 와 **지역 스코프(Local Scope)** 로 나눌 수 있습니다.


### 전역 스코프(Global Scope)와 지역 스코프(Local Scope)

전역에 변수를 선언하면 이 변수는 어디서든지 참조할 수 있는 전역 스코프를 갖는 전역 변수가 됩니다. `var` 키워드로 선언한 전역 변수는 [전역 객체(Global Object)](https://poiemaweb.com/js-built-in-object#21-%EC%A0%84%EC%97%AD-%EA%B0%9D%EC%B2%B4global-object) `window`의 프로퍼티입니다.

```js

var global = 'minsgy';
function foo() { 
	var local = 'msg';
	console.log(global);
	console.log(local);
} 
foo(); // minsgy msg

console.log(global); // minsgy
console.log(local); // Uncaught ReferenceError: local is not defined

```

변수 `global`은 함수 영역 밖에서 선언되어 사용할 수 있지만 변수 `local`은 스코프가 종료되어 정의가 구현되지 않습니다. 다음 예시를 통해 함수 내에 존재하는 내부 함수를 살펴보겠습니다.

```js
var x = 'global';
function foo() { 
	var x = 'local'; 
	console.log(x); // local
	function bar() { // 내부함수
		console.log(x); // local
	} 
	bar(); 
} 

foo(); 
console.log(x); // global
```

내부 함수는 자신을 포함하고 있는 외부함수의 변수에 접근할 수 있다는 특징이 있습니다. 이는 매우 유용하게 사용할 수 있습니다. [클로저](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures)에서와 같이 내부함수가 더 오래 생존하는 경우 다른 언어와는 다르게 작동하게 됩니다. 

결과적으로 함수 `bar`에서 참조하는 `x`는 함수 `foo`에서 선언 된 지역변수입니다. 이는 스코프 체인에 의해 참조 순위가 전역 변수 `x`가 뒤로 밀린 상태이기 때문에 재할당되어 `local` 값이 적용되게 됩니다.

그리고 선언 된 위치에 의해 따라 생명 주기가 달라집니다. **이를 렉시컬 스코프(Lexical Scope)** 라고 합니다.


### 렉시컬 스코프(Lexical Scope)

```js
var x = 1; 

function foo() { 
	var x = 10; 
	bar(); 
} 

function bar() { 
	console.log(x); 
} 

foo(); // 1 
bar(); // 1
```

위 코드를 통해 두 가지 경우를 유추할 수 있습니다. 

> 함수를 어디서 호출하였는 지? 동적 스코프(Dynamic scope)
> 함수를 어디서 선언하였는 지? 렉시컬 스코프(Lexical Scope)

여기서 JavaScript는 기본적으로 렉시컬 스코프를 따르므로 **함수가 선언 된 시점에 상위 Scope가 결정**되게 됩니다.

결과적으로 함수를 어디에서 호출하였는지 스코프 결정에는 아무런 의미도 주지 않으며 예제와 같이 함수 `bar`는 전역에 선언되어서 전역 변수 값 `x = 1`을 2번 출력하게 됩니다.









### 전역 변수
