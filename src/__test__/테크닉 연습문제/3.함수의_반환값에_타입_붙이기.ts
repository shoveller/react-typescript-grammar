export {}

type Comment = {
    id: string,
    content: string
}

interface User {
    id: string;
    name: string;
    comment: Comment[];
}

/**
 * 아래 두 함수의 반환값에 올바른 타입 어노테이션을 붙여 보세요.
 */
const createUser = () => {
    return {
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
}

function createUser2() {
    return {
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
}

createUser()
createUser2();

/**
 * 함수의 반환값은 타입스크립트 컴파일러의 추론에 의존하는 것이 가장 편하고 실제로도 그렇게 많이 사용합니다.
 * 함수에 반환 타입을 추가하면 함수가 외부뿐만 아니라 내부에서도 안전하다는 것을 더욱 엄격하게 보장할 수 있습니다.
 */