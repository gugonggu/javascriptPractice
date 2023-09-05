// 문자열 my_string이 주어졌을 때 문자열에서 중복된 문자를 제거한 문자열을 반환하는 문제입니다.
// 문자열을 set 타입으로 변환시켜 중복된 요소를 없애준 뒤 스프레드 연산자를 사용해 배열로 만들고 join을 사용해 문자열을 만들어 반환했습니다.

function solution(my_string) {
    return [...new Set(my_string)].join("");
}
