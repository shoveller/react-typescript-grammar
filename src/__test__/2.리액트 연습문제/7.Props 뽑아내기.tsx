import { ComponentProps, ComponentType, FC } from "react";

// 아래의 체크박스는 Props 타입을 인라인으로 선언했습니다.
export const 체크박스: FC<{ id: string; name: string }> = ({ id, name }) => {
  return <input id={id} name={name} />;
};

// 아래의 헬퍼를 이용해서 인라인 props를 추출해 보세요.
type 체크박스Props = ComponentProps<체크박스>;
type 체크박스타입 = ComponentType<체크박스>;
