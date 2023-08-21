type 버튼타입 = {
    // children 은 어떤 타입이 적절할까요?
    // vscode로 React.FC안의 함수형 컴포넌트의 정의를 확인해 보세요.
    // 적절한 타입을 지정해 주세요.
    children: unknown
}

export const 버튼: React.FC< 버튼타입> = (props) => {
    return <button>{props.children}</button>;
};
P

/**
 * children 의 올바른 타입은 React.ReactNode 입니다.
 * ReactNode 는 null 과 string, number, ReactElement를 모두 포괄하는 타입입니다.
 * children 타입은 React.PropsWithChildren 이라는 유틸리티 타입을 이용해서 업데이트를 할 수도 있습니다.
 */