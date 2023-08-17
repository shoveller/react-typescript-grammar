export {}
/**
 * 타입 집합에서 일부 타입을 선택적으로 받을 수 있습니다.
 * 타입 어노테이션 앞에 ? 를 붙이면 선택사항이 됩니다.
 * 아래의 타입은 문자열 프로퍼티를 선택적으로 받는 객체를 표현합니다.
 */
type A = {
    숫자: number
    문자열?: string
}

/**
 * 위 표현은 아래의 표현과 비슷합니다.
 */
type A1 = {
    숫자: number
    문자열: string | undefined
}

let a: A = { 숫자: 0 }
a = { 숫자: 0, 문자열: '' }
a = { 숫자: 0, 문자열: '', v: 0 }



/**
 * 선택적으로 매개변수를 받는 함수를 표현할 수도 있습니다.
 */
const 함수 = (a: number, b?: string) => {
    console.log(a, b)
}

/**
 * 위 표현은 아래의 표현과 비슷합니다.
 */
const 함수1 = (a: number, b: string | undefined) => {
    console.log(a, b)
}

함수(1)
함수(1, '')
