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

/**
 * React.FC 는 리액트에서 함수형 컴포넌트를 나타내기 위해 제공하는 유틸리티 타입입니다.
 * React.FC 위로 마우스를 가져가 타입 정의로 이동하면, 일부 프로퍼티를 취하고 기본값은 빈 객체임을 나타내는 단일 문자 P가 있는 것을 볼 수 있습니다:
 * 더 파고들어가 FunctionComponent를 확인해보면 더 정확한 정의를 알아낼 수 있습니다.
 * defaultProps 처럼 더 이상 사용하지 않지만 흔적으로만 남은 프로퍼티도 확인할 수 있습니다.
 * React.FC 를 설정하면 이제 className 에서 에러가 발생합니다.
 * React.FC 는 제네릭 타입이고, 컴포넌트의 Props를 인자로 받습니다.
 * 그것은 React.FC 의 타입 정의를 파고 들어가보면 알 수 있습니다.
 * React.FC<버튼타입> 으로 설정하면 이제 부모 컴포넌트의 에러가 사라집니다.
 * 마지막으로 버튼 컴포넌트가 JSX를 반환하도록 수정해주면 됩니다.
 */
