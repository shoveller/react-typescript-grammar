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
