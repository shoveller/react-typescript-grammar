import { useState } from "react";

/**
 * 아래의 투두리스트는 { id: string, value: string }[] 타입의 변수를 목록으로 그립니다.
 * useState 에 적절한 타입을 입혀 보세요.
 */
const 투두리스트 = () => {
  const [리스트, set리스트] = useState([]);

  return (
    <ul>
      {리스트.map((item, index) => {
        const key = `${index.id}_${index}`;
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

/**
 * 1. 리스트 변수에 마우스를 올려서 문제를 파악합니다.
 * 2. 사용중인 프로퍼티를 파악합니다.
 * 3. useState 는 제네릭 함수입니다.
 * 4. 타입을 인라인으로 적어 보세요.
 * 5. 타입을 type 이나 interface로 추출해 보세요.
 */
