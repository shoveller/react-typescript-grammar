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