/**
 * 아래의 try ~ catch 문 안에서 타입 에러가 발생하고 있습니다.
 * 지금까지 배운 테크닉 중의 하나를 이용해서 에러를 해결해 보세요.
 * 키워드는 아래와 같습니다.
 * 1. any
 * 2. as
 * 3. instanceof
*/

try {
  // 중요한 일  
} catch(e) {
  console.log(e.message)
}

/**
 * 1. any 로 타이핑하기
 * 실무에서 가장 많이 등장하는 패턴입니다.
 * 하지만 any로 타이핑을 한 이상, 실행해 봐야만 발생하는 에러를 만들기 쉽습니다.
 */
try {
  // 중요한 일  
} catch(e: any)  {
  console.log(e.message)
}

/**
 * 2. as 로 단정하기
 * 이것 또한 실무에서 가장 많이 등장하는 패턴입니다.
 * 하지만 함부로 타입을 단정하면, 실행해 봐야만 발생하는 에러를 만들기 쉽습니다.
 */
try {
  // 중요한 일  
} catch(e)  {
  console.log((e as Error).message)
}

/**
 * 2. instanceof 로 범위 좁히기
 * 요즘 유행하는 패턴입니다.
 * 실행할 때도 안전하고 타입 안정성도 보장합니다.
 */
try {
    // 중요한 일  
  } catch(e)  {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }