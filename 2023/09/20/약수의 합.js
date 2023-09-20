// 정수 n이 주어질 때 n의 약수를 모두 더한 값을 반환하는 문제입니다.

function solution(n) {
    var answer = 0;
    const ary = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer += i;
        }
    }
    return answer;
}
