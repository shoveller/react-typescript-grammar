import { fetch } from 'cross-fetch'

type Comment = {
    id: number,
    body: string,
    postId: number,
    user: {
      id: number,
      username: string
    }
}

/**
 * 타입스크립트 에러를 해결해 보세요
 */
export const getCommentList = async () => {
    const res = await fetch("https://dummyjson.com/comments")
    const data = await res.json()
  
    return data as Comment;
  };

  getCommentList().then(console.log)


  /**
   * 세 가지 해결 방법이 있습니다.
   * 1. vscode의 빠른 수정 이용하기
   * 2. 리스폰스 데이터에 타입 입히기
   *    async 함수 안에서 await 으로 받은 값은 동기가 되므로 타입 어노테이션을 이용할 수 있습니다.
   * 3. 데이터에 타입 강제하기
   *    as 를 사용하면 타입을 단정할 수 있습니다. 
   */