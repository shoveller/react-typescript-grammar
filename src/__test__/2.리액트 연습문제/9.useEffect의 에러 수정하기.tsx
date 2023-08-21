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

/**
 * 1. 에러가 발생한 코드 위에 마우스를 올려봅니다.
 * 2. Destructor 에 문제가 있다는 것을 확인합니다.
 * 3. useEffect 함수의 타입 정의로 들어갑니다.
 * 4. EffectCallback -> Destructor 순으로 찾아가면, 아무것도 반환하지 않거나 함수를 반환해야 한다는 것을 알 수 있습니다.
 * 5. vscode 의 자동완성의 도움을 받아 코드를 수정합니다.
 */
