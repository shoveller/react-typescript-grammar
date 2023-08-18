/**
 * 아래의 <버튼 /> 은 잘못된 컴포넌트입니다
 * 버튼에 함수형 컴포넌트 전용 타입을 입히면 사용하기 전에 에러를 막을 수 있습니다.
 * unknown 을 적절한 타입으로 바꾸어 보세요.
 */

type 버튼타입 = {
  className: string;
}
  
export const 버튼: React.FC<버튼타입> = (props) => {
  return {
    이름: "abc",
  };
};

const 부모 = () => {
  return <버튼 className="my-class" />;
};


/**
 * 이 문제를 해결하는 방법은 React.FC 를 사용하는 것입니다.
 * React.FC 는 리액트에서 함수형 컴포넌트를 나타내기 위해 제공하는 유틸리티 타입입니다.
 * React.FC 를 설정하면 이제 className 에서 에러가 발생합니다.
 * React.FC 는 제네릭 타입이고, 컴포넌트의 Props를 인자로 받습니다.
 * 그것은 React.FC 의 타입 정의를 파고 들어가보면 알 수 있습니다.
 * React.FC<버튼타입> 으로 설정하면 이제 부모 컴포넌트의 에러가 사라집니다.
 * 마지막으로 버튼 컴포넌트가 JSX를 반환하도록 수정해주면 됩니다.
 */