/**
 * 버튼 컴포넌트에 className 이라는 값을 넘기고 싶습니다.
 * 올바른 타입을 대입해서 타입스크립트 에러를 지워 보세요.
 * button 의 prop인 className의 타입을 찾을 수 있나요?
 * props 는 className 을 가지는 객체입니다.
 * props 는 어떤 타입이 되어야 할까요?
 */
export const 버튼 = (props: unknown) => {
  return <button className={props.className}></button>;
};

/**
 * 1. cmd 나 ctrl을 누른 상태로 prop의 키를 클릭하거나 마우스를 올려 보세요.
 * 2. vscode 의 자동완성 기능을 이용해서 타입을 만드세요.
 * 3. 타입으로 옮겨 보세요.
 * 4. 인터페이스로 옮겨 보세요.
 */
