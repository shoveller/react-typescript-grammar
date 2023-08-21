export {};

/**
 * 아래의 비동기작업 이라는 함수는 Promise를 반환하는 콜백함수를 매개변수로 받습니다
 * 콜백함수의 반환값이 true 이면 메시지를 출력합니다.
 * 콜백함수는 숫자 타입의 매개변수를 받습니다.
 * 아래의 문서를 참조해서 콜백함수타입을 완성해 보세요.
 * 가능하다면 콜백함수인터페이스도 완성해 보세요.
 * @link https://www.typescriptlang.org/ko/docs/handbook/2/functions.html
 */
type 콜백함수타입 = {};

interface 콜백함수인터페이스 {}

const 비동기작업 = async (콜백함수) => {
  const 실행완료 = await 콜백함수(2);
  if (실행완료) {
    alert("완료되었습니다.");
  }
};

비동기작업(async (값) => {
  return 값 === 1;
});

/**
 * 1. 문제가 발생한 코드에 마우스를 두고, vscode의 자동완성 기능으로 코드를 만듭니다.
 * 2. 자동완성이 만든 타입에서 불필요한 오버로딩을 제거합니다.
 * 3. 자동완성이 만든 타입을 type 또는 interface 로 만듭니다.
 */
// interface 콜백함수인터페이스 {
//   (값: number): Promise<boolean>
// }

// type 콜백함수타입 = (값: number) => Promise<boolean>
