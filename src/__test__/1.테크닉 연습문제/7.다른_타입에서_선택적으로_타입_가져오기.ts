export {};

interface 사람 {
  id: string;
  name: string;
  comment: string;
}

/**
 * 사람 인터페이스에서 id 필드와 name 필드만 추출해서 닝겐 이라는 타입을 만들어 보세요.
 * 키워드는 Omit 과 Pick 입니다.
 * 가능하다면 두가지 방법 모두로 만들어 보세요.
 */
type 닝겐1 = { id: string; name: string };

/**
 * Omit 은 어떤 타입에서 특정 필드만 제거한 새로운 타입을 만듭니다.
 */
type 닝겐2 = Omit<사람, "comment">;

// Omit 과 Pick 은 널리 사용하는 타입입니다.
type 닝겐3 = Pick<사람, "id" | "name">;
