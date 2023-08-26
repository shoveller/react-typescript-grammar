/**
 * 아래의 try ~ catch 문 안에서 타입 에러가 발생하고 있습니다.
 * 지금까지 배운 테크닉 중의 하나를 이용해서 에러를 해결해 보세요.
 * 키워드는 아래와 같습니다.
 * 1. any // 타입 단정하기 , assertion
 * 2. as // 타입 단정하기 , assertion
 * 3. instanceof  // 타입 덜어내기 , narrowing
 */

try {
  // 중요한 일
} catch (e) {
  // 자바스크립트는 무엇이든 throw 할 수 있기 때문에
  // 에러는 항상 unknown
  // throw ''
  // throw Promise.resolve('')
  console.log(e.message);
}

// 답1: any
try {
  // 중요한 일
} catch (e: any) {
  // 자바스크립트는 무엇이든 throw 할 수 있기 때문에
  // 에러는 항상 unknown
  // throw ''
  // throw Promise.resolve('')
  console.log(e.message);
}

// 답2: as
try {
  // 중요한 일
} catch (e) {
  // 에러가 나면 내가 책임진다!
  const b = e as Error;
  // 자바스크립트는 무엇이든 throw 할 수 있기 때문에
  // 에러는 항상 unknown
  // throw ''
  // throw Promise.resolve('')
  // . 뒤에서 에러터질 확률 up
  console.log(b.message);
}

// 답3: instanceof : 추천
try {
  // 중요한 일
} catch (e) {
  // 자바스크립트는 무엇이든 throw 할 수 있기 때문에
  // 에러는 항상 unknown
  // throw ''
  // throw Promise.resolve('')
  if (e instanceof Error) {
    // 에러가 안남
    console.log(e.message);
  }
}
