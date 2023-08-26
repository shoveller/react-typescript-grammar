import { MouseEventHandler, useCallback } from "react";

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

// 답 1: useCallback에 제네릭을 이용하지 마세요.
// 매개변수에 타입을 입히세요.
export const 버튼목록2 = () => {
  const onClick = useCallback((buttonName: string) => {
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

// 답 2: 매개변수를 따로 받지 않는 이벤트 핸들러 타입은 이렇게 입혀도 좋습니다.
export const 버튼목록2 = () => {
  const onClick = useCallback<
    MouseEventHandler<HTMLButtonElement>
  >(() => {}, []);

  return (
    <div>
      <button onClick={onClick}>A</button>
      <button onClick={onClick}>B</button>
      <button onClick={onClick}>C</button>
    </div>
  );
};
