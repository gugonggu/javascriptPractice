// 1차원 정수 배열 a와 b가 주어질 때 a와 b의 내적을 구하는 문제입니다.
// 내적은 두 배열에서 인덱스가 같은 각 요소들을 곱한 값을 모두 더한 값입니다.

function solution(a, b) {
    var answer = 0;
    for (let i = 0; i < a.length; i++) {
        answer += a[i] * b[i];
    }
    return answer;
}
