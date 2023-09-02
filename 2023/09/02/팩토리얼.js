// 정수 n이 주어졌을 때 i 팩토리얼을 해서 n보다 크거나 같은 가장 큰 i를 반환하는 문제입니다.
// 만약 i를 계속 곱하는 answer이 n과 같다면 i를 반환하고, n보다 크다면 i - 1을 반환합니다.

function solution(n) {
    var answer = 1;
    for (let i = 1; true; i++) {
        answer *= i;
        if (answer === n) {
            return i;
        } else if (answer > n) {
            return i - 1;
        }
    }
}
