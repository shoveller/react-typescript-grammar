import { AriaRole, MouseEventHandler } from "react";

/**
 * dom 엘리먼트의 정확한 타입을 찾아 보세요.
 */
export const 버튼 = () => {
  // role prop 에 적합한 타입은 무엇일까요?
  // AriaRole 은 string을 포함하는 타입이라 string 도 가능
  // | undefined 있을수도 있고 없을수도 있다
  const role: AriaRole | undefined = "button";

  // onClick prop 에 적합한 타입은 무엇일까요?
  // | undefined 있을수도 있고 없을수도 있다
  // () => 도 허용한다
  const onClick: MouseEventHandler<HTMLButtonElement> | undefined = (e) => {
    e.detail;
  };

  return <button role={role} onClick={onClick} />;
};
