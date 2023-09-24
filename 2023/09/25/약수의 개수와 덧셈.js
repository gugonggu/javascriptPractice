// 두 정수 left와 right이 주어질 때 left부터 right까지의 모든 수들 중에서 약수의 개수가 짝수면 더하고, 홀수면 뺀 결과값을 반환하는 문제입니다.
// 2중 for문을 통해 left부터 right까지 각각의 요소에 대한 약수의 개수를 체크하고
// 삼항 연산자를 통해 약수가 짝수인지 홀수인지를 판별해 더하거나 빼주었습니다.

function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        let divisor = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) divisor++;
        }
        divisor % 2 === 0 ? (answer += i) : (answer -= i);
        divisor = 0;
    }
    return answer;
}
