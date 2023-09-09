// 정수 n과 정수 배열 numlist가 주어졌을 때
// 배열에서 n의 배수가 아닌 수들을 제거한 배열을 반환하는 문제입니다.
// filter를 사용해서 문제를 해결했습니다.

function solution(n, numlist) {
    return numlist.filter((v) => v % n === 0);
}
