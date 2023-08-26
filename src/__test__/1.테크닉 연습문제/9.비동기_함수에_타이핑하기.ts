export {};

/**
 * 아래의 비동기작업 이라는 함수는 Promise를 반환하는 콜백함수를 매개변수로 받습니다
 * 콜백함수의 반환값이 true 이면 메시지를 출력합니다.
 * 콜백함수는 숫자 타입의 매개변수를 받습니다.
 * 아래의 문서를 참조해서 콜백함수타입을 완성해 보세요.
 * 가능하다면 콜백함수인터페이스도 완성해 보세요.
 * @link https://www.typescriptlang.org/ko/docs/handbook/2/functions.html
 */
type 콜백함수타입 = (값: number) => Promise<boolean>;

interface 콜백함수인터페이스 {
  (값: number): Promise<boolean>;
}

/**
 * 1. 자동완성 기능으로 인터페이스 생성
 * 2. 불필요한 타입 덜어내기
 * 3. 인라인 어노테이션 잘라내서 인터페이스로 만들기
 */
const 비동기작업 = async (콜백함수: 콜백함수인터페이스) => {
  const 실행완료 = await 콜백함수(2);
  if (실행완료) {
    alert("완료되었습니다.");
  }
};

비동기작업(async (값: number) => {
  return 값 === 1;
});
