export {};

interface User {
  id: string;
  name: string;
  comment: string;
}

/**
 * User 인터페이스에서 id 필드와 name 필드만 추출해서 Human 이라는 타입을 만들어 보세요.
 * 키워드는 Omit 과 Pick 입니다.
 * 가능하다면 두가지 방법 모두로 만들어 보세요.
 */
type Human = unknown;
