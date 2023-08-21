import { useCallback } from "react";

/**
 * useCallback 은 함수를 캐시해서 리랜더를 막을 때 사용하는 함수입니다.
 * 버튼의 onClick 동작을 수정해서 사용하려고 합니다.
 * useCallback의 타입 에러를 고쳐보세요.
 */
export const 버튼목록 = () => {
  const onClick = useCallback<string>((buttonName) => {
    console.log(buttonName);
  }, []);

  return (
    <div>
      <button onClick={() => onClick("A")}>A</button>
      <button onClick={() => onClick("B")}>B</button>
      <button onClick={() => onClick("C")}>C</button>
    </div>
  );
};
