/**
 * 버튼Props 에 onClick 이벤트 핸들러의 타입 정의가 뺘져 있습니다.
 * 버튼Props 에 빠진 프로퍼티를 적어 주세요.
 */

interface 버튼Props {
  className: string;
  children: React.ReactNode;
}

export const 버튼 = ({ children, className, onClick }: 버튼Props) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
