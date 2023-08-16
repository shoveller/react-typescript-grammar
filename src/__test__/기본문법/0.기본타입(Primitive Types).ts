/**
 * 0. 타입(Type)이란?
 * 데이터를 읽고 쓰는 방식에 이름을 붙인 것입니다.
 * 언어에 타입이 있으면 컴퓨터의 지원을 더 많이 받을 수 있습니다.
 * 타입스크립트의 기본 타입은 아래와 같습니다.
 * 
 * number: 숫자 타입
 * string: 문자열 타입
 * boolean: 불리언 타입
 * null: null 타입
 * undefined: undefined 타입
 * symbol: 심볼 타입
 * bigint: 큰 정수 타입
 */


/**
 * 2. 타입 어노테이션(Type Annotation)
 * 타입스크립트 컴파일러에게 타입 힌트를 주는 방법입니다.
 * 변수나 함수 왼쪽에 : 를 붙여서 사용합니다.
 */
let 숫자에_타입어노테이션: number = 0

/**
 * 1. 타입 추론
 * 타입스크립트는 결과를 보고 원인을 파악하는 기능을 가지고 있습니다.
 * 이것을 Type Inference(=추론)라고 합니다.
 * 등호를 기준으로 왼쪽을 추론합니다.
 * vscode를 비롯한 기타 IDE들이 이 기능을 적극적으로 지원합니다.
 * 개발자는 CMD 키나 ctrl 키를 누른 상태로 변수 위에 마우스를 올려서 컴파일러가 추론한 결과물을 이용할 수 있습니다.
 */

let 등호를_기준으로_왼쪽을_추론하는_예 = 0

/**
 * 3. number
 * 자바스크립트에서 사용하는 모든 부동소숫점 값을 표현합니다.
 * unknown 대신에 적절한 타입 어노테이션을 입력해 보세요.
*/  
let 정수: unknown = 6
let 부동소숫점: unknown = 3.14
let 무한: unknown = Infinity
let nan: unknown = NaN
let 생성자함수숫자: unknown = new Number(0).valueOf()

/**
 * 4. string
 * 자바스크립트에서 사용하는 모든 문자열 값을 표현합니다.
 * unknown 대신에 적절한 타입 어노테이션을 입력해 보세요.
*/  
let 작은따옴표문자열: unknown = '작은거'
let 큰따옴표문자열: unknown = "큰거"
let 템플릿문자열: unknown = `이건 ${큰따옴표문자열}.`
let 생성자함수문자열: unknown = new String('생성자함수').valueOf()

/**
 * 5. boolean
 * 참(true) 과 거짓(false)을 표현합니다.
 * 자바스크립트에서 사용했던 Falsy 와 Trusy를 대체합니다.
 * unknown 대신에 적절한 타입 어노테이션을 입력해 보세요.
*/
let 참: unknown = true
let 거짓: unknown = false