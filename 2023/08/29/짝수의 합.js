// 정수 n이 주어졌을 때, 0부터 n까지 모든 짝수를 더해 반환하는 문제였습니다.
// 저는 아래와 같이 for 반복문을 이용해 풀었지만

function solution(n) {
    var answer = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            answer += i;
        }
    }
    return answer;
}

// 아래와 같이 수열 공식을 이용하거나

function solution(n) {
    var half = Math.floor(n / 2);
    return half * (half + 1);
}

// 아래와 같이 반복 횟수를 줄여 성능을 개선할 수 도 있습니다.

function solution(n) {
    var answer = 0;
    for (let i = 2; i <= n; i += 2) answer += i;
    return answer;
}
