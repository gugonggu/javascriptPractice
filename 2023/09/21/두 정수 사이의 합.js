// 정수 a와 b가 주어질 때 a와 b 사이에 속한 모든 정수의 합을 반환하는 문제입니다.
// 큰 수와 작은 수를 구하기 위해 if문을 돌려 a와 b를 할당하고
// for문을 이용해 사이에 있는 값을 구해줬습니다.

function solution(a, b) {
    var answer = 0;
    let smallNum;
    let bigNum;
    if (a > b) {
        bigNum = a;
        smallNum = b;
    } else {
        bigNum = b;
        smallNum = a;
    }
    for (let i = smallNum; i <= bigNum; i++) {
        answer += i;
    }
    return answer;
}

// math min, max를 활용해서 문제를 해결할 수 있습니다
function solution(a, b) {
    var answer = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        answer += i;
    }
    return answer;
}

// 또는 가우스 공식을 이용하여 문제를 해결할 수 있습니다.
function solution(a, b) {
    return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}
