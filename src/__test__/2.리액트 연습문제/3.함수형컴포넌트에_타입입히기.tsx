type 버튼타입 = {
  className: string;
};

/**
 * React.FC 는 함수형 컴포넌트를 표현하는 유틸리티 타입입니다.
 * React.FC 는 Prop 타입을 매개변수로 받습니다.
 * unknown 을 적절한 타입으로 바꾸어 보세요.
 */
export const 버튼: React.FC<unknown> = (props) => {
  return <button className={props.className}>전송!</button>;
};

const 부모 = () => {
  return <버튼 className="my-class" />;
};
