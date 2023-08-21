type 버튼타입 = {
  // children 에 unknown을 대신할 수 있는 타입을 지정해 주세요.
  // children 은 string, null, number ReactElement 모두가 될 수 있습니다.
  children: unknown;
};

export const 버튼: React.FC<버튼타입> = (props) => {
  return <button>{props.children}</button>;
};
