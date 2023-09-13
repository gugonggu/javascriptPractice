// 정수 n이 주어질 때 n을 3과 3의 배수를 사용하지 않는 숫자체계로 계산하는 문제입니다.
// 받은 n만큼 for문을 돌면서 answer을 증가시킵니다
// 만약 증가된 answer이 3의 배수이거나, 3을 포함하고 있는 숫자면 answer을 다시 한 번 더 증가시킵니다.

function solution(n) {
    var answer = 0;
    for (let i = 0; i < n; i++) {
        answer++;
        while (answer % 3 === 0 || [...answer.toString()].includes("3")) {
            answer++;
        }
    }
    return answer;
}
