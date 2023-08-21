import { useEffect, useRef } from "react";

/**
 * 타입스크립트로 useRef를 사용하려니 타입에러가 발생했습니다.
 * 올바른 타입을 추적하고 코드를 보완해서 에러를 수정하세요.
 */
export const 인풋 = () => {
  const ref = useRef();

  useEffect(() => {
    ref.current.value = "리액트의 리랜더는 스냅샷의 변경사항을 알아내는 작업";
  }, []);

  return <input ref={ref} />;
};

/**
 * 1. ref 를 사용하는 input에서 에러가 발생한 곳을 찾아 힌트를 찾으세요.
 * 2. 답을 찾아서 useRef에 힌트를 주세요.
 * 3. useRef 에 적절한 초깃값을 주세요.
 * 4. useEffect 안에 방어 코드를 적어주세요.
 */
