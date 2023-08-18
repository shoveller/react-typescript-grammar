export {}
/**
 * 인터페이스(interface)란?
 * 타입스크립트에서 객체를 표현하기 위해 사용하는 약속입니다.
 * 인터페이스를 사용하면 객체의 표현을 변수처럼 사용할 수 있습니다.
 * 몇가지 편의기능을 가지고 있습니다.
 */


/**
 * 인터페이스의 기본적인 사용법
 * 인터페이스의 이름은 영문 대문자로 시작하는 것이 관례입니다.
 */ 
interface Address {
    /**
    * 인터페이스 속에서 데이터를 표현한 것 하나하나를 필드라고 부릅니다.
    * 필드의 구분자로 콜론을 사용합니다.
    */ 
    address1: string;
    /**
    * 필드의 구분자로 콤마를 사용할 수도 있습니다.
    * 콜론과 콤마 중에서 어느것을 사용해도 괜찮습니다.
    * 줄을 구분했다면 생략해도 됩니다.
    * 보통은 eslint와 prettier 조합으로 한 방식만 사용하도록 강제합니다.
    */
    address2: string,
}



/**
 * 문제) 
 * 인터페이스는 객체를 표현할 수 있습니다.
 * 변수에 유저 타입의 객체를 할당해 보세요.
 */
interface 유저 {
    id: string;
    성: string;
    명: string;
}

const 나;


/**
 * 인터페이스는 extends 라는 키워드를 이용해서 상속을 할 수 있습니다.
 */
interface 사람 {
    키: number
}

interface 유저 extends 사람 {
    id: string;
    성: string;
    명: string;
}

/**
 * 인터페이스는 중복해서 선언할 수 있습니다.
 */
interface A { 
    a: string
 }
interface A {
    b: number
}


/**
 * 문제)
 * 아래의 변수를 초기화 해 보세요.
 */
const test: A;



/**
 * 문제) 
 * 전역변수 window.a 를 사용하려고 했지만 에러가 발생했습니다.
 * 타입스크립트 컴파일러는 window.a 가 있는지 모릅니다.
 * 인터페이스를 선언해서 window.a 가 있다는 사실을 알려주세요.
 * 웹 페이지의 전역 인터페이스는 Window 입니다.
 */ 
alert(window.a);












