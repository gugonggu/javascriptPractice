// 문자열 s를 내림차순으로 정렬하는 문제입니다
// 문자열을 정렬하고 뒤집어서 반환했습니다.

function solution(s) {
    return [...s].sort().reverse().join("");
}
