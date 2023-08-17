/**
 * 인터페이스(interface)란?
 * 타입스크립트에서 객체를 표현하기 위해 사용하는 약속입니다.
 * 몇가지 편의기능을 가지고 있습니다.
 */


/**
 * 인터페이스의 기본적인 사용법
 */ 
interface 주소 {
    /**
    * 인터페이스 속에서 데이터를 표현한 것 하나하나를 필드라고 부릅니다.
    * 필드의 구분자로 콜론을 사용합니다.
    */ 
    address1: string;
    /**
    * 필드의 구분자로 콤마를 사용할 수도 있습니다.
    * 콜론과 콤마 중에서 어느것을 사용해도 되지만, 인터페이스에서는 콜론을 사용하는 것이 관례입니다.
    */
    address2: string,
}

// 문제) 인터페이스는 객체를 표현할 수 있습니다.
// 변수에 객체를 할당해 보세요.
interface 유저 {
    id: string;
    성: string;
    명: string;
}


/**
 * 인터페이스는 상속을 할 수 있습니다.
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


let test: A;


/**
 * 문제) 
 * 전역변수 window.a 를 사용하려고 했지만 에러가 발생했습니다.
 * 타입스크립트 컴파일러는 window.a 가 있는지 모릅니다.
 * 인터페이스로 window.a 가 있다는 사실을 알려주세요.
 */ 
alert(window.a);












