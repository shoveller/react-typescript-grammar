type 버튼타입 = {
  // children 에 unknown을 대신할 수 있는 타입을 지정해 주세요.
  // children 은 string, null, number ReactElement 모두가 될 수 있습니다.
  children: unknown;
};

export const 버튼: React.FC<버튼타입> = (props) => {
  return <button>{props.children}</button>;
};

/**
 * 1. props.children 위에 마우스를 올려보세요
 * 2. children 의 올바른 타입은 React.ReactNode 입니다.
 * 3. ReactNode 는 null 과 string, number, ReactElement를 모두 포괄하는 타입입니다.
 */
