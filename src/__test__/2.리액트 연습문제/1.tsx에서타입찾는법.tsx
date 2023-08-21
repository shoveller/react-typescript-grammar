/**
 * dom 엘리먼트의 정확한 타입을 찾아 보세요.
 */
export const 버튼 = () => {
  // role prop 에 적합한 타입은 무엇일까요?
  const role: unknown = undefined;

  // onClick prop 에 적합한 타입은 무엇일까요?
  const onClick: unknown = (e) => {};

  return <button role={role} onClick={onClick} />;
};
