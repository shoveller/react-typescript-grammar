export {}

/**
 * 아래의 비동기작업 이라는 함수는 Promise를 반환하는 콜백함수를 매개변수로 받습니다
 * 콜백함수의 반환값이 true 이면 메시지를 출력합니다.
 * 콜백함수는 숫자 타입의 매개변수를 받습니다.
 * 아래의 문서를 참조해서 콜백함수타입을 완성해 보세요.
 * 가능하다면 콜백함수인터페이스도 완성해 보세요.
 * @link https://www.typescriptlang.org/ko/docs/handbook/2/functions.html
 */
type 콜백함수타입 = { 

}

interface 콜백함수인터페이스 {

}

const 비동기작업 = async (콜백함수: (값: number) => Promise<boolean>) => {
    const 실행완료 = await 콜백함수(2);
    if (실행완료) {
        alert('완료되었습니다.')
    }
}
  
비동기작업(async (값: number) => {
  return 값 === 1;
});

/**
 * 콜백함수인터페이스는 vscode의 자동완성 기능에서 힌트를 찾을 수 있습니다.
 * 자동완성이 만든 타입을 그대로 사용해도 되지만, 불필요한 오버로딩은 최대한 덜어내는 것이 좋습니다.
 * 단일함수를 선언한다면 함수 표현식과 비슷한 모양으로 선언할 수도 있습니다.
 */
// interface 콜백함수인터페이스 { 
//   (값: number): Promise<boolean>
// }

// type 콜백함수타입 = (값: number) => Promise<boolean> 