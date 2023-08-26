import { useState } from "react";

/**
 * 아래의 투두리스트는 { id: string, value: string }[] 타입의 변수를 목록으로 그립니다.
 * useState 에 적절한 타입을 지정해 보세요.
 * useState 는 제네릭 함수입니다.
 */

type 투두 = { id: string; value: string };

// 답: useState 는 제네릭 함수이고, 타입을 매개변수로 받을 수 있습니다.
// 인라인 타입을 넣어도되고, 타입이나 인터페이스를 넣어도 됩니다.
const 투두리스트 = () => {
  const [리스트, set리스트] = useState<투두[]>([]);

  return (
    <ul>
      {리스트.map((item, index) => {
        const key = `${item.id}_${index}`;
        const onClick = () =>
          set리스트(리스트.filter((item) => item.id !== item.id));

        return (
          <li key={key} onClick={onClick}>
            {item.value}
          </li>
        );
      })}
    </ul>
  );
};
