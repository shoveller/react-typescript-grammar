type 데이터타입 = {
  [뭐가들어올지모르겠음: string]: string;
};

const data: 데이터타입 = {};

/**
 * 자바스크립트에서는 가능했던 동적인 키 할당이 동작하지 않습니다.
 * 가능한 해결 방법을 검색해서 타입 힌트를 주세요.
 * 검색 키워드는 '인덱스 시그니쳐' , 'Record 타입' 입니다.
 */
data.a = "1";
data.b = "2";
data.dffdfssfd = "dffdfssfd";

/**
 * 인덱스 시그니쳐를 사용하는 방법
 * const data: { [id: string]: string } = {}
 *
 * 레코드 타입을 사용하는 방법
 * const data: Record<string, string> = {}
 *
 * 둘 다 가능한 방법이고, 꼭 필요한 때가 있습니다.
 */
