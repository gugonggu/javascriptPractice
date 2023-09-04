// 문자열 my_string이 주어질 때, 문자열 안에 있는 숫자를 모두 더한 값을 반환하는 문제였습니다.
// 정규표현식과 match를 사용해 문자열에서 숫자를 걸러내고 map을 사용해 문자 타입인 숫자를 넘버 타입으로 변환합니다.
// 그 뒤 reduce를 사용해 모든 숫자를 더한 값을 반환했습니다.

function solution(my_string) {
    const regex = /[0-9]/g;
    return my_string
        .match(regex)
        .map((v) => Number(v))
        .reduce((a, c) => a + c);
}
