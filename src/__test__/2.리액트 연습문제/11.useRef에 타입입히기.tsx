import { useEffect, useRef } from "react";

/**
 * 타입스크립트로 useRef를 사용하려니 타입에러가 발생했습니다.
 * 올바른 타입을 추적하고 코드를 보완해서 에러를 수정하세요.
 */
export const 인풋 = () => {
  // 1. useRef 는 제네릭입니다.
  // 3. <> 안에 타입을 넣으세요.
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.value = "리액트의 리랜더는 스냅샷의 변경사항을 알아내는 작업";
    }
  }, []);

  // 2. html 엘리먼트의 타입을 찾으세요.
  return <input ref={ref} />;
};
