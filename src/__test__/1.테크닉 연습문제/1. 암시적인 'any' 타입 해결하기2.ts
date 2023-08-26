export {};

type 타입_어노테이션 = { a: number; b: number };

interface 인터페이스_어노테이션 {
  a: number;
  b: number;
}

/**
 * 아래 함수의 매개변수는 객체입니다.
 * 아래의 함수에서 타입스크립트 에러를 없애 보세요.
 */
const 더하기 = (객체: 인터페이스_어노테이션) => {
  return 객체.a + 객체.b;
};

console.log(더하기({ a: 1, b: 2 }));
