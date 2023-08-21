/**
 * 아래의 컴포넌트는 자바스크립트의 나머지 프로퍼티 연산자를 사용해서
 * 하지만 타입이 충분하지 않아서 모든 props 에 자동완성이 지원되지 않습니다.
 * unknown 을 대신하는 적절한 타입을 추가해 주세요.
 * <button /> 에 힌트가 있습니다.
 */
export const 버튼 = ({ children, className, ...rest }: unknown) => {
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};
