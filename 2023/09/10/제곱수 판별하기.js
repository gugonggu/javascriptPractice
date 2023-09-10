// 정수 n이 주어질 때, n이 제곱수라면 1을, 아니라면 2를 반환하는 문제입니다.
// n을 제곱근으로 만들고, 그 숫자를 1로 나누었을 때 나누어 떨어진다면 1을, 아니라면 2를 반환합니다.

function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}
