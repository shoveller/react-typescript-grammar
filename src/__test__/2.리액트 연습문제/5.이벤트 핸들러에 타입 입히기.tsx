/**
 * 버튼Props 에 onClick 이벤트 핸들러의 타입 정의가 뺘져 있습니다.
 * 버튼Props 에 빠진 프로퍼티를 적어 주세요.
 */

interface 버튼Props {
  className: string;
  children: React.ReactNode;
}

export const Button = ({ children, className, onClick }: 버튼Props) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

/**
 * 1. button 위에 마우스를 올리고 타입 정의를 찾습니다
 * 2. 이때 타입 정의가 옵셔널 프로퍼티인지 확인합니다.
 * 3. 타입을 복사해서 props에 옮깁니다.
 */
