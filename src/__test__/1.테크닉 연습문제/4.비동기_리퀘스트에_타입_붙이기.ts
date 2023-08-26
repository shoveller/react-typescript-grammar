import { fetch } from "cross-fetch";

type Comment = {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
};

/**
 * 타입스크립트 에러를 해결해 보세요
 */
// 방법 1: 어렵다
export const getCommentList = async (): Promise<Comment> => {
  const res = await fetch("https://dummyjson.com/comments");
  const data = await res.json();

  return data;
};

// 방법 2: 추천
export const getCommentList2 = async () => {
  const res = await fetch("https://dummyjson.com/comments");
  const data: Comment = await res.json();

  return data;
};

// 방법 3: 추천하지 않음
export const getCommentList3 = async () => {
  const res = await fetch("https://dummyjson.com/comments");
  const data = await res.json();

  // 에러가 나면 내가 다 책임질테니 나만 믿으라구(<-될리가 있냐)
  return data as Comment;
};

getCommentList().then(console.log);
