const 컨테이너 = () => {
    
    return (
      <div
        // role prop 에 적합한 타입은 무엇일까요?
        role={}
        // onClick prop 에 적합한 타입은 무엇일까요?
        onClick={(e) => {

        }}
      />
    );
  };

  /**
   * 가장 추천하고 싶은 방법은 cmd 나 ctrl을 누른 상태로 prop을 클릭하는 것입니다.
   * 세부 타입을 하나씩 찾아서 파고들어가다 보면 사용할 수 있는 모든 경우의 수를 찾게 됩니다.
   * vscode의 자동완성 기능은 바로 이 타입 정의 타일로 지탱이 되고 있습니다.
   * 
   * role 의 타입은 AriaRole | undefined 이라는 유니온이었네요.
   * 
   * onClick 의 타입은 조금 복잡한 제네릭 타입으로 정의가 되어 있습니다.
   * MouseEventHandler<T> 라는 것은 타입을 실행하는 시점에 결정하는 함수 타입입니다.
   * 원본의 정의를 복사해 온 다음에 T 안에 HTML 엘리먼트의 타입을 적어주면 됩니다.
   * 정확한 타입은 MouseEventHandler<HTMLDivElement> 입니다.
   */