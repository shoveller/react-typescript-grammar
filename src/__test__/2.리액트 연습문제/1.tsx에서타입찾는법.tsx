/**
 * dom 엘리먼트의 정확한 타입을 찾아 보세요.
 */
const 버튼 = () => {
  // role prop 에 적합한 타입은 무엇일까요?
  const role: unknown = undefined;

  // onClick prop 에 적합한 타입은 무엇일까요?
  const onClick: unknown = (e) => {};

  return <button role={role} onClick={onClick} />;
};

/**
 * 1. cmd 나 ctrl을 누른 상태로 prop의 키를 클릭하거나 마우스를 올려 보세요.
 * 2. vscode 가 추천하는 타입을 복사해 넣으세요.
 * 3. undefined 의 유니온은 옵셔널 타입으로 대체할 수 있습니다.
 */
