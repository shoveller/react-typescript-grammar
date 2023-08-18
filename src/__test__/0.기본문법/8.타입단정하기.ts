export {}

/**
 * 변수 하나의 타입이 2개 이상일 가능성이 있을때,
 * Narrowing 으로 값을 좁히는 것이 가장 이상적이지만
 * 개발자의 재량으로 타입을 단정지을 수도 있습니다.
 * 이것을 Asserion 이라고 합니다.
 * 특히 타입스크립트로 dom을 다룰 때 유용하게 사용할 수 있습니다.
 */

/**
 * 13번 째 줄의 오른쪽에 아래의 키워드를 복사/붙여넣기 해 보세요.
 *  as HTMLDivElement 
 */
const root = document.getElementById('#root')
root.innerText ='리액트'


/**
 * 특정 변수가 null이 아님을 단정하기만 한다면 ! 를 사용할 수도 있습니다.
 * 13번 째 줄의 오른쪽에 ! 를 추가해 보세요.
 */
const root1 = document.getElementById('#root')
root1.innerText ='리액트'