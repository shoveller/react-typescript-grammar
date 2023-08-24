import { useEffect } from "react";

/**
 * 아래의 커스텀 훅은 일정시간 후에 console.log 를 호출합니다.
 * 타입 에러를 수정하세요.
 */
export const use타이머 = (타임아웃: number) => {
  useEffect(
    () =>
      setTimeout(() => {
        console.log("완료!");
      }, 타임아웃),
    [타임아웃]
  );
};
