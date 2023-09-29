// 두 정수가 주어질 때 그 수들의 최대공약수와 최소공배수를 배열에 순서대로 담아 반환하는 문제입니다.

function solution(n, m) {
    var answer = [];
    for (let i = m; i >= 1; i--) {
        if (n % i === 0 && m % i === 0) {
            answer.push(i);
            break;
        }
    }

    let j = 1;
    while (true) {
        if (j % n === 0 && j % m === 0) {
            answer.push(j);
            break;
        } else {
            j++;
        }
    }

    return answer;
}
