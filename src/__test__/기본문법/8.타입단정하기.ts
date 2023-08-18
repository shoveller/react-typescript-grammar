export {}

/**
 * 타입스크립트의 분석 결과,
 * 타입이 2개 이상일 가능성이 있을때,
 * Narrowing 으로 값을 좁히는 것이 가장 이상적이지만
 * 개발자의 재량으로 타입을 단정지을 수도 있습니다.
 * 특히 타입스크립트로 dom을 다룰 때 유용하게 사용할 수 있습니다.
 */

document.getElementById('#root')?.innerText ='리액트'

as HTMLElement