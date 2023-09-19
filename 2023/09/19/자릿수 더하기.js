// 자연수 n이 주어질 때 n의 각 자릿수의 합을 구하는 문제입니다
// 자연수를 문자열로 변환하고, 배열로 변환시켜 reduce를 사용해 문제를 해결했습니다.

function solution(n) {
    return [...n.toString()].reduce((a, c) => a + Number(c), 0);
}
