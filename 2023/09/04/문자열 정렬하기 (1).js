// 문자열 my_string이 주어졌을 때, 문자열 안에 있는 숫자만 골라 오름차순으로 정렬한 배열을 반환하는 문제였습니다.
// 정규표현식과 match를 사용해 숫자만 걸러낸 배열을 만들었고, 배열의 각 요소를 숫자로 바꿔준 뒤 sort를 사용해 정렬해서 답을 반환했습니다.

function solution(my_string) {
    const regex = /[0-9]/g;
    return my_string
        .match(regex)
        .map((v) => Number(v))
        .sort((a, b) => a - b);
}
