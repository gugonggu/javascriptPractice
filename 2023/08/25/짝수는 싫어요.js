// 정수가 주어질 때, 그 정수 이하의 홀수가 오름차순으로 담긴 배열을 반환하는 문제였습니다.

// for문을 통해 1부터 정수까지 홀수가 아닌 값을 배열에 반복해서 넣습니다.

function solution(n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            answer.push(i);
        }
    }
    return answer;
}
