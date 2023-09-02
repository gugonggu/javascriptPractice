// 자연수 n이 주어질 때 n 이하의 합성수의 개수를 반환하는 문제입니다.
// 우선 for문을 통해 1부터 n까지 반복문을 돕니다.
// 반복문을 돌 때 i의 약수 개수를 나타내는 temp는 0으로 초기화되고
// 2중 반복문을 통해 i의 약수의 개수를 체크합니다.
// 2중 반복문을 나왔을때 temp가 3이상이라면 i는 합성수이기 때문에 answer를 증가시킵니다.

function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        let temp = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                temp++;
            }
        }
        if (temp >= 3) {
            answer++;
        }
    }
    return answer;
}
