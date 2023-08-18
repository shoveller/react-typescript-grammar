export {}

/**
 * 아래의 인터페이스에서 id 필드와 name 필드만 추출해서 Human 이라는 타입을 만들어 보세요.
 * 키워드는 Omit 과 Pick 입니다.
 * 가능하다면 두가지 방법 모두로 만들어 보세요.
 */
interface User {
    id: string;
    name: string;
    comment: string;
}


/**
 * Omit 은 어떤 타입에서 특정 필드만 제거한 새로운 타입을 만듭니다.
 */
type Human = Omit<User , 'comment'>

/**
 * Pick 은 어떤 타입에서 특정 필드만 가져와 새로운 타입을 만듭니다.
 */
type Human = Pick<User, 'id' | 'name'>