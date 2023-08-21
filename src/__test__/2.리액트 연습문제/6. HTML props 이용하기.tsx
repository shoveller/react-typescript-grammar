import { ComponentProps, PropsWithChildren } from "react";

/**
 * 아래의 컴포넌트는 자바스크립트의 나머지 프로퍼티 연산자를 사용해서
 * 하지만 타입이 충분하지 않아서 ...rest 에 자동완성이 지원되지 않습니다.
 * ...rest 에 적절한 타입을 입혀 주세요.
 * <button /> 에 힌트가 있습니다.
 */
export const 버튼 = ({
  children,
  className,
  ...rest
}: ComponentProps<"button">) => {
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};

/**
 * 1. button 위에 마우스를 올려서 타입을 확인하세요
 * 2. button 의 타입을 모두 복사해서 unknown을 대신하도록 합니다.
 * 3. React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> 이 됩니다
 * 4. React.ButtonHTMLAttributes<HTMLButtonElement> 로 적용해도 잘 동작합니다.
 * 3. 이 구문은 React.ComponentProps 로 대체할 수 있습니다. ComponentProps<'button'>
 */
