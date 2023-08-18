export {}

/**
 * 문제)
 * 아래의 타입은 복잡한 배열을 표현하고 있습니다.
 * 타입의 에러를 수정해 보세요.
 */

type Comment = {
    id: string,
    content: string
}

interface User {
    id: string;
    name: string;
    comment: Comment;
}

const 사용자: User = {
    id: '아이디',
    name: '이름',
    comment: [
        { 
            id: '1',
            content: '나나나'
        },
        { 
            id: '2',
            content: '나나나'
        }
    ]
}

/**
 * 이 문제는 두 가지 방법으로 풀 수 있습니다.
 * 1. 대괄호 추가
 * 2. 제네릭 타입 사용
 */