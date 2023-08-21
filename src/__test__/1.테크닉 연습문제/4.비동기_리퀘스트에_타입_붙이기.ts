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
export const getCommentList = async (): Comment => {
  const res = await fetch("https://dummyjson.com/comments");
  const data = await res.json();

  return data;
};

getCommentList().then(console.log);
